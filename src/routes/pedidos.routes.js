const express = require('express')
const routePedidos = express.Router()
const { getPedidos, getpedidosByID, crearPedido } = require("../controllers/pedidos.controllers")
routePedidos.get("/",getPedidos)
routePedidos.get("/:id",getpedidosByID)
routePedidos.post("/",crearPedido)
module.exports = routePedidos