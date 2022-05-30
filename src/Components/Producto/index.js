import {Card,Col} from 'react-bootstrap'
import Acciones from "./Acciones"
const styles = {
    img:{
        width:'100px',
        backgroundColor:"red"
    },
    card:{
        width: '18rem',
        minHeight:"500px",
        marginBottom:"10px"
    }
}
function Producto(props){
    const {nombre,precio,descripcion,id,thumbnail} = props
    
    return(
        <>
            
        <Col>
            <Card style={styles.card}>
                <Card.Img variant="top" src={thumbnail} style={styles.img} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    {
                        precio && 
                        <Card.Text>
                            {precio}
                        </Card.Text>
                    }
                    {
                        descripcion &&
                        <Card.Text>
                            {descripcion}
                        </Card.Text>
                    }
                    
                    <Acciones id={id} />
                    </Card.Body>
            </Card>
        </Col>
            
        </>
    )
}
export default Producto