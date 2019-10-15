const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const compression = require('compression');
const path = require('path');

const productAPIRouter = require('./routes/product');

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

const app = next({
  dev,
  conf: { distDir: `${path.relative(process.cwd(), __dirname)}/../next` },
});
const handle = app.getRequestHandler();

dotenv.config();

app.prepare().then(() => {
  const server = express();

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

  server.get('/product/:asin', (req, res) => {
    return app.render(req, res, '/product', { asin: req.params.asin });
  });

  server.use('/api/product', productAPIRouter);

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(80, () => {
    console.log('next+express running on port 80');
  });
});
