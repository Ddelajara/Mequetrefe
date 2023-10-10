import { Footer } from '../components/Footer';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useCarrito } from '../context/carrito/carritoContext';
import { useEffect } from 'react';

export const PagoOk = () => {

        const {setCarrito } = useCarrito();  // Añade setCarrito aquí
        const navigate = useNavigate();

        // Recuperando datos desde localStorage
        const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));

        if (!orderDetails) {
            console.log("No hay detalles de orden en localStorage");
            // Aquí puedes redireccionar al usuario a otra página o manejar este caso como mejor te parezca
            setCarrito([]);
            navigate('/ListaProductos');
            return null;  // Si decides no renderizar el componente cuando no hay detalles de orden.
        }

        localStorage.removeItem('orderDetails');

        const handleVolver = () => {
            setCarrito([]);
            navigate('/ListaProductos');
        };

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
            <Button variant="dark" onClick={handleVolver}>Volver a la tienda</Button>
        </div>

    </Container>
   
    <Footer />
    </>
)
}
