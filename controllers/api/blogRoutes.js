const router = require("express").Router();
const {blog} = require("../../models")

// ---> /api/blogs


router.get("/", (req, res) => {
    blog.findAll()
    .then((results) => {
        res.json(results)
    })
})

router.post("/", (req, res) => {
    blog.create({
        title: req.body.title,
        content: req.body.content,
        date_created:req.body.date_created
    })
    .then((result) => {
        res.json(result)
    })
})


module.exports = router;