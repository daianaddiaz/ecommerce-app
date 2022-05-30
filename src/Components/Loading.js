import React from "react";
import Spinner from 'react-bootstrap/Spinner'
const styles = {
    spinner:{
        position:"fixed",
        top:"50%",
        left:"50%"
    }
}
function Loading(props){
    const {loading,children,configuration} = props
    if(loading){
        return(
            <div>
                <Spinner style={styles.spinner} animation={configuration?.animation || "grow"} variant={configuration?.variant || "dark"} />
            </div>
        )
    }else{
        return(
            <>
            {children}
            </>
        )
    }
}
export default Loading