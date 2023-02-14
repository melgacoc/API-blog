const User = require('../models/User');
const { creatToken } = require('../utils/creatToken');

const logIn = async (email, password) => {
    const validateUser = await User.findOne({ where: { email, password } });
    if (!validateUser) return { type: 400, message: 'Invalid fields' };

    const requiredForToekn = { id: validateUser.id };

    const token = creatToken(requiredForToekn);

    return { type: 200, message: { token } };
};

module.exports = {
    logIn,
};