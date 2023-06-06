const alumnos = require('../../data/alumnos.json')
const httpStatusCodes = require('http2').constants;
//mostrar alumnos
const getAlumnos = (_, res) => {
    res.status(httpStatusCodes.HTTP_STATUS_OK).json(alumnos)
}
//mostrar los alumnos por dni
const getAlumnosByDNI = (req , res) => {
    const {dni} =  req.params.dni
    const aDni= alumnos.find(a => a.dni ===dni)
         if(aDni != 0 ){
            res.status(httpStatusCodes.HTTP_STATUS_OK).json(alumnos[indexA])
        }else{
            res.status(httpStatusCodes.HTTP_STATUS_NOT_FOUND).json({"mensaje":"no existe alumno"})
         }
}
//modificar los alumnos
const modificacionAlumnos = (req, res)=> {
    const {dni} = req.params
    const {habilitado,celiaco, edad} = req.body
  
    const alum = alumnos.find(a => a.dni ===dni)
    if(!alum){
        res.status(httpStatusCodes.HTTP_STATUS_NOT_FOUND).json({"mensaje":"alumno no encontrado"})
    }else{
        if(edad>=18 && edad<=99)
        {   alumnos.edad = edad
         }
         if(celiaco !== undefined){
            alumnos.celiaco = celiaco
         }else{
            alumnos.celiaco = celiaco
         }
         if (habilitado !== undefined){
            alumnos.habilitado = habilitado
         }
         
         res.status(httpStatusCodes.HTTP_STATUS_OK).json({"mensaje":"actualizado correctamente"})
    }
}
// crear un alumno
    const crearAlumno = (req, res)=>{
        const {dni,nombre,celiaco,edad}= req.body
        
         if(indexA({dni}) != 0 ){
            res.status(httpStatusCodes.HTTP_STATUS_BAD_REQUEST).json({"mensaje":"el alumno ya existe"})
        }
        if(nombre === undefined){
            res.status(httpStatusCodes.HTTP_STATUS_BAD_REQUEST).json({"mensaje":"el nombre no esta definido"})
        }
        if(validarDni(dni)=== true){
            res.status(httpStatusCodes.HTTP_STATUS_BAD_REQUEST).json({"mensaje":"el dni es invalido"})
        }
        if(celiaco === undefined){
            celiaco = false
        }
        if(!edad>=18 && edad<=99)
        {    res.status(httpStatusCodes.HTTP_STATUS_BAD_REQUEST).json({"mensaje":"edad INVALIDA"})
         }
         const alumnoCreado ={
            dni,
            nombre,
            habilitado,
            celiaco,
            edad
         }
         alumnos.push(alumnoCreado)
         res.status(httpStatusCodes.HTTP_STATUS_CREATED).json({"mensaje":"alumno Creado correctamente"})

    }
function validarDni(dni){
    const num =parseInt(dni)
    return num <=8 && num>0
}
module.exports = {getAlumnos, getAlumnosByDNI , modificacionAlumnos, crearAlumno}