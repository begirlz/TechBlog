const router = require("express").Router();
const { Post, Comment, User } = require("../models");

// get login session for login page 
router.get('/login', (req, res) => {

    if (req.session.loggedIn) {
        res.redirect('/homepage');
        return;
    }

    res.render('login');
});

// get login session for signup page 
router.get('/signup', (req, res) => {

    if (req.session.loggedIn) {
        res.redirect('/homepage');
        return;
    }

    res.render('signup');
});

// get all posts for homepage
router.get("/", async (req, res) => {
    try {
        const data = await Post.findAll({
            include: [User]
        });

        const posts = data.map((post) => post.get({ plain: true }));
        res.render("homepage", {
            posts,
            loggedIn: req.session.loggedIn
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

// get single post by id
router.get("/posts/:id", (req, res) => {
    Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    })
      .then((data) => {
        if (data) {
          const post = data.get({ plain: true });
  
          res.render("singlePost", { 
            layout: "main",
            post, 
            loggedIn:req.session.loggedIn
           });
        } else {
          res.status(404).end();
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

module.exports = router;