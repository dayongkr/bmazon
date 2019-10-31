/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const compression = require('compression');
const puppeteer = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth');
const greenlockStoreFs = require('greenlock-store-fs');
const greenlockExpress = require('greenlock-express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const redirectHttps = require('redirect-https');
const passport = require('passport');
const cors = require('cors');

const productAPIRouter = require('./routes/product');
const userAPIRouter = require('./routes/user');
const productListAPIRouter = require('./routes/productList');
const cartAPIRouter = require('./routes/cart');
const testAPIRouter = require('./routes/test');
const db = require('./models');
const passportConfig = require('./passport');

const dev = process.env.NODE_ENV !== 'production';
// const prod = process.env.NODE_ENV === 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

const devOption = {
  key: fs.readFileSync('localhost.key'),
  cert: fs.readFileSync('localhost.crt'),
};

const lex = greenlockExpress.create({
  version: 'draft-11',
  configDir: '/etc/letsencrypt',
  server: 'https://acme-v02.api.letsencrypt.org/directory',
  approveDomains: (opts, certs, cb) => {
    const optsCopy = opts;
    if (certs) {
      optsCopy.domains = ['dayongbz.xyz', 'www.dayongbz.xyz'];
    } else {
      optsCopy.email = 'dayongbz@gmail.com';
      optsCopy.agreeTos = true;
    }
    cb(null, { options: optsCopy, certs });
  },
  renewWithin: 81 * 24 * 60 * 60 * 1000,
  renewBy: 80 * 24 * 60 * 60 * 1000,
  store: greenlockStoreFs,
});

dotenv.config();

app.prepare().then(() => {
  const server = express();
  db.sequelize.sync();
  passportConfig();

  server.use(
    cors({
      origin: true,
      credentials: true,
    }),
  );
  server.use(compression());
  server.use(morgan('dev'));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(cookieParser(process.env.COOKIE_SECRET));
  server.use(
    expressSession({
      resave: false,
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET,
      cookie: {
        httpOnly: true,
        secure: !dev,
      },
      name: 'dlekdyd',
    }),
  );
  server.use(passport.initialize());
  server.use(passport.session());

  server.use('/api/product', productAPIRouter);
  server.use('/api/user', userAPIRouter);
  server.use('/api/productList', productListAPIRouter);
  server.use('/api/cart', cartAPIRouter);
  server.use('/api/test', testAPIRouter);

  const setupPuppeteer = async () => {
    try {
      puppeteer.use(pluginStealth());
      const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
      module.exports.browser = browser;
      browser.on('disconnected', () => {
        setupPuppeteer();
      });
      console.log(`Started Puppeteer with pid ${browser.process().pid}`);
    } catch (e) {
      console.error(e);
    }
  };

  setupPuppeteer();

  server.get('/product/:asin', (req, res) => {
    return app.render(req, res, '/product', { asin: req.params.asin });
  });

  server.get('/dp/:asin', (req, res) => {
    return app.render(req, res, '/product', { asin: req.params.asin });
  });

  server.get('/productList/:value', (req, res) => {
    return app.render(req, res, '/productList', { value: req.params.value });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  if (dev) {
    server.listen(80, () => {
      console.log('next+express running on port 80');
    });
    https.createServer(devOption, server).listen(process.env.SSL_PORT || 443);
  } else {
    http
      .createServer(lex.middleware(redirectHttps()))
      .listen(process.env.PORT || 80);
    https
      .createServer(lex.httpsOptions, lex.middleware(server))
      .listen(process.env.SSL_PORT || 443);
  }
});
