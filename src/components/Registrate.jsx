import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import axios from 'axios'; 
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';
import { Footer } from './Footer';

const MySwal = withReactContent(Swal)


export function Registrate() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Recolecta la data del formulario
      const formData = new FormData(form);
      const userData = {
        nombre: formData.get('nombre'),
        apellido: formData.get('apellido'),
        rut: formData.get('rut'),
        correo: formData.get('correo'),
        direccion: formData.get('direccion'),
        codigoPostal: formData.get('codigoPostal'),
        password: formData.get('password'),
      };
      // Envía la data al servidor usando axios
      try {
        const url = import.meta.env.VITE_BACKEND_URL + 'users'
        const response = await axios.post(url, userData);
        if (response.status === 201) {
            MySwal.fire({
                position: 'center',
                icon: 'success',
                title: 'Tu registro ha sido completado con exito',
                 showConfirmButton: false,
                timer: 2300
              })

              navigate('/Onboarding')
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Problemas en el registro',
                text: response.data.message,
                timer: 2300
            })
        }
      } catch (error) {
        if (error.response) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas en el registro',
                text: error.response.data.message,
                timer: 3000
            })
    } else {
          alert('Ocurrió un error al registrar al usuario.');
        }
      }
    }
    
    setValidated(true);
  };

  return (
    <>

    <Container className='rounded border p-4 mt-5 custom-border-color'
        style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3)), url('/image/BANNER-1240X650_A.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>

        <h1 className="custom_h1-color">Registro de Nueva Cuenta</h1><br /><br />
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label className="custom_h1-color">Nombre</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder=""
                name="nombre"
                //defaultValue="Mark"
            />
            <Form.Control.Feedback 
            type="invalid"
            style={{ color: '#ffff00' }}>
            Ingresar el nombre.
            </Form.Control.Feedback>

            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label className="custom_h1-color">Apellido</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder=""
                name="apellido"
                //defaultValue="Otto"
            />
            <Form.Control.Feedback 
            type="invalid"
            style={{ color: '#ffff00' }}>
            Ingresar el apellido.
            </Form.Control.Feedback>

            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label className="custom_h1-color">Correo</Form.Label>
            <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                type="text"
                placeholder=""
                aria-describedby="inputGroupPrepend"
                name="correo"
                required
                />
                <Form.Control.Feedback 
                type="invalid"
                style={{ color: '#ffff00' }}>
                Ingresar su correo.
                </Form.Control.Feedback>
            </InputGroup>
            </Form.Group>
        </Row>
        <Row className="mb-3">

        <Form.Group as={Col} md="2" controlId="validationCustom03">
            <Form.Label className="custom_h1-color">Rut</Form.Label>
            <Form.Control type="text" 
                            placeholder="99999999-9" 
                            name="rut"
                            required 
                            //isInvalid={!rutValido}
                            //onChange={handleRutChange}
                            />
            <Form.Control.Feedback
                type="invalid"
                style={{ color: '#ffff00' }}>
                 RUT no válido.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label className="custom_h1-color">Dirección / Comuna</Form.Label>
            <Form.Control type="text" 
                        placeholder="Dirección, comuna" required 
                        name="direccion"
                        />
            <Form.Control.Feedback
                type="invalid"
                style={{ color: '#ffff00' }}>
                Ingresar su dirección.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationCustom04">
            <Form.Label className="custom_h1-color">Código Postal</Form.Label>
            <Form.Control type="text" 
                        placeholder="" 
                        required 
                        name="codigoPostal"
                        />
            <Form.Control.Feedback
                type="invalid"
                style={{ color: '#ffff00' }}>
                Ingresar Código Postal.
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="2" controlId="validationCustom04">
            <Form.Label className="custom_h1-color">Clave de Acceso</Form.Label>
            <Form.Control type="text" 
                        placeholder="" 
                        required 
                        name="password"
                        />
            <Form.Control.Feedback 
                type="invalid"
                style={{ color: '#ffff00' }}>
                Ingresar contraseña.
            </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Form.Group className="mb-3">
            <Form.Check
            required
            //label="Aceptar términos y condiciones."
            label={<span style={{ color: '#ffffff' }}>Aceptar términos y condiciones.</span>}
            feedback={<span style={{ color: '#ffffff' }}>Debe aceptar antes de enviar.</span>}
            feedbackType="invalid"
            style={{ color: '#ffffff' }}/>
        </Form.Group>
        <Button variant="dark" type="submit">Enviar Registro</Button>
        </Form>
    </Container>
    <Footer />
    </>
  );
}
