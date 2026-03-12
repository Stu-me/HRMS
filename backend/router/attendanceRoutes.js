const express = require('express');
const router = express.Router();

const {addAttd,getAttd} = require('../controller/attendanceController')

router.put('/:id',addAttd);

router.get('/:id',getAttd);


module.exports = router;