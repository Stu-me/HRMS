require("dotenv").config();

const express = require("express");
const connectDb = require("./config/dbConnection");

// Initialize Express App
const app = express();
const port = parseInt(process.env.PORT, 10) || 3030;

// Middleware
app.use(express.json());

connectDb(); // database connected

app.get("/employee", (req, res) => {
  res.send("hola amigo");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
