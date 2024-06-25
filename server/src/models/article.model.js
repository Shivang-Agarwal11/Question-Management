const mongoose=require('mongoose')

const articleSchema=mongoose.Schema({
    siteName: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    user:{
        type: String,
        required:true
    }
})


const Article=mongoose.model('Article', articleSchema)

module.exports=Article