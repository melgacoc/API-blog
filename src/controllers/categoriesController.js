const CategoriesService = require('../services/categoriesService');

const addNewCategory = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({
            message: '"name" is required' });
    }
    const result = await CategoriesService.addNewCategory(name);
    return res.status(201).json(result);
};

module.exports = {
    addNewCategory,
};