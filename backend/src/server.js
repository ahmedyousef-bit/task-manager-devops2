const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const taskRoutes = require('./routes/tasks');
const healthRoutes = require('./routes/health');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

app.use('/api/health', healthRoutes);
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'Task Manager API is running!',
    version: '1.0.0'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app;
