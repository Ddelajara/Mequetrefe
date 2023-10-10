import React, { createContext, useState, useContext, useEffect } from 'react';

import { UserContext } from '../user/userContext';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    //const { token } = useContext(UserContext);
    const [state] = useContext(UserContext)
 //   const user = useContext(UserContext);
    const token = state?.token;
//    alert(token)

    const inicializarCarrito = () => {

        if (!token) return [];  
        const carritoLS = localStorage.getItem('carrito');
        return carritoLS ? JSON.parse(carritoLS) : [];
    };

    const [carrito, setCarrito] = useState(inicializarCarrito);

    useEffect(() => {
        if (token) { 
            localStorage.setItem('carrito', JSON.stringify(carrito));
        }
    }, [carrito, token]);

    const agregarProducto = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const eliminarProducto = (index) => {
        const nuevoCarrito = [...carrito];
        nuevoCarrito.splice(index, 1);
        setCarrito(nuevoCarrito);
    };

    return (
        <CarritoContext.Provider value={{ carrito, agregarProducto, eliminarProducto }}>
            {children}
        </CarritoContext.Provider>
    );
};

export const useCarrito = () => {
    const context = useContext(CarritoContext);
    if (!context) {
        throw new Error('useCarrito debe ser usado dentro de un CarritoProvider');
    }
    return context;
};
