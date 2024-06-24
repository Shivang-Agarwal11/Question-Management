const mongoose=require('mongoose')

const questionSchema=mongoose.Schema({
    siteName: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    difficulty:{
        type: String,
        required: true
    },
    user:{
        type: String,
        required:true
    }
})


const Question=mongoose.model('Question', questionSchema)

module.exports=Question