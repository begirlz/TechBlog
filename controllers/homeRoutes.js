const router = require("express").Router();
const { Post, Comment, User } = require("../models");

// render dashboard page
router.get('/dashboard', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.userId, {
      attributes: { exclude: ['password'] },
      include: [Post],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,user,
      loggedIn: true
    });
  } catch (err) {
    res.status(500).json(err);
  }

});

// render addPost page
router.get('/addPost', (req, res) => {

  if (req.session.loggedIn) {
    res.render('addPost');
    return;
  }

  res.redirect('/');
});

// render login page and verify loggedin session
router.get('/login', (req, res) => {

  if (req.session.loggedIn) {
    res.redirect('/homepage');
    return;
  }

  res.render('login');
});

// render signup page and verify loggedin session
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
    res.render('homepage', {
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
          loggedIn: req.session.loggedIn
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