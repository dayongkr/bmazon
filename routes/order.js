const express = require('express');
const axios = require('axios');
const BootpayRest = require('bootpay-rest-client');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    await axios.get('/api/order/verify', { receipt: req.body.receipt_id });
    res.send('OK');
  } catch (e) {
    next(e);
  }
});

router.get('/verify', async (req, res, next) => {
  try {
    console.log('hello');
    BootpayRest.setConfig(
      '5dc235374f74b40025c5f555',
      'SleMYbFexF/WEYy9jgqy4foXZAumP37fk6ENMjrLG60=',
    );

    BootpayRest.getAccessToken().then(res => {
      if (res.status === 200 && res.data.token !== undefined) {
        BootpayRest.verify(req.body.receipt).then(_res => {
          if (_res.status === 200) {
            console.log(_res.data);
          }
        });
      }
    });
    res.send('OK');
  } catch (e) {
    next(e);
  }
});

module.exports = router;
