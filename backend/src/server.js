const app = require('./app');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Device Management Server is running on http://localhost:${PORT}`);
});
