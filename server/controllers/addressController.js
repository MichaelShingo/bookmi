const Address = require('../models/addressModel')
const mongoose = require('mongoose')

//get all addresses
const getAddresses = async (req, res) => {
    try {
        const addresses = await Address.find({});
        res.status(200).json({addresses})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

//get a single address
const getAddress = async (req, res) => {
    const { id } = req.params

    //check if ID is a valid mongoDB object

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Address does not exist.'})
    }

    const address = await Address.findById(id)

    if (!address) {
        return res.status(404).json({error: 'Address does not exist.'})
    }

    res.status(200).json(address)
}

const createAddress = async (req, res) => {
    const { street, city, state, zipcode } = req.body

    try {
        const address = await Address.create({ street, city, state, zipcode})
        res.status(200).json(address)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

//delete address
const deleteAddress = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Address does not exist.'})
    }

    try {
        const address = await Address.findOneAndDelete({_id: id})

        if (!address) {
            return res.status(404).json({error: 'Address does not exist.'})
        }
    } catch(err) {
        res.status(400).json({error: err})
    }
}

// update address
const updateAddress = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Address does not exist.'})
    }

    const address = await Address.findOneAndUpdate({_id: id}, {...req.body})

    if (!address) {
        res.status(400).json({error: 'Address does not exist.'})
    }

    res.status(200).json(address)
}

module.exports = {
    createAddress,
    getAddress,
    getAddresses,
    deleteAddress,
    updateAddress
}