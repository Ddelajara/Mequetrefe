import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardProduct } from '../components/CardProduct'
import { ResumenCarrito } from '../components/ResumenCarrito';
import { Footer } from '../components/Footer'
import { Testimonio } from '../components/Testimonio';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

      // Datos de prueba para los testimonios
      const testimoniosData = [
        {
            nombre: "Juan Pérez",
            comentario: "¡Excelente servicio! Recomendado al 100%.",
            imagen: "/image/test1.png"
        },
        {
            nombre: "Ana López",
            comentario: "Los productos son de gran calidad. Muy satisfecha.",
            imagen: "/image/test2.png"
        },
        // ... puedes agregar más testimonios aquí ...
    ];

  return (
    <>
            <Container>
                {/* Sección de Productos y Resumen de Carrito */}
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
                          {/* Sección de Testimonios */}
                          <h3 className="mt-5">Lo que dicen nuestros clientes</h3>
                         
                              {testimoniosData.map((testimonio, index) => (
                                <Row>
                                  <Col md={4} key={index}>
                                      <Testimonio 
                                          nombre={testimonio.nombre}
                                          comentario={testimonio.comentario}
                                          imagen={testimonio.imagen}
                                      />
                                  </Col>
                                </Row>
                              ))}
                         
                        </div>

                    </div>
                </div>


            </Container>
    <Footer/>

    </>
  );
}
