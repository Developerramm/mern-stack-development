const { default: mongoose } = require("mongoose");

require("dotenv").config();

const url = process.env.DATABASE_URL;

const dbConnect = ()=>{
    mongoose.connect(url)
    .then(()=>{
        console.log("DB Connection successful");
    }).catch((error)=>{
        console.log("DB Connection failed");
        console.error(error.message);
        process.exit(1);
    })
}

module.exports = dbConnect;