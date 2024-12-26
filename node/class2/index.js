const express = require("express");
const app = express();
require("dotenv").config();


const port = process.env.PORT || 3000;
// middleware for body parser
app.use(express.json());

// import routes for TODO API
const todoRoutes = require("./routes/todos");
// mounte the todo API Routes
app.use("/api/v1",todoRoutes);

// start server
app.listen(port,()=>{
    console.log("App is running on port",port);
})

// connect to the database
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/",(req,res)=>{
    res.send("<h1>This is homepage baby </h1>");
})