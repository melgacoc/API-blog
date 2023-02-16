const jwt = require('jsonwebtoken');
const { User } = require('../models');

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    const validToken = await User.findOne({ where: { id: decoded.id } });

    req.user = validToken;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateJWT;