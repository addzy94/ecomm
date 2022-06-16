const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// ENV Variables
env.config();

// mongodb+srv://addzy94:<password>@cluster0.3hi2jg8.mongodb.net/?retryWrites=true&w=majority

// Connect to DB
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.3hi2jg8.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
).then(() => {
    console.log('Database Connected!');
});

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hello from the server!'
    });
});

app.post('/data', (req, res, next) => {
    res.status(200).json({
        message: req.body
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`);
});