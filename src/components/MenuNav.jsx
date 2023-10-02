import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form, FormControl, Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function MenuNav() {

    const navigate = useNavigate();
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
                    <Nav.Link href="#link">Tienda</Nav.Link>
                    <Nav.Link href="#link">Acerca de Nosotros</Nav.Link>
                </Nav>
                 <Stack direction="horizontal" gap={2}>
                    <Button onClick={() => navigate('/Login')}
                            variant="outline-danger" 
                            size="lg">Iniciar Sesión</Button>
                    <Button onClick={() => navigate('/Registrate')} 
                            variant="outline-danger" 
                            size="lg">Registrate</Button>
                </Stack>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </>
);
}