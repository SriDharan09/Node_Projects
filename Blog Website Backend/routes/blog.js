const router = require("express").Router();
const blogs = require("../models/blogs");



router.get("/blog/:id", async(req,res)=>{

    const {id} =req.params;
    const getblog = await blogs.findOne({_id:id});

    res.render("particular",{blog:getblog});


})

.get("/blog/delete/:id" ,(req,res)=>{
    const {id} = req.params;
    blogs.deleteOne({_id: id})
    .then(()=>{
        console.log("Deleted Successfully");
        res.redirect("/")
    })
    .catch(err =>{
        console.log(err)
    })

})

.get("/edit/:id" , async(req,res)=>{
    const {id} = req.params;
    const getData = await blogs.findOne({_id:id});
    res.render("editBlog",{blog:getData});

    
    
})
.post("/edit/:id" ,(req,res)=>{
    const {id} = req.params;
    const {title,content} = req.body;

    blogs.updateOne({_id:id}, {title , content})
    .then(()=>{
        console.log("Updated Blog Successfully");
        res.redirect("/");

    })
    .catch(err =>{
        console.log(err);
    })
    
})

module.exports = router;