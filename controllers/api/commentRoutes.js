
const router = require("express").Router();
const { Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req, res) => {
    Comment.create({
        ...req.body,
        userId: req.session.userId
    })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;