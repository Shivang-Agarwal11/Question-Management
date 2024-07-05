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

router.post('/update/question', async (req, res) => {
    const question = req.body
    // console.log(question)
    try {
        await Question.findOneAndUpdate({_id:req.body.id},{
            siteName: req.body.siteName,
            link: req.body.link,
            category:req.body.category,
            difficulty:req.body.difficulty,
            user:req.body.user,
            status:parseInt(req.body.status)
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

router.post('/notes', async (req, res) => {
    try {
        const ques = await Question.findOne({_id:req.body.id})

        const new_notes = ques.notes;
        const notes = [...new_notes,req.body.notes[0]]

        await Question.findOneAndUpdate({_id:req.body.id},{
            notes:notes
        })
        res.status(200).send({
            status: {
                code: 200,
                message: 'Question Updated successfully'
            },
            data: {
                question: ques
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