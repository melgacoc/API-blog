const UserService = require('../services/userService');

const addNewUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const { type, message } = await UserService.addNewUser(
        displayName, email, password, image || null,
);
    
    if (type) return res.status(type).json({ message });
    return res.status(201).json({ message });
    };

module.exports = {
    addNewUser,
};