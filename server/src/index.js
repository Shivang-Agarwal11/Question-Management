const express=require('express')
const cors=require('cors')
require('./database/connect')

const questionRouter=require('./router/question.router')
const articleRouter=require('./router/article.router')
const youtubeRouter=require('./router/youtube.router')
const worklogRouter=require('./router/worklog.router')
const app=express()
const port=process.env.PORT

app.use(express.json())
app.use(cors())

app.use(questionRouter)
app.use(articleRouter)
app.use(youtubeRouter)
app.use(worklogRouter)

app.listen(port, ()=>{
    console.log(`Server running up on port ${port}`)
})