import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { useCarrito } from '../context/carrito/carritoContext';
import { useContext } from 'react';
import { UserContext } from '../context/user/userContext';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)

export function CardProduct({ Titulo, Texto, Precio, Imagen }) {

    const [userState] = useContext(UserContext);
    const { token } = userState;

    const { agregarProducto } = useCarrito();
    const producto = { Titulo, Texto, Precio, Imagen };

    const validaToken = () =>{
        if(!token){
            MySwal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Debes iniciar sesión con tu cuenta para poder comprar',
                 showConfirmButton: true,
                timer: 3000
              })
            return
        }
        agregarProducto(producto)
    }

    return (
      <div className="d-flex justify-content-between mb-5">
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={Imagen} />
          <Card.Body>
            <Row>
              <Col xs={12}>
                <Card.Title>{Titulo}</Card.Title>
                <Card.Text>
                  <h5 className='custom_Precio-color'>USD {Precio}</h5>
                  {Texto}
                </Card.Text>
              </Col>
            </Row>
            <Button className="mt-3" variant="dark"
            onClick={() => validaToken()}
            >Agregar al Carro</Button>
          </Card.Body>
        </Card>
      </div>
    );
}
