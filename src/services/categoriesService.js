const { Category } = require('../models');

const addNewCategory = async (name) => {
    const result = await Category.create({ name });
    return result;
};

module.exports = {
    addNewCategory,
};
