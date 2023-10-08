import { useCarrito } from '../context/carrito/carritoContext';

export function ResumenCarrito() {
    const { carrito, eliminarProducto } = useCarrito();

    return (
        <div>
            <h5>Resumen del Carro</h5>
            <ul>
                {carrito.map((producto, index) => (
                    <li key={index}>
                        {producto.Titulo} - ${producto.Precio} 
                        <button onClick={() => eliminarProducto(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <p>Total: ${carrito.reduce((acc, producto) => acc + parseFloat(producto.Precio), 0).toFixed(2)}</p>
        </div>
    );
}
