import React,{useState,useEffect} from "react"
import Producto from './Producto/index'
import {getAllProductos} from "../Service/productosServices"
import {Row} from 'react-bootstrap'
import Loading from "./Loading"
function Productos(){
    const [listadoProductos,setListadoProductos]=useState([])
    const [loading,setLoading] = useState(true)
    const [buscar,setBuscar] = useState('')
    /*
        function(){}
    */
    //componentDidMount
    useEffect(
        ()=>{
            const request = async ()=>{
                
                try{
                    setLoading(true)
                    console.log("getAllProductos",buscar)
                    const response = await getAllProductos(buscar)
                    console.log('response',response)
                    setListadoProductos(response)
                    setLoading(false)
                }catch(e){
                    console.log(e)
                    setLoading(false)
                }
                
            }
            request()
        },
        [buscar]
    )
    const handleBuscar=(event)=>{
        const value = event.target.value
        setBuscar(value)
    }
    return(
        <>
            <input type="text" value={buscar} onChange={handleBuscar}></input>
            <Loading loading={loading}>
                <div>
                    
                    <Row>
                    {listadoProductos.map(listadoProducto=><Producto key={listadoProducto.id} nombre={listadoProducto.data().name} precio={listadoProducto.data().price} id={listadoProducto.id} thumbnail={listadoProducto.data().thumbnail}  />)}               
                    </Row>
                </div>
            </Loading>
        </>
    )   
    
}

export default Productos