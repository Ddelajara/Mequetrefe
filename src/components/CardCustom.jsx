import React from 'react';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { ModalCustom } from './ModalCustom';

export const CardCustom = () => {
    const [showModal, setShowModal] = React.useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
    };
  return (

  <div className='custom_bkb-color'>
    <div className="container d-flex justify-content-center pt-5">
        <Row className="g-5" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Col md={7}>
                    <h1 className="animate__animated animate__bounce animate__zoomIn">¡Transforma el Sonido en Arte, Customiza tu Pasión!</h1>
                    <p>Nuestro equipo está listo para escucharte, asesorarte y empezar a esbozar el proyecto de tus sueños. No esperes más, ¡ven y sumérgete en el mundo del diseño artesanal de guitarras!"</p>
                    <Button variant="dark" onClick={handleOpenModal} type="submit">Agendar una reunión</Button>
            </Col>
            <Col md={5} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Image className="img-card-a pb-2" src="/image/MOT90.jpg" roundedCircle />
            </Col>
        </Row>
    </div>
    <ModalCustom show={showModal} onClose={handleCloseModal} />
  </div>
  )
}
