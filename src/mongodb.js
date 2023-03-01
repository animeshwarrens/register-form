const mongoose = require("mongoose")

mongoose.connect("mongodb://admin:anim123@141.148.192.46:25575")
.then(() =>{
    console.log("mongodb connected")
})
.catch(() => {
    console.log("Failed to connect")
})

const LogInSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("Collection 1", LogInSchema)

module.exports = collection

