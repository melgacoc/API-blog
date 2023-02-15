const { BlogPost } = require('../models');
const { User } = require('../models');
const { Category } = require('../models');

const getAll = async () => {
    const posts = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    return posts;
};

module.exports = {
    getAll,
};