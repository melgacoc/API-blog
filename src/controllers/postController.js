const PostService = require('../services/postService');

const getAll = async (_req, res) => {
    const posts = await PostService.getAll();
    return res.status(200).json(posts);
};

const getPostById = async (req, res) => {
    const { id } = req.params;
    const post = await PostService.getPostById(id);
    if (post === null) {
        return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(post);
};

module.exports = {
    getAll,
    getPostById,
};