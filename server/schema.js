const mongoose = require('mongoose')

const schema = mongoose.Schema({
    Resources : String,
    Links : String,
    Description : String,
    audioResource : String,
    videoResource : String,
    Duration : String,
    Img : String
})

const Model = mongoose.model("resource",schema)

module.exports = {Model}