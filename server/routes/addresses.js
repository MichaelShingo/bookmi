const express = require('express')
const Address = require('../models/addressModel')
const {
    createAddress,
    getAddress,
    getAddresses,
    deleteAddress,
    updateAddress
} = require('../controllers/addressController')

const router = express.Router()

// GET all addresses
router.get('/', getAddresses)

router.get('/:id', getAddress)

router.post('/', createAddress)

router.delete('/:id', deleteAddress)

router.patch('/:id', updateAddress)

module.exports = router