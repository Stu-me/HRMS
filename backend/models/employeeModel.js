const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const empolyeeSchema = mongoose.Schema({
    employee_id:{
        type: String,
        required: true,
        unique: true
    },
    full_name:{
        type:String,
        required:[true,"Please Enter you FULL NAME"]
    },
    email:{
        type:String,
        required:[true,"Please enter your Email"]
    },
    department:{
        type:String,
        required:[true,"Please enter you department"]
    }
})

module.exports = mongoose.model('Employee',empolyeeSchema)