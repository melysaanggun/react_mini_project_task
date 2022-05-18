import React from "react";
import HeaderAdmin from "../../HeaderAdmin";
import "./events-data.css";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
/**Query */
import { gql, useQuery, useMutation } from "@apollo/client";
import LoadingSvg from "../../LoadingSvg";
const getAllEvents = gql`
  query MyQuery {
    events {
      id
      nama_event
      keterangan
      tanggal
      foto_event
    }
  }
`;

const DeleteEvent = gql`
  mutation MyMutation($id: Int!) {
    delete_events_by_pk(id: $id) {
      id
    }
  }
`;

const EventsData = () => {
  const { data, loading, error } = useQuery(getAllEvents);
  const [deleteEvent, { loading: loadingDelete }] = useMutation(DeleteEvent, {
    refetchQueries: [getAllEvents],
  });
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  const handleDelete = (idx) => {
    deleteEvent({
      variables: {
        id: idx,
      },
    });
  };

  return (
    <>
      <HeaderAdmin />
      <Container>
        <div className="content__events__data">
          <Row className="events__data__row">
            <Col lg="12">
              <div className="events__data__header d-flex align-items-center justify-content-between">
                <h1> Events Data </h1>
                <span className="add___event__btn">
                  <i class="ri-add-circle-fill"></i>
                  <Link to="/events-data/add-new-event">Add New Events</Link>
                </span>
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
                      <button>
                        <span>
                          <Link to={`/events-data/update-event-data/${v.id}`}>
                            Edit
                          </Link>
                        </span>
                      </button>
                      <button onClick={() => handleDelete(v.id)}>
                        <Link to="/events-data">Delete</Link>
                      </button>
                    </div>
                  </Col>
                ))}
              </Slider>
            </div>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default EventsData;
