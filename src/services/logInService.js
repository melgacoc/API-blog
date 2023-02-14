const { User } = require('../models');
const { creatToken } = require('../utils/creatToken');

const logIn = async (email, password) => {
    const validateUser = await User.findOne({ where: { email, password } });
    if (!validateUser) return { type: 400, message: 'Invalid fields' };

    const requiredForToken = { id: validateUser.id };

    const token = creatToken(requiredForToken);

    return { type: 200, message: { token } };
};

module.exports = {
    logIn,
};