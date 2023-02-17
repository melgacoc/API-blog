const jwt = require('jsonwebtoken');
const { User } = require('../models');
// const PostService = require('../services/postService');
const { BlogPost } = require('../models');

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

const validateUserId = async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, secret);
  const findPost = await BlogPost.findOne({ where: { id } });
  const { userId } = findPost;

  if (userId !== decoded.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
};

module.exports = { 
  validateJWT,
  validateUserId,

};