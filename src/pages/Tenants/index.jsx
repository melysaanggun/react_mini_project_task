import React from "react";

/**Components */
import HeaderTheme from "../../components/ui/HeaderTheme";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

/**React Strap */
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

/**Images */
import Asia from "../../assets/images/Asia_Area.png";
import TimurTengah from "../../assets/images/MidEast_Area.png";

/**Styles */
import "./tenants.css";
import Slider from "react-slick";
import LoadingSvg from "../../components/LoadingSvg";

/**Query */
import { gql, useQuery } from "@apollo/client";
import {
  GET_ASIA_TENANTS,
  GET_MID_TENANTS,
} from "../../GraphQl/Tenants/queries";

const Tenants = () => {
  const { 
    data, 
    loading, 
  } = useQuery(GET_ASIA_TENANTS);
  const {
    data: dataMid,
    loading: loadingMid,
    error: errMid,
  } = useQuery(GET_MID_TENANTS);

  if (loading || loadingMid) {
    return <LoadingSvg />;
  }

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
  };

  return (
    <>
      <Header />
      <HeaderTheme title={"TENANTS"} />
      <section>
        <Container>
          <Row>
            <Col lg="12 mt-5 mb-5">
              <div className="area__img__wrapper">
                <h2>AREA ASIA</h2>
                <img
                  src={Asia}
                  alt="Gambar Asia"
                  className="asia--img w-100 h-50"
                />
              </div>
            </Col>

            <Slider {...settings}>
              {data?.tenants.map((v, idx) => (
                <Col lg="3" key={idx}>
                  <div className="single__list__card ">
                    <div className="tenant__img">
                      <img
                        src={v.image_url}
                        className="w-100"
                        alt="GambarTenant"
                      />
                    </div>

                    <div className="tenant__content">
                      <h5 className="brand_title">
                        <Link to="/tenants">{v.nama_brand}</Link>
                      </h5>

                      <div className="brand__info__wrapper d-flex gap-3">
                        <div className="brand__logo">
                          <img
                            src={v.logo_url}
                            className="w-150"
                            alt="LogoBrand"
                          />
                        </div>

                        <div className="brand__info">
                          <p>{v.keterangan}</p>
                        </div>
                      </div>
                    </div>

                    <div className="brand__btn__wrapper mt-3 d-flex align-items-center justify-content-between">
                      <button className="tenant__more__btn d-flex align-items-center gap-1">
                        <a href="https://desty.page/onestreetfood">
                          <i class="ri-store-fill"> Order Food</i>
                        </a>
                      </button>

                      <span>
                        <Link to="/tenants">View Detail</Link>
                      </span>
                    </div>
                  </div>
                </Col>
              ))}
            </Slider>

            <Col lg="12 mt-5 mb-5">
              <div className="area__img__wrapper">
                <h2>AREA MIDDLE EAST</h2>
                <img
                  src={TimurTengah}
                  alt="Gambar Asia"
                  className="asia--img w-100 h-50"
                />
              </div>
            </Col>

            <Slider {...settings}>
              {dataMid?.tenants.map((v, idx) => (
                <Col lg="3" key={idx}>
                  <div className="single__list__card ">
                    <div className="tenant__img">
                      <img
                        src={v.image_url}
                        className="w-100"
                        alt="GambarTenant"
                      />
                    </div>

                    <div className="tenant__content">
                      <h5 className="brand_title">
                        <Link to="/tenants">{v.nama_brand}</Link>
                      </h5>

                      <div className="brand__info__wrapper d-flex gap-3">
                        <div className="brand__logo">
                          <img
                            src={v.logo_url}
                            className="w-150"
                            alt="LogoBrand"
                          />
                        </div>

                        <div className="brand__info">
                          <p>{v.keterangan}</p>
                        </div>
                      </div>
                    </div>

                    <div className="brand__btn__wrapper mt-3 d-flex align-items-center justify-content-between">
                      <button className="tenant__more__btn d-flex align-items-center gap-1">
                        <a href="https://desty.page/onestreetfood">
                          <i class="ri-store-fill"> Order Food</i>
                        </a>
                      </button>

                      <span>
                        <Link to="/tenants">View Detail</Link>
                      </span>
                    </div>
                  </div>
                </Col>
              ))}
            </Slider>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Tenants;
