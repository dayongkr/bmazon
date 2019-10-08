const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const cors = require('cors');
const axios = require('axios');

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

dotenv.config();

app.prepare().then(() => {
  const server = express();

  server.use(morgan('dev'));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(cookieParser(process.env.COOKIE_SECRET));
  server.use(
    expressSession({
      resave: false,
      saveUninitialized: false,
      secret: '',
      cookie: {
        httpOnly: true,
        secure: false,
      },
    }),
  );

  server.get('/products/:asin', (req, res, next) => {
    axios
      .get(`https://www.amazon.com/dp/${req.params.asin}`, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4',
        },
      })
      .then(data => {
        res.send(data.data);
      });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(80, () => {
    console.log('next+express running on port 80');
  });
});
