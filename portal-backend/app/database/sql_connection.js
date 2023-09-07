require("dotenv").config();
const mySql = require("mysql2");

const config = {
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    username: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
    database: "GudinosRepair"
}
console.log(config);
const connection = mySql.createConnection(config);

module.exports = {
    connection
}