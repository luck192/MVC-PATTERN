const dotenv = require('dotenv')
dotenv.config();

const express = require('express');
const app = express();

const connectDB = require( './database/db');
connectDB();

const router = require('./routes/ProductRoutes')
app.use(express.json());
app.use('/api', router)


const PORT = process.env.PORT;


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(PORT, () => {
  console.log(`server is on`);
});
