//import
const express=require("express");   
require('./connection');
var empmodel=require('./models/employee');


//initialize
const app=express();

//middleware
app.use(express.json())

//create api

app.get('/', (req,res) => {
  res.send('Hello World')
})


//addapi

app.post("/add", async (req, res) => {
  try {
    const employee = new empmodel(req.body); // create doc
    await employee.save();                   // save to MongoDB
    res.send("✅ data added");
  } catch (error) {
    console.log(error);
    res.status(500).send("❌ error saving data");
  }
});





//listen
app.listen(3000,()=>{
    console.log("port is runningg")
})