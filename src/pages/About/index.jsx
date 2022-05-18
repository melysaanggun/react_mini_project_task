import React from "react";

/**Styles */
import "./aboutus.css";
/**Components */
import HeaderTheme from "../../components/ui/HeaderTheme";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

/**React Strap */
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

/**Images */
import FotoOSF from "../../assets/images/about_osf_1.jpg";
import WhyOSF from "../../assets/images/about_osf_2.jpg";
import ValueOSF from "../../assets/images/about_osf_3.jpg";
import ceo from "../../assets/images/about_osf_4.jpg";
import lokasi from "../../assets/images/about_osf_5.jpg";
import layout from "../../assets/images/about_osf_6.jpg";
import quotes from "../../assets/images/about_osf_7.jpg";


const About = () => {
  return (
    <>
      <Header />
      <HeaderTheme title={"ABOUT OSF"} />
      <section>
        <Container className="abous__wrapper">
          <Row>
            <Col lg="12" className="aboutus__header mt-5 mb-5">
              <img
                src={FotoOSF}
                alt="GambarAboutOSF"
                className="about__osf__img"
              />
              <div className="about__osf__detail">
                <h4>
                  Merupakan <span>street shop space</span> yang berisikan{" "}
                  <span>food, fashion, and fantasy</span>, <br /> serta dapat
                  dijadikan sebagai tempat hiburan <span>(Entertainment)</span>
                </h4>
              </div>
            </Col>

            <Col lg="12" className="aboutus__header mt-5 mb-5">
              <img
                src={WhyOSF}
                alt="GambarAboutOSF"
                className="about__osf__img"
              />
              <div className="about__osf__detail">
                <h4>
                  OSF memberikan berbagai kemudahan dan kenyamanan bagi
                  masyarakat <br />
                  dengan <span> keunggulan-keunggulan berikut</span>
                </h4>
              </div>
            </Col>

            <Col lg='12' className="aboutus__header mt-5 mb-5">
            <div className="about__osf__detail">
                <img
                  src={lokasi}
                  alt="GambarAboutOSF"
                  className="about__osf__img__loc"
                />
              </div>
            </Col>

            <Col lg='12' className="aboutus__header mt-5 mb-5">
            <div className="about__osf__detail">
                <img
                  src={layout}
                  alt="GambarAboutOSF"
                  className="about__osf__img__loc"
                />
              </div>
            </Col>

            <Col lg="12" className="aboutus__header mt-5 mb-5">
              <div className="about__osf__detail">
                <h4>
                  Dibangun oleh <span>anak-anak muda</span> penuh karya dan{" "}
                  <span>value</span> berikut
                </h4>
                <img
                  src={ValueOSF}
                  alt="GambarAboutOSF"
                  className="about__osf__img"
                />
              </div>
            </Col>

            <div className="about__osf__detail__ceo d-flex">
              <Col lg="6">
                <img
                  src={ceo}
                  alt="GambarAboutOSF"
                  className="about__osf__img__ceo"
                />
              </Col>
              <Col lg="3">
                <h5>
                  "Kami percaya, Indonesia bukan ditentukan oleh <span>batas peta</span>,
                  melainkan oleh
                  <span> gerakan dan peran besar dari anak muda</span>."
                </h5>
                <h6>- Howandi Chandra</h6>
                <p>CEO of Hope Company Group</p>
              </Col>
            </div>

            <Col lg='12' className="aboutus__header mt-5 mb-5">
            <div className="about__osf__detail">
                <img
                  src={quotes}
                  alt="GambarAboutOSF"
                  className="about__osf__img__loc"
                />
              </div>
            </Col>

            
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default About;
