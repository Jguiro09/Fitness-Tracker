const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const db = require('./models');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(require("./controllers/api.js"));
app.use(require("./controllers/main-routes.js"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});