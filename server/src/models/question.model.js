const mongoose=require('mongoose')

const questionSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    siteName: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    category: {
        type: [String],
        required: true
    },
    difficulty:{
        type: String,
        required: true
    },
    user:{
        type: String,
        required:true
    },
    status:{
        type:Number,
        default:0
    }
})


const Question=mongoose.model('Question', questionSchema)

module.exports=Question