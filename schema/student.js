const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
   name: {
       type: String
   },
   age:{
       type: Number
   }
})

const student = mongoose.model("student", studentSchema);
module.exports = student;