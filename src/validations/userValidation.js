const userValidation = (req, res, next) => {
    const { displayName, email, password } = req.body;
    if (displayName < 8) {
        return res.status(400).json({
            message: '"displayName" length must be at least 8 characteres long' });
    }

    const validEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    if (!validEmail.test(email)) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }

    if (password.length < 6) {
        return res.status(400).json({
            message: '"password" length must be 6 characters long' });
    }

    next();
};

module.exports = {
    userValidation,
};
