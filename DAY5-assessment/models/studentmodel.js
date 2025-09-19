const mongoose = require('mongoose')

var schema= mongoose.Schema({
    Name: String,
    Age: Number,
    Course: String,
})

var StudentModel=mongoose.model("students",schema)
module.exports=StudentModel;