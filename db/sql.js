require("dotenv").config();

const {DataSource} = require("typeorm");


const sqlConnection = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: root,
    password: mySql,
    database: "newdb",
})

module.exports = {
    sqlConnection
}