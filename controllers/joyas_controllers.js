const {obtenerJoyas, obtenerJoyasFiltro, obtenerJoyasPorFiltros } = require("./consultas");
const ErrorResponse = require("../helper/errorResponse");
const { response } = require("express");

exports.getJoyas = async (req, res, next) => {
  try {
    const joyas = await obtenerJoyas();

    return res.json({
      totalJoyas: joyas.length,
      results: joyas,
    });
  } catch (err) {
    next(
      new ErrorResponse(
        "Error, no ha sido posible obtener las joyas" + err + 404
      )
    );
  }
};

exports.getJoyasFiltro = async (req, res, next) => {
  try {
    const queryStrings = req.query;
    if(![queryStrings].includes('')){
        const joyas = await obtenerJoyasFiltro(queryStrings);
        res.json(joyas);
    }else {
        next(
          console.log('error')
          );
    }

  } catch (err) {
    next(
      new ErrorResponse(
        "Error, no ha sido posible obtener por filtros, error: " +
          err.message +
          400,
          
      )
      
    );
    
  }
};

exports.getJoyasPorFiltros = async (req, res, next) => {
  try {
    const queryStrings = req.query;
    if(![queryStrings].includes('')){
        const joyas = await obtenerJoyasPorFiltros(queryStrings);
        res.json(joyas);
    }else {
        next(
          console.log('error')
          );
    }

  } catch (err) {
    next(
      new ErrorResponse(
        "Error, no ha sido posible obtener las joyas por filtros, error: " +
          err.message +
          400
      )
    );
  }}
