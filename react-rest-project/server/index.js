require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const User = require('./db/models/User');

const app = express();

sequelize.sync().then(() => {
  console.log('Database connected and models synchronized');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});