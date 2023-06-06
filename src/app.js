const express =require('express')
const PORT = 3001
const app = express()
const routeAlumnos = require('./routes/alumnos.routes')
const routePedidos = require('./routes/pedidos.routes')
const routeViandas = require('./routes/viandas.routes')
app.use(express.json)
//traer Rutas de alumnos
app.use("/api/alumnos", routeAlumnos)
app.use("/api/viandas",routeViandas)
app.use("/api/pedidos",routePedidos)
app.listen(PORT, ()=>{console.log(`escuchando el puerto : ${PORT}`)})
