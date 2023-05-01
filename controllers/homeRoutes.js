const router = require("express").Router();
const {blog} = require("../models")
const withAuth = require('../utils/auth');

router.get("/", (req, res) => {

    // query the database to get all blogs
    blog.findAll()
    .then(results => {
        const data = results.map(result => result.get({plain: true}))
        
        console.log(data)
        res.render("homepage", {
            username: "John",
            blogs: data
        })
    })

    
})

router.get("/login", (req, res) => {
    res.render("login")
})

router.get("/newblog", (req, res) => {
    res.render("newblog")
})
 

module.exports = router;
// const router = require('express').Router();
// const { blog , user } = require('../models');
// const withAuth = require('../utils/auth');

// router.get('/', async (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     const blogData = await blog.findAll({
//       include: [
//         {
//           model: user,
//           attributes: ['name'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const blog = blogData.map((blog) => blog.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('newblog', { 
//       blogs, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/blog/:id', async (req, res) => {
//   try {
//     const blogData = await blog.findByPk(req.params.id, {
//       include: [
//         {
//           model: user,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const blog = blogData.get({ plain: true });

//     res.render('newblog', {
//       ...blog,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: blog }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('login');
// });

// module.exports = router;
