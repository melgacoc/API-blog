const jwt = require('jsonwebtoken');

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'nescaumelhorquetoddy';

const validateJWT = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded.data;
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

module.exports = validateJWT;