const asyncHandler = require('express-async-handler');
const empolyeeSchema = require('../models/employeeModel');
const employeeValidator = require('../middlewares/employeeValidation');
const { v4: uuidv4 } = require('uuid');

//@desc create new employee
//@route POST /employee
//@access private

 const addEmployee = asyncHandler(async(req,res)=>{
    const result = employeeValidator.parse(req.body);

    const newEmployee = await empolyeeSchema.create({
        employee_id: `EMP-${uuidv4()}`,  // ✅ server adds this
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
    res.send('all employee');
})

//@desc delete employee
//@route DELETE /employee
//@access private

 const deleteEmployee = asyncHandler(async (req,res)=>{
    res.send('delete employee');
})

module.exports = {getAllEmployee,addEmployee,deleteEmployee}