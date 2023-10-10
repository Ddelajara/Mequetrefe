import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export function ModalCustom ({ show, onClose }) {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={onClose}>
        <Modal.Header className='modalTitleBackground' closeButton>
          <Modal.Title >Agenda una Reunión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><strong>Tu correo</strong></Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label><strong>Tu correo</strong></Form.Label>
              <Form.Control as="textarea" rows={8} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose }>
            Cerrar
          </Button>
          <Button variant="warning" onClick={onClose }>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
