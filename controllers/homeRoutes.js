const router = require("express").Router();
const {blog} = require("../models")

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