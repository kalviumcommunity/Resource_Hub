const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: String,
    password:String
});
const model = mongoose.model("user", userSchema);
console.log(model)
module.exports = {model};