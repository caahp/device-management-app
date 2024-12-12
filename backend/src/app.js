const express = require('express');
const bodyParser = require('body-parser');
const categoryRoutes = require('./routes/CategoryRoutes');
const deviceRoutes = require('./routes/DeviceRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/categories', categoryRoutes);
app.use('/devices', deviceRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Device Management Server is running on http://localhost:${PORT}`);
});