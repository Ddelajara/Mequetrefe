import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Placeholder from 'react-bootstrap/Placeholder';
import { useCarrito } from '../context/carrito/carritoContext';

export function CardProduct({ Titulo, Texto, Precio, Imagen }) {

    const { agregarProducto } = useCarrito();
    const producto = { Titulo, Texto, Precio, Imagen };

    return (
      <div className="d-flex justify-content-around mb-5">
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={Imagen} />
          <Card.Body>
            <Row>
              <Col xs={12}>
                <Card.Title>{Titulo}</Card.Title>
                <Card.Text>
                  <h5 className='custom_Precio-color'>USD {Precio}</h5>
                  {Texto}
                </Card.Text>
              </Col>
            </Row>
            <Button className="mt-3" variant="dark"
            onClick={() => agregarProducto(producto)}
            >Agregar al Carro</Button>
          </Card.Body>
        </Card>
      </div>
    );
}
  