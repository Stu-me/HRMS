const asyncHandler = require('express-async-handler');

//@desc create new employee
//@route POST /employee
//@access private

 const addEmployee = asyncHandler(async(req,res)=>{
    res.send('add employee');
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