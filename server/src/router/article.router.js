const express = require('express')
const Article = require('../models/article.model')

const router = express.Router()

router.get('/article', async (req, res) => {
    try {
        const article = await Article.find({});
        res.status(200).send({
            status: {
                code: 200,
                message: 'Articles List'
            },
            data: {
                article: article
            }
        })
    } catch (error) {
        res.status(400).send({
            status: {
                code: 400,
                message: 'bad request'
            },
            data: {}
        })
    }
});

router.post('/article', async (req, res) => {
    const article = Article(req.body)
    // console.log(article)
    try {
        
        await article.save()
        res.status(200).send({
            status: {
                code: 200,
                message: 'Article Created successfully'
            },
            data: {
                article: article
            }
        })
    }
    catch (error) {
        res.status(400).send({
            status: {
                code: 400,
                message: 'Bad Request, probably format of input doesn\'t matches with prescribed format'
            },
            data: {}
        })
    }
});

router.patch('/article', async (req, res) => {
    const article = req.body
    try {
        await Article.findOneAndUpdate({_id:req.body.id},{
            siteName: req.body.siteName,
            link: req.body.link,
            topic:req.body.topic,
            user:req.body.user
        })
        res.status(200).send({
            status: {
                code: 200,
                message: 'Article Updated successfully'
            },
            data: {
                article: article
            }
        })
    }
    catch (error) {
        res.status(400).send({
            status: {
                code: 400,
                message: 'Bad Request, probably format of input doesn\'t matches with prescribed format'
            },
            data: {}
        })
    }
});

router.delete('/article', async (req, res) => {
    const article_id = req.body.id
    try {
        await Article.findOneAndDelete({_id:article_id});
        res.status(200).send({
            status: {
                code: 200,
                message: 'Article Deleted'
            },
            data: {}
        })
    } catch (error) {
        res.status(500).send({
            status: {
                code: 500,
                message: 'Internal server error occured'
            },
            data: {}
        })
    }
});
module.exports = router