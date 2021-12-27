const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema({
   name: {
       type: String
   },
   age:{
       type: Number
   }
})

const university = mongoose.model("university", universitySchema);
module.exports = universitySchema;