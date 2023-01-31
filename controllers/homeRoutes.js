const router = require("express").Router();
const { Post, Comment, User } = require("../models");

// get all posts for homepage
router.get("/", (req, res) => {
    Post.findAll({
        include: [User]
    })
        .then((data) => {
            const posts = data.map((post) => post.get({ plain: true }));

            res.render("homepage", { 
                posts, 
                loggedIn: req.session.loggedIn 
            });
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    // if user is already logged in, redirect the request to another route
    if (req.session.loggedIn) {
        res.redirect('/homepage');
        return;
    }

    res.render('login');
});

module.exports = router;