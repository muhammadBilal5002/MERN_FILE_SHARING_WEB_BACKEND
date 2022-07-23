const mongoose = require('mongoose')
const Schema = mongoose.Schema
const user = new Schema({
    Username: {type: String, required:true},
    Email:    {type: String, required:true},
    Password: {type: Number, required:true}
},{timestamps:true})

module.exports = mongoose.model('user',user)