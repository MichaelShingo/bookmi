const express = require('express')
const Gig = require('../models/gigModel')

const router = express.Router()

//GET all gigs
router.get('/', (req, res) => {
    res.json({mssg: 'GET all gigs'})

})

//GET single gig
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single gig'})
})

// POST (create a new gig)
router.post('/', async (req, res) => {
    const {name, proID, clientID, dateTime, location, details, contractID} = req.body
    try {
        const workout = await Gig.create({name, proID, clientID, dateTime, location, details, contractID})
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
})

//DELETE a gig
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a gig'})
})

// UPDATE a gig
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a gig'})
})


module.exports = router