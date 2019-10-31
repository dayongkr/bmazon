exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res
      .status(401)
      .send('로그인이 필요합니다.' + req.user + req.session + req.session.user);
  }
};
