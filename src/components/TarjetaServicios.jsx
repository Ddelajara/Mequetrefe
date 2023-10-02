import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

export const TarjetaServicios = () => {
  return (
    <>

    {/* <Container className="mt-5">
      <h1>Trabajamos en todas las areas de diseño</h1>
    </Container> */}
    <div className="pb-5 custom_service-color">
      <Container >
          <h1 className="pt-4 custom_Fc-color">Explora Servicios complementarios</h1>
            <p>Descubre una gama diversa de servicios de diseño complementarios, diseñados para realzar y perfeccionar tus proyectos. Ya sea que necesites asesoramiento especializado, ajustes de diseño personalizados o elementos gráficos únicos, estamos aquí para ayudarte a llevar tus ideas a un nuevo nivel. </p>
          <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Col md={4}>
                  <Card className="mt-5 mb-3">
                      <Card.Img variant="top" src="/image/Luthier.jpg" />
                      <Card.Body>
                          <Card.Title>Servicios de Lutherias</Card.Title>
                          <Card.Text className="custom-card-text">
                              Nuestro servicio de calibración te entrega el completo ajuste de afinación y comodidad para que disfrutes tu instrumento al máximo.
                          </Card.Text>
                          <Button variant="dark">Leer más</Button>
                      </Card.Body>
                  </Card>
              </Col>
              <Col md={4}>
                  <Card className="mt-5 mb-3">
                      <Card.Img variant="top" src="/image/MOT83.jpg" />
                      <Card.Body>
                          <Card.Title>Personaliza Accesorios</Card.Title>
                          <Card.Text className="custom-card-text">
                              Nuestro servicio de calibración te entrega el completo ajuste de afinación y comodidad para que disfrutes tu instrumento al máximo.
                          </Card.Text>
                          <Button variant="dark">Leer más</Button>
                      </Card.Body>
                  </Card>
              </Col>
              
              <Col md={4}>
                  <Card className="mt-5 mb-3">
                      <Card.Img variant="top" src="/image/MQT17.jpg" />
                      <Card.Body>
                          <Card.Title>Servicio Diseño de Logos</Card.Title>
                          <Card.Text className="custom-card-text">
                              Nuestro servicio de calibración te entrega el completo ajuste de afinación y comodidad para que disfrutes tu instrumento al máximo.
                          </Card.Text>
                          <Button variant="dark">Leer más</Button>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
        </Container>
    </div>

    <div className='custom_bkb-color'>
      <Container className="pt-5">
          <Row>
                  <Col sm={12} lg={12}>
                      <img src="/image/BANNER-1240X650_C.jpg" alt="Elvis" className="img-fluid rounded" style={{height: 'auto', maxHeight: '100%'}}/>
                  </Col>
          </Row>
      </Container>
    </div>
   </>
  )
}