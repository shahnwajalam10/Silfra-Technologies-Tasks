const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const authRoutes = require('./routes/authRoutes');
const foodRoutes = require('./routes/foodRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/foods', foodRoutes);

app.get('/', (req, res) => {
  res.send('Food Delivery API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
