const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type:String
    },
    password: {
        type:String
    },
    mail:{
        type:String
    }
    
})

module.exports = new mongoose.model('user',UserSchema)