import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';

export const Login = () => {
  return (
   
<div className="container d-flex justify-content-center mt-5">
    <Row>
        <Col md={6}>
            <img src="../public/image/MQT114.jpg" alt="Elvis" className="img-fluid rounded" style={{height: 'auto', maxHeight: '100%'}} />
        </Col>
        <Col md={6}>
            <Form className="rounded border p-4 custom-border-color">
                <h2 className='custom_h1-red-color'>Ingresa a tu cuenta</h2>
                <h6>¡Bienvenido! Por favor, ingresa tus datos para continuar.</h6>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="tucuenta@correo.com" required/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone elseooo.
                </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <br />
                <Form.Check type="checkbox" label="Recuerdame" />
                </Form.Group>
                <Button variant="dark" type="submit">Submit</Button>
            </Form>
        </Col>
    </Row>
</div>
  )
}
