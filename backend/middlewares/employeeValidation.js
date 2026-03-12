const {z} = require('zod')

const employeeValidator = z.object({
    full_name:z.string(),
    email:z.email(),
    department:z.string()
});

module.exports = employeeValidator;
