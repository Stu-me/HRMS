const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require('./middlewares/errorHandler')
require("dotenv").config();
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
var cors = require('cors')

connectDb(); // database connected

// Initialize Express App
const app = express();
app.use(cors())

// load yaml
const swaggerDocument = YAML.load("./openApiSpec.yaml");

// route
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

const port = parseInt(process.env.PORT, 10) || 3030;


app.use(express.json());
// Routes
app.use("/employee", require('./router/employeeRoutes'));

app.use("/attendance", require('./router/attendanceRoutes'));

app.get("/health",(req,res)=>{
  res.status(200).json({status:"ok"});
})

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
