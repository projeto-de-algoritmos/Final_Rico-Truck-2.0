import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css';

const MaxWeight = ({ setMaxWeight}) =>  {
    const [show, setShow] = useState(false);
    const [max, setMax] = useState(0);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function onChangeMaxWeight(ev) {
      const { value } = ev.target;
      setMax(value);
    }

    const addMaxWeight = () => {
      setMaxWeight(max);
    }
  
    return (
      <div>
        <Button
          variant="primary"
          onClick={handleShow}
          style={{ backgroundColor: 'blue'}}
        >
          Informar Carga Máxima Permitida
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton >
            <Modal.Title>Carga Máxima Permitida</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="label">Carga Máxima</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Carga Máxima"
                  autoFocus
                  value={max}
                  onChange={onChangeMaxWeight}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={() => {addMaxWeight(); handleClose()}}>
              Confirmar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  export default MaxWeight;