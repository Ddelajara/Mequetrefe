import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import autor from '/image/autor.jpg'
import M_B from '/image/M_B.png'

export const Footer = () => {
  return (
    <>
        <div className="mt-5 mb-1 custom_FT-color">
            <Container>
                <Row>
                    <Col>
                        <div className='pt-3'>
                            <img className="my-image-brand" src={M_B} alt="M" />
                        </div>
                        <h4 className='pt-3'>Mequetrefe.cl</h4>
                        <p>Branding, diseño y desarrollos creativos en el ámbito digital y tradicional </p>

                        <div>
                        <a href="https://web.facebook.com/MequetrefeEstudio?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className="custom-margen">
                            <i className="fab fa-facebook fa-xl custom-color-social-icons"></i>
                        </a>
                        <a href="https://www.instagram.com/mequetrefe.estudio/" target="_blank" rel="noopener noreferrer" className="custom-margen">
                            <i className="fab fa-instagram fa-xl custom-color-social-icons"></i>
                        </a>
                    </div>
                    </Col>
                    <Col className="custom-centered-content">
                        <img className="my-image" src={autor} alt="DDLJ" />

                        <b className="custom-footer-autor">
                            DDLJ
                        </b>

                        <p className="custom-footer-autor">
                        © {new Date().getFullYear()} Todos los derechos reservados.
                        </p>
                    </Col>
                    <Col>
                        <div className='pt-5 custom-centered-proyect'>
                            <h3>Proyecto e-commerce</h3>
                            <h5 style={{ color: '#F92B5C' }}>DWFSC7 BootCamp UDD</h5>
                            <p className="footer-autor"> <i class="fa-regular fa-envelope custom-color-social-icons"></i> dadelajara.dwfs7@bootcampudd.cl</p>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    </>
  )
}
