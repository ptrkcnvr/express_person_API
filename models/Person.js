const mongoose = require('mongoose')


//create person model
const personSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: [3, 'name cannot be shorter than the minimum requirement of 3'],
        max: [20, 'name cannot exceed max length of 20']
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})


module.exports = new mongoose.model('person',personSchema)