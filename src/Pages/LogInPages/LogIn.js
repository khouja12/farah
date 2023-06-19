import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./LogIn.css";

function LogIn() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Member, setMember] = useState({});

  const handleChange = (e) => {
    setMember({ ...Member, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <p  className="cnx" onClick={handleShow}>
        Connexion
      </p>

      <Modal  show={show} onHide={handleClose}>
          <Modal.Title className="cnx1" >Connexion</Modal.Title>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Adresse Email</Form.Label>
              <Form.Control onChange={handleChange} name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control onChange={handleChange}  name="password"  type="password" placeholder="Password" />
            </Form.Group>

            <a href="" className="mdpo" style={{ color: "blue " }}>
              {" "}
              Mot De Passe Oublié ?{" "}
            </a>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LogIn;
