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
            username: '',
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
router.get("/profile", (req, res) => {
    res.render("profile");
})
 
router.get("/newblog", withAuth, (req, res) => {
    res.render("newblog")
})

module.exports = router;


