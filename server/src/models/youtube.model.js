const mongoose=require('mongoose')

const youtubeSchema=mongoose.Schema({
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


const Youtube=mongoose.model('Youtube', youtubeSchema)

module.exports=Youtube