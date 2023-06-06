const express = require('express')
const { getAlumnos, getAlumnosByDNI, modificacionAlumnos, crearAlumno } = require('../controllers/alumnos.controllers')
const routeAlumnos = express.Router()

routeAlumnos.get("/", getAlumnos)
routeAlumnos.get("/:dni", getAlumnosByDNI)
routeAlumnos.put("/:dni", modificacionAlumnos)
routeAlumnos.post("/",crearAlumno)

module.exports = routeAlumnos

