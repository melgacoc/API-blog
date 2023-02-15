const { Category } = require('../models');

const addNewCategory = async (name) => {
    const result = await Category.create({ name });
    return result;
};

const getAll = async () => {
    const categories = await Category.findAll();
    return categories;
};

module.exports = {
    addNewCategory,
    getAll,
};
