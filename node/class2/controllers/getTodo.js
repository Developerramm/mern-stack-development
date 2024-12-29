
const Todo = require("../models/todo");

exports.getTodo = async(req,res)=>{
    try {
        // fetch all todo item from database
        const todos = await Todo.find({});

        // response 
        res.status(200).json({
            success : true,
            data : todos,
            message : "Entire data is fetched"
        })
        
    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            success : false,
            message : "Unable to fetch data"
        })
    }
}