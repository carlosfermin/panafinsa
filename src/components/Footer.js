import * as React from "react";
/* import { Link } from "gatsby"; */
import { StaticImage } from "gatsby-plugin-image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <>
      <footer>
        <Container className="py-4 py-md-5">
          <Row className="d-flex justify-content-center">
            <Col md={1}></Col>
            <Col md={3} className="text-center text-md-start">
              <h2 className="footer-title mb-2">CONTACTO</h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center pt-3">
            <Col md={1} className="my-auto text-center">
              <div className="footer-icon">
                <StaticImage
                  src="../images/assets/direccion.png"
                  alt="Panafinsa banner"
                />
              </div>
            </Col>
            <Col md={3} className="text-center text-md-start">
              <h3 className="footer-subtitle">Nuestra dirección:</h3>
              <p className="footer-text px-4 px-md-0">
                Calle 50 <br />
                PH GLOBAL BANK TOWER
                <br />
                Piso 23, Oficina 2302
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center pt-3">
            <Col md={1} className="my-auto text-center">
              <div className="footer-icon">
                <StaticImage
                  src="../images/assets/consultas.png"
                  alt="Panafinsa banner"
                />
              </div>
            </Col>
            <Col md={3} className="text-center text-md-start">
              <h3 className="footer-subtitle">Consultas:</h3>
              <p className="footer-text">info@panafinsa.com</p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center pt-3">
            <Col md={1} className="my-auto text-center">
              <div className="footer-icon">
                <StaticImage
                  src="../images/assets/telefono.png"
                  alt="Panafinsa banner"
                />
              </div>
            </Col>
            <Col md={3} className="text-center text-md-start">
              <h3 className="footer-subtitle">Phone:</h3>
              <p className="footer-text mb-0">(+507) 264 0070</p>
              <p className="footer-text mb-0">(+507) 264 0074</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
