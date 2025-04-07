var express = require('express');

//initialization
var emp = require('./model/employee');
var app = express();
require('./db')
var port = 1500;
app.use(express.json())
//to add data to db
app.post('/',(req,res)=>{
    try {
        emp(req.body).save();
        res.send("data added to db")
    } catch (error) {
        
    }
})
//api to get
app.get('/',async(req,res)=>{
    try {
        var data = await emp.find();
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})
//delete 
app.delete('/:id',async(req,res)=>{
    try {
        console.log(req.params.id)
        await emp.findByIdAndDelete(req.params.id);
        res.send("Data deleted")
        res.send(id)
            } catch (error) {
                res.send(error)
        }
})
app.put('/:id',async(req,res)=>{
    try {
        await emp.findByIdAndUpdate(req.params.id,req.body);
        res.send("Data Edited")
        } catch (error) {
        res.send(error)
    }
})

app.listen(port,()=>{
    console.log(`Server is up and running in ${port}`)
})
