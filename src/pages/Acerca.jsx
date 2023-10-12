import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { Footer } from '../components/Footer';

export const Acerca = () => {
    return (
    <>    
        <Container>
        <div className="mt-5">
            {/* Espacio para la imagen */}
            <div className="d-flex justify-content-center mb-4">
                <Image src="/image/acerca.jpg" alt="Acerca de nosotros" />
            </div>

            {/* Slogan */}
            <div className="text-center">
                <h1>Somos, Rock, Arte y Estilo</h1>
            </div>
        </div>
        </Container>
        <Footer />
    </>
    );
};