const Todo = require("../models/todo");

// create Route handler

exports.createTodo = async(req,res)=>{
    try {
        // extract title and description from body
        const {title,description} = req.body;
        // create a new todo object and insert in db
        const response = await Todo.create({title,description});

        // send a json response with json flag
        res.status(200).json({
            success : true,
            data : response,
            message : "Entry created successfully"
        })
    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            success : false,
            message : "Unable to insert data"
        })
    }
}