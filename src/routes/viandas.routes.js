const express = require('express')
const {getViandas, getViandaByCodigo, modificacionViandas, crearVianda} = require('../controllers/viandas.controllers')
const routeViandas = express.Router()

routeViandas.get("/",getViandas)
routeViandas.get("/:codigo",getViandaByCodigo)
routeViandas.put("/:codigo",modificacionViandas)
routeViandas.post("/",crearVianda)

module.exports = routeViandas 