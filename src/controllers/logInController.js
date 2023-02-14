const LogInService = require('../services/logInService');

const logIn = async (req, res) => {
    const { email, password } = req.body;
    const { type, message } = await LogInService.logIn(email, password);

    if (type) return res.status(type).json({ message });
    return res.status(200).json({ message });
};

module.exports = {
    logIn,
};