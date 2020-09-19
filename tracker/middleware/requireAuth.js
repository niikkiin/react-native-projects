// second version of auth middleware

const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');

module.exports = function (req, res, next) {
  // get authorization from header

  // authorization === 'Bearer sgfdgdfkjsdjfskd'
  const { authorization } = req.headers;
  
  if (!authorization) {
    return res.status(401).json({ msg: "You must be logged in."});
  }

  const token = authorization.replace('Bearer ', '');

  jwt.verify(token, config.get('jwtSecret'), async (err, payload) => {
    if(err){
      return res.status(401).json({ msg: "You must be logged in."});
    }

    const { userId } = payload;

    const user = await User.findById(userId);
    req.user = user;
    next(); 
  });
};
