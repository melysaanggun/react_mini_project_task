import React from "react";

/* React Strap */
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

/**Styles */
import LoadingSvg from "../../LoadingSvg";
import "./list-tenant.css";

/**Query */
import { useQuery } from "@apollo/client";
import { GET_ALL_TENANTS } from "../../../GraphQl/Tenants/queries";

const ListTenant = () => {
  const { data, loading, error } = useQuery(GET_ALL_TENANTS);

  if (error) {
    console.log(error);
    return null;
  }

  if (loading) {
    return <LoadingSvg />;
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-3">
            <div className="list__tenant__top d-flex align-items-center justify-content-between">
              <h3>OUR TENANTS</h3>
              <span>
                <Link to="/tenants">Explore More</Link>
              </span>
            </div>
          </Col>

          {data?.tenants.slice(0, 4).map((v, idx) => (
            <Col lg="3" key={idx}>
              <div className="single__list__card">
                <div className="tenant__img">
                  <img src={v.image_url} className="w-100" alt="GambarTenant" />
                </div>

                <div className="tenant__content">
                  <h5 className="brand_title">
                    <Link to="/tenants">{v.nama_brand}</Link>
                  </h5>

                  <div className="brand__info__wrapper d-flex gap-3">
                    <div className="brand__logo">
                      <img src={v.logo_url} className="w-150" alt="LogoBrand" />
                    </div>

                    <div className="brand__info">
                      <h6>Area : {v.area}</h6>
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
        </Row>
      </Container>
    </section>
  );
};

export default ListTenant;
