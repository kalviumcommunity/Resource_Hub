const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const connection = process.env.URI;

let connectionStatus = 'disconnected';

const startDatabase = async () => {
    try {
        await mongoose.connect(connection);
        connectionStatus = "Congratulations database is connected!!";
    } catch (err) {
        console.error("Couldn't connect database");
        connectionStatus = "Couldn't connect database";
    }
};

const stopDatabase = async () => {
    await mongoose.disconnect();
    connectionStatus = "Database disconnected";
};

app.get('/', (req, res) => {
    res.send(connectionStatus);
});

app.get("/ping", (req, res) => {
    res.send('Hello');
});

app.listen(3001, () => {
    startDatabase();
    console.log('Port 3000');
});

module.exports = app;