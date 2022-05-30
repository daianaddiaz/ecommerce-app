import React,{useState} from "react"
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
//import Button from 'react-bootstrap/Button'
import {Form,Button} from 'react-bootstrap'
import firebase from "../Config/firebase"
import ButtonWithLoading from "../Components/ButtonWithLoading";
function Registro(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading,setLoading] = useState(false)
    const onSubmit=async (data)=>{
        setLoading(true)
        //Enviar datos a firebase
        console.log("Form",data)
        try{
            const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email,data.password)
            console.log("responseUser",responseUser)
            if(responseUser.user.uid){
                // firebase.firestore().collection("usuarios")
                const document = await firebase.db.collection("usuarios")
                .add({
                    name:data.nombre,
                    lastname:data.apellido,
                    userId:responseUser.user.uid
                })
                console.log("document",document)
                setLoading(false)
            }
        }catch(e){
            setLoading(false)
            console.log(e)
        }
        
    }
    return(
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Nombre" placeholder="Nombre" register={{...register("nombre", { required: true })}} />
                {errors.nombre && <span>El campo nombre es obligatorio</span>}
                <Input label="Apellido" register={{...register("apellido", { required: true })}} />
                {errors.apellido && <span>El campo nombre es obligatorio</span>}
                <Input label="Email" type="email" register={{...register("email", { required: true })}} />
                {errors.email && <span>El campo nombre es obligatorio</span>}
                <Input label="Contraseña" type="password" register={{...register("password", { required: true })}} />
                {errors.password && <span>El campo nombre es obligatorio</span>}
                <ButtonWithLoading loading={loading}>
                    Registrarme
                </ButtonWithLoading>
            </Form>
            
        </div>
    )    
    
}

export default Registro