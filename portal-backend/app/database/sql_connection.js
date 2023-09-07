require("dotenv").config();
const mySql = require("mysql");

const config = {
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    user: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
    database: "GudinosRepair"
}
const connection = mySql.createConnection(config);

module.exports = {
    connection
}