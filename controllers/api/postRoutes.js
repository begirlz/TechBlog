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

// insomnia: testing create post
// router.post('/', async (req, res) => {
//     try {
//         const data = await Post.create({
//             ...req.body
//         });

//         res.status(200).json(data);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// })



module.exports = router;