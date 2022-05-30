import React from "react";
import {Link} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import AuthContext from '../Context/AuthContext'
function Menu(props){
    const {login} = props
    return(
        <>
            <AuthContext.Consumer>
                {
                    context=>
                        <Navbar bg="dark" expand="lg">
            
                            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                {!context.userLogin && 
                                    <>
                                        <Nav.Link as={Link} to="/alta">Registro</Nav.Link>
                                        <Nav.Link as={Link} to="/ingresar">Login</Nav.Link>
                                    </>
                                }   
                                {context.userLogin && 
                                    <>
                                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                                            <NavDropdown.Item as={Link} to="/productos/alta">Alta</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link onClick={context.logoutUser}>Salir</Nav.Link>
                                    </>
                                }
                                
                            </Nav>
                            </Navbar.Collapse>
                            {
                                context.userLogin &&
                                <div>Hola {context?.userInfo?.name}</div>
                            }
                        </Navbar>
                }
                
            </AuthContext.Consumer>
        </>
    )
}
export default Menu