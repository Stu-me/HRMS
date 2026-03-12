const express = require('express');
const router = express.Router();

const {getAllEmployee,addEmployee,deleteEmployee} = require('../controller/employeeController')

router.get('/',getAllEmployee);

router.post('/',addEmployee);

router.delete('/:id',deleteEmployee);

module.exports = router;