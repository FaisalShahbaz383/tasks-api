const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// 1. Load environment variables FIRST
dotenv.config();

// 2. Import connectDB AFTER dotenv initialization
const connectDB = require('./config/db.js');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

const app = express();

// 3. Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

// Swagger Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Base Route
app.get('/', (req, res) => {
  res.send('Task Management REST API is Running. Docs available at /api-docs');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));