
const router = require("express").Router();
const { Comment, User, Post } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id
        })

        res.status(200).json(newComment)
    } catch (err) {
        res.status(400).json(err)
    }
});

// insomnia: add new comment
// router.post('/', async (req, res) => {
//     try {
//         const newComment = await Comment.create({
//             ...req.body,
//             user_id: 1
//             //,post_id:1
//         })

//         res.status(200).json(newComment)
//     } catch (err) {
//         res.status(400).json(err)
//     }
// });

// insomnia: get all comments
router.get('/', (req, res) => {

      Comment.findAll({
        include:  [{
            model: User,
            attributes: ['name'],
        },{
            model: Post,
            attributes: ['body'],
        }]
      })
        .then(data => {
          if(!data) {
            res.status(404).json({message: 'No comment found'});
            return;
          }
          res.json(data);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err)
        });
  });

module.exports = router;