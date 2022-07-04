import * as React from "react";
import { Link } from "gatsby";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
/* import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; */

const Menu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Panafinsa
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <NavDropdown title="Sobre Panafinsa" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/quienes-somos">
                Quienes Somos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/documentacion-legal">
                Documentación legal
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/junta-directiva">
                Junta Directiva
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/aliados-bancarios">
                Aliados bancarios
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/estados-financieros">
                Estados financieros
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/calificacion-riesgo">
                Calificación de riesgo
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Nuestro productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/prestamos-personales">
                Préstamos personales
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/prestamos-empresas">
                Préstamos para empresas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/factoring">
                Factoring
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/compra-cartera">
                Compra de cartera
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
