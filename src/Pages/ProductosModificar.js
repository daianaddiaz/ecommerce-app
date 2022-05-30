import React,{useEffect, useState} from "react"
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
//import Button from 'react-bootstrap/Button'
import {Form,Button} from 'react-bootstrap'
import firebase from "../Config/firebase"
import {useParams} from "react-router-dom"
import {getByIdProductos,update} from "../Service/productosServices"
function ProductosModificar(){
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const {id} = useParams()
    useEffect(
        ()=>{
            const request = async ()=>{
                
                try{
                    const response = await getByIdProductos(id)
                    console.log('response',response)
                    setValue("name",response.data().name)
                    setValue("price",response.data().price)
                    setValue("description",response.data().description)
                    
                }catch(e){
                    console.log(e)
                }
                
            }
            request()
        },
        [id,setValue]
    )
    const onSubmit=async (data)=>{
        //Enviar datos a firebase
        console.log("Form",data)
        try{
            const document = await update(id,data)
            console.log(document)
        }catch(e){
            console.log(e)
        }
        
    }
    const handleDelete = async ()=>{
        const document = await firebase.db.doc("productos/"+id)
        .delete()
        console.log(document)
    }
    return(
        <div>
            <Button type="submit" variant="danger" onClick={handleDelete}>Eliminar</Button>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Nombre" placeholder="Nombre" register={{...register("name", { required: true })}} />
                {errors.nombre && <span>El campo nombre es obligatorio</span>}
                <Input label="Precio" type="number" register={{...register("price", { required: true })}} />
                {errors.apellido && <span>El campo nombre es obligatorio</span>}
                <Input label="Descripcion" type="text" register={{...register("description", { required: true })}} />
                {errors.email && <span>El campo nombre es obligatorio</span>}
                <Button type="submit" variant="primary">Guardar</Button>
            </Form>
            
        </div>
    )    
    
}

export default ProductosModificar