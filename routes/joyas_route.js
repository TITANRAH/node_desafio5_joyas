const express = require("express");
const ruta = express.Router();
const { getJoyas, getJoyasPorFiltros, getJoyasFiltro} = require("../controllers/joyas_controllers");

ruta.route('/joyas')
    .get(getJoyas)
     
// SEGUN LO VEO YO PROFESOR EL REQUERIMIENTO 1B TIENE UN ERROR AL PEDIR MANEJAR LA MISMA RUTA,
// PUEDO ESTAR EQUIVOCADO PERO YO CREO QUE ES UN ERROR,
// PARA ESTABLECER EL LIMITE ,LA DIRECCION Y EL CAMPO QUE VIENEN POR PARAMS 
// POR LO QUE LE DI UNA RUTA LLAMADA FILTRO, Y PARA CUMPLIR CON EL PUNTO 2 
// MI RUTA SE LLAMARA FILTROS
ruta.route('/joyas/filtros')
    .get(getJoyasPorFiltros)
    
ruta.route('/joyas/filtro')
    .get(getJoyasFiltro)

module.exports = ruta;