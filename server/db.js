const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
let connectionStatus = 'disconnected';
const startDatabase = async () => {
    try {
        await mongoose.connect(process.env.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        connectionStatus = "Congratulations, the database has been connected!";
    } catch (err) {
        console.error("Failed to connect to the database:", err);
        connectionStatus = "Failed to connect to the database";
    }
};
const stopDatabase = async () => {
    await mongoose.disconnect();
    connectionStatus = "Database disconnected";
};
const getConnectionStatus = async () => {
    return JSON.stringify(connectionStatus);
};
module.exports = { startDatabase, stopDatabase, getConnectionStatus };