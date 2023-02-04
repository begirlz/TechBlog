const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

// create new user
router.post('/', async (req, res) => {
  try {
    const data = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(data);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// login
router.post('/login', async (req, res) => {
  try {
    const data = await User.findOne({ where: { email: req.body.email } });

    if (!data) {
      res
        .status(400)
        .json({ message: 'Incorrect email, please try again' });
      return;
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      data.password
    );

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = data.id;
      req.session.loggedIn = true;

    res.json({ user: data, message: 'You are now logged in!' });

    });

    //insomnia: testing result
    // res.json({ pwd:req.body.password,
    //   userpwd:data.password,validation:validPassword, message: 'You are now logged in!' });

  } catch (err) {
    res.status(400).json(err);
  }
});

// logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



module.exports = router;