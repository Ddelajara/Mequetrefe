import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardProduct } from '../components/CardProduct'

export function ListaProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Aquí asumo que ya tienes axios configurado, si no es así, añade la URL completa
    axios.get('/tu-url-de-la-api')
      .then(response => {
        setProductos(response.data);
      })
      .catch(error => {
        console.error("Error obteniendo los productos: ", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      {productos.map((producto, index) => (
        <CardProduct
          key={index}
          Titulo={producto.Titulo}
          Texto={producto.Texto}
          Precio={producto.Precio}
          Imagen={producto.Imagen}
        />
      ))}
    </div>
  );
}
