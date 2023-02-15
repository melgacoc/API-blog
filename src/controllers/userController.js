const UserService = require('../services/userService');

const addNewUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const { type, message } = await UserService.addNewUser(
        displayName, email, password, image || null,
    );
    
    if (type === 409) return res.status(type).json({ message });
    return res.status(201).json(message);
};

const getAllUsers = async (_req, res) => {
    const users = await UserService.getAllUsers();
    return res.status(200).json(users);
};

module.exports = {
    addNewUser,
    getAllUsers,
};