import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardProduct } from '../components/CardProduct'
import { ResumenCarrito } from '../components/ResumenCarrito';
import { Footer } from '../components/Footer'

export function ListaProductos() {
  const [productos, setProductos] = useState([]);
  const url = import.meta.env.VITE_BACKEND_URL + 'products'

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setProductos(response.data);
      })
      .catch(error => {
        console.error("Error obteniendo los productos: ", error);
      });
  }, []);

  return (
    <>
    <div className="container mt-5">
        <h1>Lista de Servicios</h1><br/>
        <div className="row">
            <div className="col-md-7">
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
            <div className="col-md-5">
                <ResumenCarrito />
            </div>
        </div>
    </div>
    <Footer/>

    </>
  );
}
