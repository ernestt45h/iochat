let mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    date_created:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('user',UserSchema)