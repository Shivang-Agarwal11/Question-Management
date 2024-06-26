const express = require('express')
const cors = require('cors')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('App is running..');
  });
  
require('../src/database/connect')

const questionRouter = require('../src/router/question.router')
const articleRouter = require('../src/router/article.router')
const youtubeRouter = require('../src/router/youtube.router')
const serverless = require("serverless-http");
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

// app.use(questionRouter)
// app.use(articleRouter)
// app.use(youtubeRouter)

app.use("/.netlify/functions/api",questionRouter);
app.use("/.netlify/functions/api",youtubeRouter);
app.use("/.netlify/functions/api",articleRouter);
module.exports.handler = serverless(app);