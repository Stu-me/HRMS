const mongoose = require("mongoose");

const empolyeeSchema = mongoose.Schema({
    employee_id: {
        type: String,
        required: true,
        unique: true,
    },
    full_name: {
        type: String,
        required: [true, "Please Enter you FULL NAME"],
    },
    email: {
        type: String,
        required: [true, "Please enter your Email"],
    },
    department: {
        type: String,
        required: [true, "Please enter you department"],
    },
    attendance: [
        {
            date: {
                type: Date,
                default: () => new Date().toISOString().split('T')[0], 
                required: true,
            },
            status: {
                _id:false,
                type: String,
                enum: ["present", "absent"],
            },
        },
    ],
});

module.exports = mongoose.model("Employee", empolyeeSchema);
