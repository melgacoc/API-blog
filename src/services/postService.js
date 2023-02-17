const { Op } = require('sequelize');
const { BlogPost } = require('../models');
const { User } = require('../models');
const { Category } = require('../models');
const { PostCategory } = require('../models');

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

const formatPost = (obj) => ({
    id: obj.id,
    title: obj.title,
    content: obj.content,
    userId: obj.userId,
    updated: obj.updated,
    published: obj.published,
  });
  
  const addNewPost = async ({ title, content, categoryIds }, id) => {
    // const user = jwt.verify(token, secret)
  
    const newPost = await BlogPost.create({
      title, content, categoryId: categoryIds, userId: id,
    });
  
    const formatedPost = formatPost(newPost);
    
    await categoryIds.map((element) => PostCategory.create({
      postId: formatedPost.id, categoryId: element,
    }));
  
    return formatedPost;
  };

const attPost = async (id, title, content) => {
    await BlogPost.update({ title, content }, { where: { id } });
    const post = await getPostById(id);
    return post;
};

const deletePost = async (id) => {
    await BlogPost.destroy({ where: { id } });
};

const searchByQuery = async (q) => {
    const result = await BlogPost.findAll({
      where: {
        [Op.or]: [
          {
            title: {
                [Op.like]: `%${q}%` },
          },
          {
            content: { [Op.like]: `%${q}%` },
          },
        ],
      },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
  
    return result;
  };

module.exports = {
    getAll,
    getPostById,
    attPost,
    deletePost,
    addNewPost,
    searchByQuery,
};