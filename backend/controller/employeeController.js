const asyncHandler = require('express-async-handler');
const Employee = require('../models/employeeModel');
const employeeValidator = require('../middlewares/employeeValidation');
const { v4: uuidv4 } = require('uuid');


//@desc create new employee
//@route POST /employee
//@access private

 const addEmployee = asyncHandler(async(req,res)=>{
    const result = employeeValidator.parse(req.body);

    const newEmployee = await Employee.create({
        employee_id: req.body.employee_id,  // ✅ server adds this
        full_name: req.body.full_name,
        email: req.body.email,
        department: req.body.department
    });
    res.status(201).json(newEmployee);
})

//@desc Get all employee
//@route GET /employee
//@access private

 const getAllEmployee = asyncHandler(async (req,res)=>{
    const employee = await Employee.find({}).select('employee_id full_name email department');
    res.send(employee);
})

//@desc delete employee
//@route DELETE /employee
//@access private

 const deleteEmployee = asyncHandler(async (req,res)=>{
    const eId = req.params.id;
    const user = await Employee.findOne({employee_id:eId}).select('employee_id full_name email department');
    if(!user){
        res.status(404);
        throw new Error("Invalid Id")
    }
    await Employee.findOneAndDelete({eId});
    res.status(200).json({
        message:"Employee removed",
        deletedEmployee:user
    });
})

 const routeChecker = asyncHandler(async(req,res)=>{
    console.log("yes the router works");
    res.status(200).json({
        message:"done"
    })
 })

module.exports = {getAllEmployee,addEmployee,deleteEmployee,routeChecker}