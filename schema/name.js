const mongoose = require("mongoose");

const nameSchema = new mongoose.Schema({
    name:String,
    age: Number,

})

const lotterydata = mongoose.model("lottery", nameSchema);
module.exports = lotterydata;