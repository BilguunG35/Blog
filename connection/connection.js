const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();


var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

module.exports = connection;