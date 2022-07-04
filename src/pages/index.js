import * as React from "react";
/* import { Link } from "gatsby"; */
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);
SwiperCore.use([EffectFade]);

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Helmet>
          <title>Panafinsa</title>
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

        <Swiper
          navigation={true}
          autoplay={true}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Navigation]}
          effect="fade"
          slidesPerView={1}
          className="mySwiper"
        >
          <SwiperSlide>
            <StaticImage
              src="../images/home/carousel/panafinsa-slider1.jpg"
              alt="Panafinsa banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/home/carousel/panafinsa-slider2.jpg"
              alt="Panafinsa banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/home/carousel/panafinsa-slider3.jpg"
              alt="Panafinsa banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/home/carousel/panafinsa-slider4.jpg"
              alt="Panafinsa banner"
            />
          </SwiperSlide>
        </Swiper>

        <Container fluid>
          <Row>
            <Col md={12}>
              <h1>Index</h1>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
};

export default IndexPage;
