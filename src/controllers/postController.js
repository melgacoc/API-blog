const PostService = require('../services/postService');
const { validCreator, validPost } = require('../validations/creatorValidation');

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

const attPost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    validCreator(req, res);
    validPost(req, res);
    const { type, message } = await PostService.attPost(
        id, title, content, 
    );
    if (type === 404) return res.status(type).json({ message });
    return res.status(200).json(message);
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    validCreator(req, res);
    await PostService.deletePost(id);
    return res.status(204).end();
};

module.exports = {
    getAll,
    getPostById,
    attPost,
    deletePost,
};