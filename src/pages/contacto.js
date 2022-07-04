import * as React from "react";
/* import { Link } from "gatsby"; */
/* import { StaticImage } from "gatsby-plugin-image"; */
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contacto = () => {
  return (
    <Layout>
      <main>
        <Helmet>
          <title>Contacto</title>
          <meta
            name="keywords"
            content="hallo, internet, planes, velocidad, experiencia, distribuidores, ecuador"
          />
          <meta
            name="description"
            content="Hallo es una marca creada
          como imagen para la provisión del servicio de acceso a
          internet en el ecuador, que opera bajo los estándares de
          calidad alemán."
          />
          <meta property="og:title" content="Hallo" />
          <meta property="og:url" content="https://hallo.ec" />
          <meta property="og:type" content="article" />
          <meta
            property="og:description"
            content="Hallo es una marca creada
          como imagen para la provisión del servicio de acceso a
          internet en el ecuador, que opera bajo los estándares de
          calidad alemán."
          />
        </Helmet>
        <Container>
          <Row>
            <Col md={12}>
              <h1>Contacto</h1>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
};

export default Contacto;
