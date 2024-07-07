const express = require('express')
const Youtube = require('../models/youtube.model')

const router = express.Router()

router.get('/youtube', async (req, res) => {
    try {
        const youtube = await Youtube.find({});
        res.status(200).send({
            status: {
                code: 200,
                message: 'Youtubes List'
            },
            data: {
                youtube: youtube
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

router.post('/youtube', async (req, res) => {
    const youtube = Youtube(req.body)
    // console.log(youtube)
    try {
        
        await youtube.save()
        res.status(200).send({
            status: {
                code: 200,
                message: 'Youtube Created successfully'
            },
            data: {
                youtube: youtube
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

router.post('/youtube/notes', async (req, res) => {
    try {
        const video = await Youtube.findOne({_id:req.body.id})

        const new_notes = video.notes;
        const notes = [...new_notes,req.body.notes[0]]

        await Youtube.findOneAndUpdate({_id:req.body.id},{
            notes:notes
        })
        res.status(200).send({
            status: {
                code: 200,
                message: 'Youtube notes Updated successfully'
            },
            data: {
                youtube: video
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

router.post('/update/youtube', async (req, res) => {
    const youtube = req.body
    try {
        await Youtube.findOneAndUpdate({_id:req.body.id},{
            siteName: req.body.siteName,
            link: req.body.link,
            topic:req.body.topic,
            user:req.body.user
        })
        res.status(200).send({
            status: {
                code: 200,
                message: 'Youtube Updated successfully'
            },
            data: {
                youtube: youtube
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

router.post('/delete/youtube', async (req, res) => {
    const youtube_id = req.body.id
    try {
        await Youtube.findOneAndDelete({_id:youtube_id});
        res.status(200).send({
            status: {
                code: 200,
                message: 'Youtube Deleted'
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