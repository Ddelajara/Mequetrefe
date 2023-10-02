
import Carousel from 'react-bootstrap/Carousel';

export function CarouselNav() {
  return (
    <Carousel>
      <Carousel.Item>
        <img 
          className='d-block w-100'
          src='../../public/image/BANNER-ESP-1240X375-1.jpg' 
          alt='Banner Pincel'
          style={{ height: '350px' }} 
        />
        <Carousel.Caption style={{ textAlign: 'left' }}>
          <h2 className='custom-caption-title'>¡Diseña, crea, toca! </h2>
          <p className='custom-caption-text'>¡Dale un diseño que resuene con tu alma y estilo!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className='d-block w-100'
          src='../../public/image/BANNER-CTO-1240X375_A.jpg' 
          alt='Banner Pincel'
          style={{ height: '350px' }}
        />
        <Carousel.Caption style={{ textAlign: 'left' }}>
          <h2 className='custom-caption-title'>Customiza tus ideas</h2>
          <p className='custom-caption-text'>Explora el ritmo de los colores y la melodía de las formas en tu creación.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
