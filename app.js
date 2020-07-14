const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const mongoose = require('./config/mongoose.js');

var userRoutes = require('./routes/user.js')


var app = express();

app.use(bodyParser.json());

app.use(cors("*"));

app.listen(5000, () => {
    console.log("server started");
});

app.use('/', userRoutes);