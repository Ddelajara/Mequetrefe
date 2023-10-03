import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react'

export const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password:''
    })

    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        alert('este es un mensaje cuando presionamos submit ' + user.email + ' ' + user.password)
    }

return (

<div className="container d-flex justify-content-center mt-5">
    <Row>
        <Col md={6}>
            <img src="../public/image/MQT114.jpg" alt="Elvis" className="img-fluid rounded" style={{height: 'auto', maxHeight: '100%'}} />
        </Col>
        <Col md={6}>
            <Form onSubmit={handleSubmit} className="rounded border p-4 custom-border-color">
                <h2 className='custom_h1-red-color'>Ingresa a tu cuenta</h2>
                <h6>¡Bienvenido! Por favor, ingresa tus datos para continuar.</h6>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                            name="email"
                            placeholder="tucuenta@correo.com"
                            required
                            onChange={handleChange} value={user.email}/>
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
