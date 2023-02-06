const router = require("express").Router();
const { Post } = require("../../models/");
const withAuth = require("../../utils/auth");

// create post
router.post('/', withAuth, async (req, res) => {
    try {
        const data = await Post.create({
            ...req.body,
            user_id: req.session.userId,
        });

        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err);
    }
})

//Delete post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const data = await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;