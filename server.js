const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

app.get("/", (req, res) => res.send("API Running"));
