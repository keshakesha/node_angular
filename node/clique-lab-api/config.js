
var log4js = require("log4js");
var dotenv = require('dotenv').config();

log4js.configure({
    appenders: { development: { type: 'file', filename: 'log_file.log' } },
    categories: { default: { appenders: ['development'], level: 'trace' } }
});

module.exports = {
    // App config
    "node_port": process.env.NODE_PORT,
    "logger": log4js.getLogger("development"),

    // Database config
    "database": process.env.DATABASE,

    // HTTP Status
    "OK_STATUS": 200,
    "BAD_REQUEST": 400,
    "UNAUTHORIZED": 401,
    "NOT_FOUND": 404,
    "MEDIA_ERROR_STATUS": 415,
    "VALIDATION_FAILURE_STATUS": 417,
    "DATABASE_ERROR_STATUS": 422,
    "INTERNAL_SERVER_ERROR": 500,

    // Other configuration
    "website_url": process.env.WEBSITE_URL,
    "base_url": process.env.BASE + ':' + process.env.NODE_PORT
    // "base_url": "http://13.55.64.183:3000"
};