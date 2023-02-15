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

const getPostById = async (id) => {
    const post = await BlogPost.findOne({
        where: { id },
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    return post;
};

const attPost = async (id, title, content) => {
    await BlogPost.update({ title, content }, { where: { id } });
    const post = await getPostById(id);
    return post;
};

const deletePost = async (id) => {
    await BlogPost.destroy({ where: { id } });
};

module.exports = {
    getAll,
    getPostById,
    attPost,
    deletePost,
};