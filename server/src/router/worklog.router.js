const express = require('express')
const WorkLog = require('../models/worklog.model')

const router = express.Router()

router.get('/worklog', async (req, res) => {
    try {
        const worklog = await WorkLog.find({user:req.body.name});
        res.status(200).send({
            status: {
                code: 200,
                message: 'WorkLog List'
            },
            data: {
                worklog: worklog
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

router.post('/worklog', async (req, res) => {
    const worklog = WorkLog(req.body)
    // console.log(article)
    try {
        
        await worklog.save()
        res.status(200).send({
            status: {
                code: 200,
                message: 'WorkLog Created successfully'
            },
            data: {
                worklog: worklog
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

router.post('/update/worklog', async (req, res) => {
    const worklog = req.body
    try {
        await WorkLog.findOneAndUpdate({_id:req.body.id},{
            user: req.body.user,
            date: req.body.date,
            content:req.body.content
        })
        res.status(200).send({
            status: {
                code: 200,
                message: 'ArtWorkLogicle Updated successfully'
            },
            data: {
                worklog: worklog
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

router.post('/delete/worklog', async (req, res) => {
    const worklog_id = req.body.id
    try {
        await WorkLog.findOneAndDelete({_id:worklog_id});
        res.status(200).send({
            status: {
                code: 200,
                message: 'Worklog Deleted'
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