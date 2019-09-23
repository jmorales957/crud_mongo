const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost:27017/interview',{useNewUrlParser: true})

module.exports = db