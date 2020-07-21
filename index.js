const express = require('express');
const app = express();
const connectDB = require('./db');
const cors = require('cors');

//connect to db
connectDB();

//allow cors
app.use(cors());

//middleware
app.use(express.json());

app.use('/api/user', require('./routes/api/user.route'));
app.use('/api/auth', require('./routes/api/auth.route'));
app.use('/api/art', require('./routes/api/art.route'));
app.use('/api/contact', require('./routes/api/contact.route'));
app.use('/api/checkout', require('./routes/api/checkout.route'));
app.get('/', (req, res) => {
  res.send('connected');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on Port ${PORT}`));
