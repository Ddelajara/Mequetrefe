import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const LoginOk = () => {
    const [count, setCount] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        // Cuando count llegue a 0, navegar a /ListaProductos
        if (count === 0) {
            navigate('/ListaProductos');
            return;
        }

        // Decrementar el contador cada segundo
        const timerId = setTimeout(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);

        // Limpieza del useEffect
        return () => clearTimeout(timerId);
    }, [count, navigate]);

    return (
        <Container className="mt-5">
            <h1 className="text-center">¡Ya ingresaste a tu sesión!</h1>
            <h2 className="text-center">Ahora puedes entrar a nuestra tienda y elegir tu producto</h2>
            
            <div className="d-flex justify-content-center mt-4">
                <Button variant="dark" onClick={() => navigate('/ListaProductos')}>Ir a tienda</Button>
            </div>

            <div className="text-center mt-4" style={{ color: 'black' }}>
                Serás redirigido en <span style={{ color: 'red' }}>{count}</span> segundos.
            </div>
        </Container>
    );
}
