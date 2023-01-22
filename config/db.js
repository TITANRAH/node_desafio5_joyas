const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const credenciales = {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    port: process.env.port,
    allowExitOnIdle: true,
  };
  
exports.pool = new Pool(credenciales);