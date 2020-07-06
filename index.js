const express = require('express');
const app = express();
const connectDB = require('./db');

//connect to db
connectDB();

//middleware
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on Port ${PORT}`));
