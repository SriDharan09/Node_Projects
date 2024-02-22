const router = require('express').Router();
const Blog = require('../models/blogs.js');

router.get('/compose', (req, res) => {
    res.render('composeblog.ejs');
    
})

.post('/compose', (req,res) =>{
    const {title,content} =req.body;

    if(!title || !content){
        return res.send("Please fill all the fields");
    }
        const newBlog = new Blog({ title,content })

        newBlog.save()
        .then(()=>{
            console.log("Blog Saved")
            res.redirect('/');
        })
        .catch((err)=>{
            console.log(err)
        })

});


module.exports = router;