const express = require('express');
const app = express();
const ConnectDb = require('./config/ConnectDb');
const cors = require('cors');
const userRoute = require('./routes/UserRoutes');

require('dotenv').config();

const port = process.env.PORT;


app.use(express.json());

ConnectDb();
app.use(cors());




app.use('/user', userRoute);




app.listen(port, () => {
    console.log(`The application is correctly running on port ${port}`);
});
