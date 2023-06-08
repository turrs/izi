import { useState, useEffect } from "react";
import { Col, Row, Alert, Container } from "react-bootstrap";
import logo from "../assets/img/black.png";
export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = e => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Container>
      <div className="newsletter-bx wow slideInUp">
        <Row className="justify-content-center d-flex align-items-center">
          <img src={logo} />
        </Row>
      </div>
    </Container>
  );
};
