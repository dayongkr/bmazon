const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  if (!req.user) {
    return res.status(401).send('로그인이 필요합니다.');
  }
  const filteredUser = Object.assign(req.user);
  filteredUser.password = '****';
  return res.json(filteredUser);
});

router.post('/', async (req, res, next) => {
  // 회원가입 하기
  try {
    const exUser = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.send('이미 사용중인 아이디입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await db.User.create({
      nickname: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      tel: req.body.tel,
    });
    return res.json(newUser);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

router.post('/login', async (req, res, next) => {
  // 로그인 하기
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.send(info.reason);
    }
    return req.login(user, async loginErr => {
      try {
        if (loginErr) {
          return next(loginErr);
        }
        const filteredUser = Object.assign(user);
        filteredUser.password = '****';
        filteredUser.user = req.isAuthenticated();
        return res.json(filteredUser);
      } catch (e) {
        next(e);
      }
    });
  })(req, res, next);
});

router.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('logout 성공');
});

module.exports = router;
