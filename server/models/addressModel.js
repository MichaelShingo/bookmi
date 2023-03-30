const mongoose = require('mongoose')

const Schema = mongoose.Schema

const addressSchema = new Schema({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: false
    },
    zipcode: {
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model('Address', addressSchema)