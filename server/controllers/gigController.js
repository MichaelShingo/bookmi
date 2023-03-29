const Gig = require('../models/gigModel')
const mongoose = require('mongoose')

// get all gigs
const getGigs = async (req, res) => {

    try {
        const gigs = await Gig.find({}).sort({createdAt: -1})
        res.status(200).json(gigs)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

//get a single gig
const getGig = async (req, res) => {
    const { id } = req.params

    // check if ID is a valid mongoDB object
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Gig does not exist.'})
    }
    const gig = await Gig.findById(id)

    if (!gig) {
        return res.status(404).json({error: 'Gig was not found.'})
    }
    res.status(200).json(gig)
}

// create a new gig
const createGig = async (req, res) => {
    const {name, proID, clientID, dateTime, location, details, contractID} = req.body

    let emptyFields = []

    if (!name) {
        emptyFields.push('title')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the fields.', emptyFields})
    }
    // add doc to DB
    try {
        const gig = await Gig.create({name, proID, clientID, dateTime, location, details, contractID})
        res.status(200).json(gig)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

//delete gig
const deleteGig = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Gig does not exist.'})
    }

    try {
        const gig = await Gig.findOneAndDelete({_id: id})
        if (!gig) {
            res.status(404).json({error: 'Gig does not exist.'})
        }

        res.status(200).json(gig)
    } catch(err) {
        res.status(400).json({error: err})
    }
}

// update gig
const updateGig = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Gig does not exist.'})
    }

    const gig = await Gig.findOneAndUpdate({_id: id}, {...req.body})

    if (!gig) {
        return res.status(400).json({error: 'Gig does not exist.'})
    }

    console.log('gig was updated')
    res.status(200).json(gig)
}


module.exports = {
    createGig,
    getGigs,
    getGig,
    deleteGig,
    updateGig
}