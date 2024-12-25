// server initiate
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json())


// activate the server on port 8000
app.listen(8000,()=>{
    console.log("server is running on port 8000")
})

// Routes
app.get("/",(req,res)=>{
    res.send("Express js first tutorial");
})

// body parser
// app.use(express.json())

app.post("/api/cars",(req,res)=>{
    const {name, brand} = req.body;
    console.log(name)
    console.log(brand)
    res.send("Car submitted successfully");
})


const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/myDatabase").then(()=>{
    console.log("Connection Successful")
}).catch((error)=>{
    console.log("Connection failed");
})