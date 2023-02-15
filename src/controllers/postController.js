const PostService = require('../services/postService');

const getAll = async (_req, res) => {
    const posts = await PostService.getAll();
    return res.status(200).json(posts);
};

module.exports = {
    getAll,
};