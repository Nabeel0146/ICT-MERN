const mongoose = require('mongoose');

var schema= mongoose.Schema({
    Name: String,
    Age: Number,
    Dept: String,
    Salary: Number
})

var EmployeeModel=mongoose.model("employees",schema)
module.exports=EmployeeModel;