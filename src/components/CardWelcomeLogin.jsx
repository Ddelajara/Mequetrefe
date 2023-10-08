import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';

export const CardWelcomeLogin = () => {
    const navigate = useNavigate();

  return (
    <div className='custom_bkb-color'>
    <div className="container d-flex justify-content-center pt-5">
        <Row className="g-5" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Col md={6}>
                    <h1 className="animate__animated animate__bounce animate__zoomIn">¡Gracias por registrarte!</h1>
                    <p>Al crear tu cuenta podras agendar, revisar nuestros productos y por sobre todo conectarte con las ideas y diseños en tu proximo proyecto."</p>
                    <Button onClick={() => navigate('/Login')}variant="success" type="submit">Ingresar a mi cuenta ahora</Button>
            </Col>
            <Col md={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Image className="img-card-a pb-2" src="/image/paint-brush-3222629_640.jpg" roundedCircle style={{ width: '350px', height: '350px', border: '3px solid red' }}/>
            </Col>
        </Row>
    </div>
  </div>
  )
}
