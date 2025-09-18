//import
var cors = require('cors')
const express=require("express");   
require('./connection');
var empmodel=require('./models/employee');


//initialize
const app=express();

//middleware
app.use(express.json())
app.use(cors())  //to avoid cors error

//create api

app.get('/', (req,res) => {
  res.send('Hello World')
})


//view api
app.get('/view', async (req, res) => {
  try {
    var data = await empmodel.find(); 
    res.send(data);                    
  } catch (error) {
    console.log(error);
    res.status(500).send("   error fetching data");
  }
});


//delete api
app.delete("/remove/:id", async (req, res) => {
  try {
    var id = req.params.id;              
    await empmodel.findByIdAndDelete(id);
    res.send("✅ data deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send("   error deleting data");
  }
});

// update api
app.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedEmployee = await empmodel.findByIdAndUpdate(id, req.body, { new: true });
    res.send(updatedEmployee);
  } catch (error) {
    console.log(error);
    res.status(500).send("   error updating data");
  }
});

//addapi

app.post("/add", async (req, res) => {
  try {
    const employee = new empmodel(req.body); 
    await employee.save();                   
    res.send("✅ data added");
  } catch (error) {
    console.log(error);
    res.status(500).send("  error saving data");
  }
});





//listen
app.listen(3000,()=>{
    console.log("port is runningg")
})