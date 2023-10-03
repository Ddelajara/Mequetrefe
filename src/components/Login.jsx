import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react'
import axios from "axios"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const Login = () => {

    const [user, setUser] = useState({
        correo: '',
        password:''
    })

    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const url = 'http://localhost:3002/api/v1/login'
        try {
            const {data} = await axios.post(url, user, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
    
    
            MySwal.fire({
                position: 'center',
                icon: 'success',
                title: 'Tu acceso ha sido completado ' + user.correo,
                footer: '<a href="">Bienvenido nuevamente</a>',
                 showConfirmButton: false,
                timer: 2300
              })
    
          } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Las credenciales ingresadas no son válidas',
                    text: 'Error de acceso!',
                    timer: 2300
                })
          }
    }

return (

<div className="container d-flex justify-content-center mt-5 mb-5">
    <Row>
        <Col md={6}>
            <img src="/image/MQT114.jpg" alt="Elvis" className="img-fluid rounded" style={{height: 'auto', maxHeight: '100%'}} />
        </Col>
        <Col md={6}>
            <Form onSubmit={handleSubmit} className="rounded border p-4 custom-border-color">
                <h2 className='custom_h1-red-color'>Ingresa a tu cuenta</h2>
                <h6>¡Bienvenido! Por favor, ingresa tus datos para continuar.</h6>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                            name="correo"
                            placeholder="tucuenta@correo.com"
                            required
                            onChange={handleChange} value={user.correo}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone elseooo.
                </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                            name="password"
                            placeholder="Password"
                            required
                            onChange={handleChange} value={user.password} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <br />
                <Form.Check type="checkbox" label="Recuerdame" />
                </Form.Group>
                <Button variant="dark" type="submit">Iniciar Sesión</Button>
            </Form>
        </Col>
    </Row>
</div>
  )
}
