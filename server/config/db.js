require('dotenv').config({path:"../.env"});
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    /*
        Werkt om een of andere reden niet ...

        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
     */

    user: 'root',
    password: 'root',
    database: 'project_maarten',
    port: process.env.DB_PORT,
    insecureAuth: true
})

module.exports = pool;