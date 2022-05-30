import React,{useState} from "react"
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
//import Button from 'react-bootstrap/Button'
import {Form,Button} from 'react-bootstrap'
import firebase from "../Config/firebase"
function ProductosAlta(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit=async (data)=>{
        //Enviar datos a firebase
        console.log("Form",data)
        try{
            const document = await firebase.firestore().collection("productos")
            .add({
                name:data.name,
                price:data.price,
                description:data.description
            })
            console.log(document)
        }catch(e){
            console.log(e)
        }
        
    }
    return(
        <div>
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

export default ProductosAlta