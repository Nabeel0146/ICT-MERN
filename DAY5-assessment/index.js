var cors=require('cors')
const express=require("express");
const StudentModel = require("./models/studentmodel");
require('./connection');



const app=express()



//middleware
app.use(express.json())
app.use(cors())  

app.get('/', (req, res)=>{
    res.send("Hellooooo")
})

//ADD
app.post("/add", async(req, res)=>{
    try {
        const student=new StudentModel(req.body);
        await student.save();
        res.send("DONE")
    } catch (error) {
        console.log(error);
        res.status(500).send("ERROR")
    }
});

//DELETE
app.delete("/remove/:id", async(req, res)=>{
    try {
        var id = req.params.id;
        await StudentModel.findByIdAndDelete(id);
        res.send("DELETED");
    } catch (error) {
        console.log(error)
        res.status(500).send("ERROR")
        
    }
})


//VIEW
app.get('/view', async (req, res)=>{
    try {
        var data = await StudentModel.find();
        res.send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("ERROR")
        
    }
})

//UPDATE

app.put("/update/:id", async(req, res)=>{
    try {
        const id = req.params.id;
        const updatedStudent=await StudentModel.findByIdAndUpdate(id, req.body, {new: true});
        res.send(updatedStudent)
    } catch (error) {
        
        console.log(error)
        res.status(500).send("error")
    }
})


app.listen(4000,()=>{
    console.log("Post Running")
})