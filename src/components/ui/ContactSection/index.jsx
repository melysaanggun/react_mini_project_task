import React from "react";

/**React Strap */
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

/**Images */
import tenantIcon from "../../../assets/images/tenant-icon.png";
import eoIcon from "../../../assets/images/eo-icon.png";
import fbIcon from "../../../assets/images/feedback-icon.png";
import header from "../../../assets/images/header_contact.JPG";

/**S6yles */
import "./contact-section.css";

import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const ContactSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <div className="header__img">
              <img src={header} />
            </div>
            <h3 className="text-center">GET DIRECTION</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.640397689697!2d101.4143125142675!3d0.5411009637918309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ab084d959319%3A0x636fd1ad9dd3c0b3!2sOne%20Street%20Food!5e0!3m2!1sen!2sid!4v1652715666878!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ borderRadius: "20px", paddingBottom: "50PX" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>

          <Col lg="12" className="mb-4">
            <h3 className="text-center">CONNECT WITH US</h3>
            <div className="wa-message text-center">
              <a href="https://wa.link/jfpi9v">
                <button className="wa__btn">
                  <i class="ri-whatsapp-fill"></i>
                  Whatsapp Message
                </button>
              </a>
            </div>
          </Col>

          <Col lg="4">
            <div className="join-as-tenant">
              <img src={tenantIcon} alt="IconTenant" className="w-50" />
              <h4>
                <Link to="/contact/join-tenant">JOIN AS TENANT</Link>
              </h4>
            </div>
          </Col>
          <Col lg="4">
            <div className="join-as-tenant">
              <img src={eoIcon} alt="IconTenant" className="w-50" />
              <h4>
                <Link to="/contact/event-collab">EVENT COLLABORATION</Link>
              </h4>
            </div>
          </Col>
          <Col lg="4">
            <div className="join-as-tenant">
              <img src={fbIcon} alt="IconTenant" className="w-50" />
              <h4>
                <Link to="/contact/feedback">GIVE YOUR FEEDBACKS</Link>
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
