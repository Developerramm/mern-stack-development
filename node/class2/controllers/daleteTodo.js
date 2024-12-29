
const Todo = require("../models/todo");

exports.deleteTodo = async(req,res)=>{
    try {
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);
        res.status(200).json({
            success : true,
            message : "Todo Deleted"
        })

    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            success : false,
            message : "Unable to delete data"
        })
    }
}