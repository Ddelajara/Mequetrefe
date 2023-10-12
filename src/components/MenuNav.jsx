import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form, FormControl, Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/user/userContext';
import { UserBadge } from './UserBadge';
import jwt_decode from "jwt-decode";

export function MenuNav() {

    const [state] = useContext(UserContext)
    let isLoggedIn = false;
    let nombre = null;
    let apellido = null;
    let correo = null;
    let rut = null;
    const navigate = useNavigate();

    const token = state?.token

    if(token){
        const decoded = jwt_decode(token);

        isLoggedIn = true;
        nombre = decoded.data.nombre.toUpperCase();
        apellido = decoded.data.apellido.toUpperCase();
        correo = decoded.data.correo;
        rut = decoded.data.rut;
    }

  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">
                <img
                    src="/image/LOGONEGRO500px.png" width="230"
                    className="d-inline-block align-top"
                    alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/ListaProductos">Tienda</Nav.Link>
                    <Nav.Link href="/Acerca">Acerca de Nosotros</Nav.Link>
                    {/* <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                    {isLoggedIn ? 'Logout' : 'Login'}
                    </button> */}
                </Nav>
                {!isLoggedIn && (
                    <Stack direction="horizontal" gap={2}>
                        <Button onClick={() => navigate('/Login')}
                                variant="danger" 
                                size="sm">Iniciar Sesión</Button>
                        <Button onClick={() => navigate('/Registrate')} 
                                variant="outline-danger" 
                                size="sm">Crear una Cuenta</Button>
                    </Stack>
                )}
                {isLoggedIn && <UserBadge firstName={nombre} lastName={apellido} correo={correo} rut={rut}/>}
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </>
);
}