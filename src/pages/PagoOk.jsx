import { Footer } from '../components/Footer';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export const PagoOk = () => {

        // Recuperando datos desde localStorage
        const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));

        //localStorage.removeItem('orderDetails');

        const navigate = useNavigate();

  return (
    <>
    <Container className="mt-5">
        <h1 className="text-center mb-4">¡Gracias por tu compra!</h1>

        <Card className="mx-auto" style={{ maxWidth: '400px' }}>
            <Card.Header className="text-center">
                Detalles de la Orden
            </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item><strong>Nro Orden:</strong> {orderDetails.orderID}</ListGroup.Item>
                <ListGroup.Item><strong>Fecha Creación:</strong> {orderDetails.creationDate}</ListGroup.Item>
                <ListGroup.Item><strong>Nombre:</strong> {orderDetails.name}</ListGroup.Item>
                <ListGroup.Item><strong>Correo electrónico:</strong> {orderDetails.email}</ListGroup.Item>
                <ListGroup.Item><strong>Detalle:</strong> {orderDetails.producto}</ListGroup.Item>
                <ListGroup.Item><strong>Total Pagado:</strong> {orderDetails.currency_code + ' ' + orderDetails.value}</ListGroup.Item>
            </ListGroup>
        </Card>
        <div className="mt-4 text-center">
            <Button variant="dark" onClick={() => navigate('/ListaProductos')}>Volver a la tienda</Button>
        </div>

    </Container>
   
    <Footer />
    </>
)
}
