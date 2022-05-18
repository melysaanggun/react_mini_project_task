import React from "react";

/**React Strap */
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

/**Youtube */
import YoutubeEmbed from "../../YoutubeEmbed";

/**Styles */
import "./list-event.css";
import "../../YoutubeEmbed/youtube-embed.css";
import "../../LoadingSvg"

import Slider from "react-slick";

/**Query */
import { gql, useQuery } from "@apollo/client";
import LoadingSvg from "../../LoadingSvg";
const getAllEvents = gql`
  query MyQuery {
    events {
      nama_event
      keterangan
      tanggal
      foto_event
    }
  }
`;

const ListEvents = () => {
  const { data, loading, error } = useQuery(getAllEvents);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  if (loading) {
    return <LoadingSvg/>
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-3">
            <div className="list__events__top d-flex align-items-center justify-content-between">
              <h3>OUR EVENTS</h3>
              <span>
                <Link to="/events">Explore More</Link>
              </span>
            </div>
          </Col>

          <Col lg="12" className="list__youtube__events mb-3">
            <div className="single__youtube__card">
              <h4>ON YOUTUBE</h4>
              <div className="car_meet d-flex">
                <YoutubeEmbed className="youtube_embed" embedId="__alb0qm6ww" />
                <div className="car_meet_info d-inline">
                  <h3>PEKANBARU CAR MEET 2022</h3>
                  <h4>CAR MEET UP TERMEGAH AWAL TAHUN 2022 BY BUILD N DRIVE</h4>
                  <button>
                    <Link to="/events">See More</Link>
                  </button>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="12" className="mb-3">
            <div className="list__events__top d-flex align-items-center justify-content-between">
              <h3>LATEST EVENTS</h3>
            </div>
          </Col>
          
          <div className="list-event-wrapper">
            <Slider {...settings}>
              {data?.events.map((v, idx) => (
                <Col lg="6" key={idx} className="list-single-event m-0.5">
                  <img
                    src={v.foto_event}
                    className="w-100 d-inline"
                    alt="GambarEvent"
                  />
                  <div className="event__details">
                    <h2>{v.nama_event}</h2>
                    <p>{v.keterangan}</p>
                  </div>
                </Col>
              ))}
            </Slider>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default ListEvents;
