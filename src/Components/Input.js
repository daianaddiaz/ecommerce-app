import React from "react";
import {Form} from 'react-bootstrap'
function Input(props){
    const {label,type,placeholder,name,register} = props
   
    return(
        <>
       
            <Form.Group className="mb-3" >
                <Form.Label>{label}</Form.Label>
                <Form.Control type={type || "text"} name={name || ''} placeholder={placeholder} {...register} />
                
            </Form.Group>
        </>
    )
}
export default Input