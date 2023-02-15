const nameValdation = (req, res, next) => {
    const { name } = req.body;
    if (name.length < 1) {
        return res.status(400).json({
            message: '"name" is required' });
    }
    next();
};

module.exports = {
    nameValdation,
};