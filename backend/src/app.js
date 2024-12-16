const express = require('express');
const bodyParser = require('body-parser');
const categoryRoutes = require('./routes/CategoryRoutes');
const deviceRoutes = require('./routes/DeviceRoutes');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/categories', categoryRoutes);
app.use('/devices', deviceRoutes);

module.exports = app;