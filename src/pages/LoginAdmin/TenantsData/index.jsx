import React from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import "./tenants-data.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
/**Query */
import { gql, useQuery, useMutation } from "@apollo/client";
import Slider from "react-slick";
const getAllTenants = gql`
  query MyQuery {
    tenants {
      id
      image_url
      kategori
      keterangan
      nama_brand
      area
      logo_url
    }
  }
`;

const DeleteTenant = gql`
  mutation MyMutation($id: Int!) {
    delete_tenants_by_pk(id: $id) {
      id
    }
  }
`;

const TenantsData = () => {
  const { data, loading, error } = useQuery(getAllTenants);

  const [deleteTenant, { loading: loadingDelete }] = useMutation(DeleteTenant, {
    refetchQueries: [getAllTenants],
  });

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
  };

  const handleDelete = (idx) => {
    deleteTenant({
      variables: {
        id: idx,
      },
    });
  };

  return (
    <>
      <HeaderAdmin />
      <Container>
        <div className="content__tenants__data">
          <Row className="tenants__data__row">
            <Col lg="12">
              <div className="tenants__data__header d-flex align-items-center justify-content-between">
                <h1> Tenants Data </h1>
                <span className="add___tenant__btn">
                  <i class="ri-add-circle-fill"></i>
                  <Link to="/tenants-data/add-new-tenant">Add New Tenant</Link>
                </span>
              </div>
            </Col>

            <Slider {...settings}>
              {data?.tenants.map((v, idx) => (
                <Col lg="3" key={idx}>
                  <div className="single__list__card">
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
                          <h6>Area : {v.area}</h6>
                          <p>{v.keterangan}</p>
                        </div>
                      </div>
                    </div>

                    <div className="brand__btn__wrapper mt-3 d-flex align-items-center justify-content-between">
                      <button className="tenant__more__btn d-flex align-items-center gap-1">
                        <span>
                          <Link to={`/tenants-data/update-tenant-data/${v.id}`}>
                            Edit
                          </Link>
                        </span>
                      </button>

                      <button onClick={() => handleDelete(v.id)} className="delete__btn">
                        <Link to="/tenants-data">Delete</Link>
                      </button>
                    </div>
                  </div>
                </Col>
              ))}
            </Slider>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default TenantsData;
