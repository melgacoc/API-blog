const { Category } = require('../models');

const blogPostValidation = async (title, content, categoryIds) => {
    if (!title || !content) {
        return { type: 'first', message: 'Some required fields are missing' };
    }

    const categoryList = await Category.findAll({ where: { id: categoryIds } });
    const categories = categoryList.map((category) => category.id);
    if (categoryIds.some((e) => !categories.includes(e))) {
        return { type: 'second', message: 'one or more "categoryIds" not found' };
    }
    return true;
};

module.exports = {
    blogPostValidation,
};