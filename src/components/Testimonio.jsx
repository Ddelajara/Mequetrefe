
import Card from 'react-bootstrap/Card';


export const Testimonio = ({ nombre, comentario, imagen }) => {
    return (
        <Card style={{ width: '21rem', margin: '1rem' }}>
            <Card.Img variant="top" src={imagen}  
            style={{ width: '100px', marginTop: '2rem' }}
            className="mx-auto d-block"/>
            <Card.Body>
                <Card.Text>
                    "{comentario}"
                </Card.Text>
                <Card.Footer>
                    <small className="text-muted">{nombre}</small>
                </Card.Footer>
            </Card.Body>
        </Card>
    );
}

