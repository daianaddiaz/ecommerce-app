import React from "react";
import Alert from 'react-bootstrap/Alert'
import classes from './AlertCustom.css'
function AlertCustom(props){
    const {text,variant} = props
    return(
        <Alert className={classes.alert} variant={variant}>
         {text}
        </Alert>
    )
}
export default AlertCustom