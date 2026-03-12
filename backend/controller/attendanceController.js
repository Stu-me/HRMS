const asyncHandler = require('express-async-handler');
const Employee = require('../models/employeeModel');


//@desc  mark employee attendance
//@route PUT/attendance/:id
//@access private

 const addAttd = asyncHandler(async(req,res)=>{
    console.log(req.params.id);
    
    const employee = await Employee.findOne({employee_id:req.params.id});
    if(!employee){
        res.status(404);
        throw new Error("Invalid Employee Id");
    }
    const newAttd = await Employee.findOneAndUpdate(
        {employee_id:req.params.id},
        {$push:{
            attendance:{
                date:req.body.date,
                status:req.body.status
            }
        }},
        {new:true}
    );
    res.status(201).json({
        message:"Attendance marked as date" ,
        date:req.body.date ,
        status:req.body.status
    });
})

//@desc Get employee attendance
//@route GET /attendance/:id
//@access private

 const getAttd = asyncHandler(async (req,res)=>{
    const attd = await Employee.findOne({employee_id:req.params.id}).select('attendance');
})


module.exports = {addAttd,getAttd}