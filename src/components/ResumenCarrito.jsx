import { useCarrito } from '../context/carrito/carritoContext';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PayPalButtons } from '@paypal/react-paypal-js';

export function ResumenCarrito() {
    const { carrito, eliminarProducto } = useCarrito();
    const total = carrito.reduce((acc, producto) => acc + parseFloat(producto.Precio), 0).toFixed(2);

    return (
    <>
        <Card className="border p-3 rounded">
            <Card.Header style={{ color: '#228b22', fontWeight: 'bold' }}>
                <h2>Resumen del Carro</h2>
            </Card.Header>
            <ListGroup variant="flush">
                {carrito.map((producto, index) => (
                    <ListGroupItem key={index}>
                        <Row>
                            <Col xs={6} className="producto-text">
                                {producto.Titulo}
                            </Col>
                            <Col xs={3} className="text-right producto-precio">
                                ${producto.Precio}
                            </Col>
                            <Col xs={3} className="text-right">
                                <Button 
                                    variant="danger" 
                                    size="sm" 
                                    onClick={() => eliminarProducto(index)}
                                >
                                    Eliminar
                                </Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>
            <Card.Footer>
                <h4>Total: ${total}</h4>
            </Card.Footer>
        </Card>
        <PayPalButtons />
    </>
    );
}
