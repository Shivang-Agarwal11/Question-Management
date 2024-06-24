const express=require('express')
const cors=require('cors')
require('./database/connect')

const questionRouter=require('./router/question.router')
const app=express()
const port=process.env.PORT

app.use(express.json())
app.use(cors())

app.use(questionRouter)

app.listen(port, ()=>{
    console.log(`Server running up on port ${port}`)
})