const pedidos = require("../../data/pedidos.json")
const alumnos =require("../../data/alumnos.json")
const viandas =require("../../data/viandas.json")

//mostrar todos los pedidos
const getPedidos = (_, res) => {
    res.status(httpStatusCodes.HTTP_STATUS_OK).json(pedidos)
}

//mostrar pedido por id 
const getpedidosByID = (req , res) => {
    const {id} =  req.params.id
    const indPe= pedidos.find(a => a.id===id)
         if(idPe != 0 ){
            res.status(httpStatusCodes.HTTP_STATUS_OK).json(pedidos[indPe])
        }else{
            res.status(httpStatusCodes.HTTP_STATUS_NOT_FOUND).json({"mensaje":"no existe el pedido"})
         }
}
//agregar pedido

const crearPedido = (req,res)=>{
    const {alumnoDNI,viandaTipo}=req.body
    const fecha =new Date().toISOString().slice(0, 10)
    const indFinal = pedidos.find(p=>p.id >p.id)
    const alumnos = alumnos.find(a=> a.dni ==dni )
    const viandas = viandasR.find(v => v.tipo == viandaTipo)
      if(alumnos===null){
        res.status(httpStatusCodes.HTTP_STATUS_NOT_FOUND).json({"mensaje":"alumno no existe"})
      } 
      if(viandas === null){
        res.status(httpStatusCodes.HTTP_STATUS_NOT_FOUND).json({"mensaje":"vianda no existe"})
      }
      
     

}
//id incremental

module.exports = {getPedidos,getpedidosByID,crearPedido}