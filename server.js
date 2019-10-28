const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const compression = require('compression');
const puppeteer = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth');
const lex = require('greenlock-express').create({
  version: 'draft-11',
  configDir: '/etc/letsencrypt',
  server: 'https://acme-v02.api.letsencrypt.org/directory',
  approveDomains: (opts, certs, cb) => {
    if (certs) {
      opts.domains = ['dayongbz.xyz', 'www.dayongbz.xyz'];
    } else {
      opts.email = 'dayongbz@gmail.com';
      opts.agreeTos = true;
    }
    cb(null, { options: opts, certs });
  },
  renewWithin: 81 * 24 * 60 * 60 * 1000,
  renewBy: 80 * 24 * 60 * 60 * 1000,
  store: require('greenlock-store-fs'),
});
const https = require('https');
const http = require('http');
const fs = require('fs');

const productAPIRouter = require('./routes/product');
const productListAPIRouter = require('./routes/productList');
const testAPIRouter = require('./routes/test');
const ppomSale = require('./function/ppomSale');

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

const devOption = {
  key: fs.readFileSync('localhost.key'),
  cert: fs.readFileSync('localhost.crt'),
};

dotenv.config();

app.prepare().then(() => {
  const server = express();
  let cacheItem = 107744;

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
        secure: false,
      },
    }),
  );
  const setupPuppeteer = async () => {
    try {
      puppeteer.use(pluginStealth());
      const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
      module.exports.browser = browser;
      // ppomSale(cacheItem, dev);
      // const ppomSaleInterv = setInterval(ppomSale(cacheItem, dev), 60000); // 뽐뿌 할인 5초간 확인
      browser.on('disconnected', () => {
        // clearInterval(ppomSaleInterv)
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

  server.use('/api/product', productAPIRouter);
  server.use('/api/productList', productListAPIRouter);
  server.use('/api/test', testAPIRouter);

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
      .createServer(lex.middleware(require('redirect-https')()))
      .listen(process.env.PORT || 80);
    https
      .createServer(lex.httpsOptions, lex.middleware(server))
      .listen(process.env.SSL_PORT || 443);
  }
});
