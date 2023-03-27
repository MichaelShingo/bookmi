const express = require('express')
const Gig = require('../models/gigModel')
const {
    createGig,
    getGig,
    getGigs,
    deleteGig,
    updateGig
    
} = require('../controllers/gigController')

const router = express.Router()

//GET all gigs
router.get('/', getGigs)

//GET single gig
router.get('/:id', getGig)

// POST (create a new gig)
router.post('/', createGig)

//DELETE a gig
router.delete('/:id', deleteGig)

// UPDATE a gig
router.patch('/:id', updateGig)

module.exports = router