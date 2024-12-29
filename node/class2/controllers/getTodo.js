
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


exports.getTodoById = async(req,res)=>{
    try {
        // extract todo item basis on id
        const id = req.params.id;
        const todo  = await Todo.findById({_id : id});

        // data for given id not found
        if(!todo){
            return res.status(404).json({
                success : false,
                message : "No Data found with your id"
            })
        }

        // data for given id found
        res.status(200).json({
            success : true,
            data : todo,
            message : `Todo ${id} data successfully fetched`
        })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success : false,
            message : "Unable to fetch data"
        })
    }
}