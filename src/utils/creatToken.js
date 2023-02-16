const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const creatToken = (id) => {
 // const requiredForToekn = { id };
  const token = jwt.sign(
     id,
     secret,
    {
      expiresIn: '7d',
      algorithm: 'HS256',
    },
  );
  return token;
};

module.exports = { creatToken };