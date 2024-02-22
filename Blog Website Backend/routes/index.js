const { models } = require("mongoose");
const blogs = require("../models/blogs");

const router = require("express").Router()

router.get("/",async(req,res)=>{
    const allBlogs = await blogs.find();
    
    res.render("index",{blogs: allBlogs})
    
});

module.exports = router;