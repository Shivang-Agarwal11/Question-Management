const mongoose=require('mongoose')

const worklogSchema=mongoose.Schema({
    user:{
        type:String,
        required:true

    },
    date: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})


const WorkLog=mongoose.model('WorkLog', worklogSchema)

module.exports=WorkLog