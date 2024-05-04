const mongoose = require('mongoose')

const schema = mongoose.Schema({
    Resources : String,
    Links : String,
    Description : String,
    Img : String,
    created_by : String
})

const Model = mongoose.model("resource",schema)

module.exports = {Model}