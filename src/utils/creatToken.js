const jwt = require('jsonwebtoken');

const creatToken = (id) => {
  const requiredForToekn = { id };
  const token = jwt.sign(
    requiredForToekn,
    'nescaumelhorquetoddy',
    {
      expiresIn: '7d',
      algorithm: 'HS256',
    },
  );
  return token;
};

module.exports = creatToken;