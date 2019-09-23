const User = require('../models/User')


exports.index = async( req, res) => {
    const users = await User.find()
    return res.status(200).json(users)
}

exports.store = async(req,res) => {
    const user = await User.create(req.body)
    return res.status(200).json(user)
}

exports.update = async (req,res) => {
    const id = req.body.id
    const data = req.body
    await User.findByIdAndUpdate(id,data)
    
    return res.status(200)
}

exports.delete = async (req,res) => {
    const id = req.body.id
    await User.findByIdAndRemove(id)
    
    return res.status(200)
}