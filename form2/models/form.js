const {Schema, model} = require('mongoose')

const schema = new Schema({
    email:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
      password2: {
        type: String,
        required: true
    }

})

module.exports = model('Form', schema)
