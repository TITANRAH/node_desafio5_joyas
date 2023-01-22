const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const dotenv = require("dotenv");
const errorHandler = require('./middleware/error')
dotenv.config({ path: "./config/config.env" });
const rutas = require("./routes/joyas_route");

const app = express();

app.use(express.json());
// *** Con el middleware Morgan obtendre la información de las peticiones http que se realicen desde el cliente *** 
// *** También implemente un middleware de error que invoco acá en el archivo server para que sea utilizado por express ***
app.use(morgan('dev'))
app.use(cors());
app.use(errorHandler);
app.use("/", rutas);


const PORT = process.env.portServer;
app.listen(PORT, console.log(`el servidor esta activo en el puerto ${PORT}`));
