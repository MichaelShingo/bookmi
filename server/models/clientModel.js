const mongoose = require('mongoose')

const Schema = mongoose.Schema

const clientSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    proIDs: [{
        type: Schema.Types.ObjectId, ref: 'Pro',
        required: false
    }]
})

module.exports = mongoose.model('Client', clientSchema)