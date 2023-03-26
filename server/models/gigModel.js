const mongoose = require('mongoose')
const Pro = require('../models/proModel')

const Schema = mongoose.Schema

const gigSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    proID: {
        type: Schema.Types.ObjectId, ref: 'Pro',
        required: false
    },
    clientID: {
        type: Schema.Types.ObjectId, ref: 'Client',
        required: false
    },
    dateTime: {
        type: Date,
        required: true
    },
    location: {
        type: Schema.Types.ObjectId, ref: 'Address',
        required: false
    },
    details: {
        type: String,
        required: false
    },
}, { timestamps: true })

module.exports = mongoose.model('Gig', gigSchema)



