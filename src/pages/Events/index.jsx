import React from "react";

/**Styles */
import "./events.css";

/**Components */
import HeaderTheme from "../../components/ui/HeaderTheme";
import ListEvents from "../../components/ui/ListEvents";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

/**React Strap */
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

/**Images */
import upcomingEvents from "../../assets/images/Header_Konser.jpg";


const Events = () => {
  return (
    <>
    <Header/>
        <HeaderTheme title={"EVENTS"} />
      <section>
        <Row>
          <Col lg="12 mt-3 mb-3">
            <div className="event__top__wrapper">
              <h2>UPCOMING EVENT</h2>
              <img
                src={upcomingEvents}
                alt="Gambar Konser"
                className="upcoming-event-img"
              />
            </div>
          </Col>
        </Row>

        <ListEvents />
      </section>
      <Footer/>
    </>
  );
};

export default Events;
