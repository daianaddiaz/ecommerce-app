
import React,{useState,useContext} from "react"
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
//import Button from 'react-bootstrap/Button'
import {Form,Button} from 'react-bootstrap'
import firebase from "../Config/firebase"
import ButtonWithLoading from "../Components/ButtonWithLoading";
import AlertCustom from "../Components/AlertCustom";
import {loginMessage} from "../Utils/errorMessage"
import AuthContext from '../Context/AuthContext'
import {useNavigate} from "react-router-dom"
function Login(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading,setLoading] = useState(false)
    const [alert,setAlert]=useState({variant:'',text:''})
    const context = useContext(AuthContext)
    const navigate = useNavigate()
    const onSubmit=async (data)=>{
        setLoading(true)
        //Enviar datos a firebase
        console.log("Form",data)
        try{
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
            console.log("responseUser",responseUser.user.uid)
            if(responseUser.user.uid){
                const userInfo = await firebase.db.collection("usuarios")
                .where("userId","==",responseUser.user.uid)
                .get()
                if(userInfo){
                    const nombre = userInfo.docs[0]?.data().name
                    setAlert({variant:"success",text:'Bienvenido '+(nombre || "")})
                    context.loginUser(userInfo.docs[0]?.data())
                    navigate("/")
                }

            }
            
            setLoading(false)
        }catch(e){
            console.log(e)
            setAlert({variant:"danger",text:loginMessage[e.code]||"Ha ocurrido un error"})
            setLoading(false)
        }
        
    }
    return(
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                
                <Input label="Email" type="email" register={{...register("email", { required: true })}} />
                {errors.email && <span>El campo nombre es obligatorio</span>}
                <Input label="Contraseña" type="password" register={{...register("password", { required: true })}} />
                {errors.password && <span>El campo nombre es obligatorio</span>}
                <ButtonWithLoading loading={loading}>
                    Ingresar
                </ButtonWithLoading>
                {/*<AlertCustom variant={alert.variant} text={alert.text} />*/}
                <AlertCustom {...alert} />
            </Form>
            
        </div>
    )    
    
}

export default Login