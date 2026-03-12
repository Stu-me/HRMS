const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require('./middlewares/errorHandler')
require("dotenv").config();

connectDb(); // database connected

// Initialize Express App
const app = express();

const port = parseInt(process.env.PORT, 10) || 3030;

// Middleware
app.use(express.json());

// Routes
app.use("/employee", require('./router/employeeRoutes'));

// app.use("/attendance", require('./router/attendanceRoutes'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
