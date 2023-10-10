import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCarrito } from '../context/carrito/carritoContext';

export const Transito = () => {
    const navigate = useNavigate();
    const { setCarrito } = useCarrito();

    useEffect(() => {
        const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));

        if (!orderDetails) {
            setCarrito([]);
            navigate('/ListaProductos');
        } else {
            navigate('/PagoOk');
        }
    }, [navigate, setCarrito]);

    return (
        <div>Transito</div>
    );
}