const mongoose = require('mongoose');

const blogScheme = new mongoose.Schema({
    title:{
        type:String,
        required:true,

    },
    content:{
        type:String,
        required:true,
    },
    posted :{
        type:String,
        default: new Date().toString(),
    }
})

module.exports = new mongoose.model('Blog',blogScheme);