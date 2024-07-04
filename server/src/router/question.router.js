const express = require('express')
const Question = require('../models/question.model')

const router = express.Router()

router.get('/question', async (req, res) => {
    try {
        const question = await Question.find({});
        res.status(200).send({
            status: {
                code: 200,
                message: 'Questions List'
            },
            data: {
                question
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

router.post('/question', async (req, res) => {
    const question = Question(req.body)
    // console.log(question)
    try {
        
        await question.save()
        res.status(200).send({
            status: {
                code: 200,
                message: 'Question Created successfully'
            },
            data: {
                question: question
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

router.patch('/question', async (req, res) => {
    const question = req.body
    try {
        await Question.findOneAndUpdate({_id:req.body.id},{
            siteName: req.body.siteName,
            link: req.body.link,
            category:req.body.category,
            difficulty:req.body.difficulty,
            user:req.body.user
        })
        res.status(200).send({
            status: {
                code: 200,
                message: 'Question Updated successfully'
            },
            data: {
                question: question
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

router.post('/delete/question', async (req, res) => {
    const question_id = req.body.id;
    try {
        await Question.findOneAndDelete({_id:question_id});
        res.status(200).send({
            status: {
                code: 200,
                message: 'Question Deleted'
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