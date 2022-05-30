import React from "react";
import {Link} from "react-router-dom"
import {Card,Button,Col} from 'react-bootstrap'
import AuthContext from '../../Context/AuthContext'
const styles = {
    img:{
        width:'100px',
        backgroundColor:"pink"
    },
    card:{
        width: '18rem',
        minHeight:"500px",
        marginBottom:"10px"
    }
}
function Acciones(props){
    console.log("Props",props)
    const {id} = props
    
    return(
        <>
            <AuthContext.Consumer>
                {
                    context=>
                    <>
                        <Button variant="primary" as={Link} to={'/producto/'+id}>Ver Detalle</Button>
                        {
                            context.userLogin &&
                            <Button variant="primary" as={Link} to={'/productos/modificar/'+id}>Modificar</Button>
                        }
                    </>
                }
            </AuthContext.Consumer>
            
        </>
    )
}
export default Acciones