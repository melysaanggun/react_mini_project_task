import React, { useState, useEffect } from "react";
import HeaderAdmin from "../../HeaderAdmin";
import { Container, Row, Col } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import "./update-event.css";
import Swal from "sweetalert2";
/**Query */
import { gql, useMutation, useQuery } from "@apollo/client";
const updateEventById = gql`
  mutation MyMutation(
    $foto_event: String!
    $id: Int!
    $keterangan: String!
    $nama_event: String!
    $tanggal: String!
  ) {
    update_events(
      where: { id: { _eq: $id } }
      _set: {
        foto_event: $foto_event
        id: $id
        keterangan: $keterangan
        nama_event: $nama_event
        tanggal: $tanggal
      }
    ) {
      returning {
        foto_event
        id
        keterangan
        nama_event
        tanggal
      }
    }
  }
`;

const getEventById = gql`
  query MyQuery($id: Int!) {
    events_by_pk(id: $id) {
      foto_event
      id
      keterangan
      nama_event
      tanggal
    }
  }
`;

const getAllEvent = gql`
  query MyQuery {
    events {
      foto_event
      keterangan
      nama_event
      tanggal
    }
  }
`;

const UpdateEvents = () => {
  const { id } = useParams();

  const { data: dataEventbyId, loading: loadingGet } = useQuery(getEventById, {
    variables: { id: id },
  });

  const [updateForm, { data, loading: loadingUpdate }] = useMutation(
    updateEventById,
    {
      refetchQueries: [getAllEvent],
      onCompleted: (data) => {
        Swal.fire({
          title: "Success!",
          text: "Do you want to continue",
          icon: "success",
        });
      },
    }
  );

  const [baseImage, setBaseImage] = useState("");

  const dataKosong = {
    namaEvent: "",
    fotoEvent: "",
    tanggal: "",
    keterangan: "",
  };

  const dataUpdate = {
    namaEvent: dataEventbyId?.events_by_pk.nama_event,
    fotoEvent: dataEventbyId?.events_by_pk.foto_event,
    tanggal: dataEventbyId?.events_by_pk.tanggal,
    keterangan: dataEventbyId?.events_by_pk.keterangan,
  };

  useEffect(() => {
    if (!loadingGet && dataEventbyId) {
      setInputs(dataUpdate);
    }
    console.log(id);
  }, [loadingGet, dataEventbyId]);

  const [inputs, setInputs] = useState(dataKosong);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const uploadFile = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    console.log("Foto Event", base64);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    updateForm({
      variables: {
        id: id,
        nama_event: inputs.namaEvent,
        foto_event: baseImage,
        keterangan: inputs.keterangan,
        tanggal: inputs.tanggal,
      },
    });
    setInputs(dataKosong);
    setBaseImage("");
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <>
      <HeaderAdmin />
      <Container>
        <h1 className="page__title">UPDATE EVENT</h1>
        <div className="add__tenant__container">
          <Row>
            <Col lg="3" md="4" sm="6">
              <h5>Foto Event</h5>
              <img
                  src={dataEventbyId?.events_by_pk.foto_event}
                  alt="GambarEvent"
                />
            </Col>

            <Col lg="9" md="8" sm="6">
              <div className="create__item">
                <form onSubmit={onSubmitForm}>
                  <div className="form__input">
                    <label htmlFor="">Nama Event</label>
                    <input
                      type="text"
                      name="namaEvent"
                      placeholder="Masukkan nama event"
                      className="upload__input"
                      value={inputs.namaEvent}
                      onChange={handleInput}
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Foto Event</label>
                    <input
                      type="file"
                      name="fotoEvent"
                      className="upload__input__file"
                      onChange={(e) => {
                        uploadFile(e);
                      }}
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Tanggal</label>
                    <input
                      type="text"
                      name="tanggal"
                      placeholder="Masukkan tanggal berlangsungnya event"
                      className="upload__input"
                      onChange={handleInput}
                      value={inputs.tanggal}
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Keterangan</label>
                    <textarea
                      name="keterangan"
                      rows="10"
                      placeholder="Masukkan keterangan event"
                      onChange={handleInput}
                      value={inputs.keterangan}
                    ></textarea>
                  </div>

                  <button type="submit" className="submit__btn">
                  <Link to="/events-data">
                    Update
                    </Link>
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default UpdateEvents;
