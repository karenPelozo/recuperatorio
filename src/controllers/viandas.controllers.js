const viandas = require('../../data/viandas.json')
const httpStatusCodes = require('http2').constants;
//mostrar todas las viandas
const getViandas = (_, res) => {
    res.status(httpStatusCodes.HTTP_STATUS_OK).json(viandas)
}
//vianda por codigo
const getViandaByCodigo = (req,res)=>{
    const {codigo} = req.params.codigo
    const viCod = viandas.find(v => v.codigo === codigo)
    if(viCod !=0){
        res.status(httpStatusCodes.HTTP_STATUS_OK).json(viandas[viCod])
    }else{
        res.status(httpStatusCodes.HTTP_STATUS_NOT_FOUND).json({"mensaje":"no se encontro el dato"})
    }
}
const modificacionViandas = (req, res)=> {
    const {codigo} = req.params
    const {aptoCeliaco, stock, descripcion} = req.body
    const viCod = viandas.find(v => v.codigo === codigo)
    
    if(!viCod){
        res.status(httpStatusCodes.HTTP_STATUS_NOT_FOUND).json({"mensaje":"la vianda no existe"})
    }else{
        
        if(aptoCeliaco !=undefined)
        {   viandas[viCod].aptoCeliaco = aptoCeliaco
         }
         if(viandas[viCod].stock >0 ){
            stock = viandas[viCod].stock-1
            viandas[viCod].stock = stock
         }else if(viandas[viCod].stock =0){
            res.status(httpStatusCodes.HTTP_STATUS_NOT_ACCEPTABLE).json({"mensaje":"NO hay stock"})
         }//TARTA, POLLO, PASTA, PIZZA, EMPANADAS.
         if (validarDescripcion(descripcion)!= null){
            viandas[viCod].descripcion = descripcion
         }else{
            res.status(httpStatusCodes.HTTP_STATUS_BAD_REQUEST).json({"mensaje":"Descripcion invalida"})
         }
         
         res.status(httpStatusCodes.HTTP_STATUS_OK).json({"mensaje":"actualizado correctamente"})
    }
}
// crear vianda
     const crearVianda= (req,res)=>{
        const {codigo}= req.params
        const {tipo,aptoCeliaco,stock,descripcion}= req.body
        const ind = viandas.find(v => v.codigo === codigo)
        if(ind !=0){
            res.status(httpStatusCodes.HTTP_STATUS_BAD_REQUEST).json({"mensaje":"el codigo ya existe"})  
        }
        if(!validarCodigo({codigo})){
            res.status(httpStatusCodes.HTTP_STATUS_BAD_REQUEST).json({"mensaje":"el codigo no es valido"})
        }
        if(tipo === undefined){
            res.status(httpStatusCodes.HTTP_STATUS_BAD_REQUEST).json({"mensaje":"el tipo no esta definido"})
        }
        if(aptoCeliaco === undefined){
            res.status(httpStatusCodes.HTTP_STATUS_BAD_REQUEST).json({"mensaje":" no esta definido aptoCeliaco"}) 
        }
        if(descripcion === undefined){
            res.status(httpStatusCodes.HTTP_STATUS_BAD_REQUEST).json({"mensaje":"la descripcion no esta definido"})
        }else if(!validarDescripcion(descripcion)){
            res.status(httpStatusCodes.HTTP_STATUS_BAD_REQUEST).json({"mensaje":"la descripcion no es valida"})
        }
        if(stock === undefined){
            res.status(httpStatusCodes.HTTP_STATUS_BAD_REQUEST).json({"mensaje":"stock no esta definido"})
            }else if(! stock >=0){
                res.status(httpStatusCodes.HTTP_STATUS_BAD_REQUEST).json({"mensaje":"el stock no puede ser negativo"})
            }
            const viandaNueva = {
                codigo,
                tipo,
                aptoCeliaco,
                stock,
                descripcion
            }

            viandas.push(viandaNueva)
            res.status(httpStatusCodes.HTTP_STATUS_CREATED).json({"mensaje":"vianda creada correctamente"})

     }
// validarCodigo
function validarCodigo(codigo) {
 codigoRe = /^[V]{1}[A-Z]{4}$/
 return codigoRe.test(codigo)

}
//validar descripcion
function validarDescripcion(descripcion){
    if (descripcion === "TARTA" || descripcion == "POLLO"||descripcion == "PASTA"||descripcion == "PiZZA"||descripcion == "EMPANADAS"){
        return descripcion
    }
    return null
}
module.exports = {getViandas,getViandaByCodigo,modificacionViandas,crearVianda}