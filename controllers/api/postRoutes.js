const router = require("express").Router();
const { Post, User } = require("../../models/");
const withAuth = require("../../utils/auth");

// create post
router.post('/', withAuth, async (req, res) => {
    try {
        const data = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;