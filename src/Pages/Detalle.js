import React,{useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import Loading from "../Components/Loading"
import {getByIdProductos} from "../Service/productosServices"
function Detalle(){
    const {id} = useParams()
    console.log("id producto",id)
    const [producto,setProducto] = useState({})
    const [loading,setLoading] = useState(true)
    
    useEffect(
        ()=>{
            const request = async ()=>{
                
                try{
                    setLoading(true)
                    const response = await getByIdProductos(id)
                    console.log('response',response)
                    setProducto(response.data())
                    setLoading(false)
                }catch(e){
                    console.log(e)
                    setLoading(false)
                }
                
            }
            request()
        },
        [id]
    )
    const comprar = (id)=>{
        console.log("id",id)
    }
    return(
        <Loading loading={loading} configuration={{animation:"border",variant:"danger"}}>
            <div>
                <p>{producto?.nombre}</p>
                <p>{producto?.precio}</p>
                <p>{producto?.descripcion}</p>
                <div>
                    {false && producto.pictures.map(picture=><img src={picture.url} />)}
                </div>
                <button onClick={()=>comprar(id)}>Comprar</button>
            </div>
        </Loading>
    )
    
}

export default Detalle