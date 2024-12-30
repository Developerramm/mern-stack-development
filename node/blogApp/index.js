const express = require("express");
require("dotenv").config();
const dbConnection = require("./config/database");
const app = express();

const port = process.env.PORT || 3000;

// middleware for body parser
app.use(express.json());


//default route
app.get("/",(req,res)=>{
    res.send("<h3>This is home page baby...</h3>");
})

// database connection
dbConnection();

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
