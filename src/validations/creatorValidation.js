const { BlogPost } = require('../models');

const validCreator = async (req, res) => {
    const { id } = req.params;
    const post = await BlogPost.findOne({ where: { id } });
    console.log(post.userId);
    if (!post.userId) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }
};

const validPost = async (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
};

module.exports = {
    validCreator,
    validPost,
};