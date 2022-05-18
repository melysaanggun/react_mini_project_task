import React, { useState, useEffect } from "react";
import HeaderAdmin from "../../HeaderAdmin";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import "./update-tenants.css";
import Swal from "sweetalert2";
/**Query */
import { useMutation, useQuery } from "@apollo/client";
import {
  UPDATE_TENANT_BY_ID,
  GET_ALL_TENANTS,
  GET_TENANT_BY_ID,
} from "../../../GraphQl/Tenants/queries";
import LoadingSvg from "../../LoadingSvg";

const UpdateTenants = () => {
  const { id } = useParams();

  const { data: dataTenantbyId, loading: loadingGet } = useQuery(
    GET_TENANT_BY_ID,
    {
      variables: { id: id },
    }
  );

  const [updateForm, { data, loading: loadingUpdate }] = useMutation(
    UPDATE_TENANT_BY_ID,
    {
      refetchQueries: [GET_ALL_TENANTS],
      onCompleted: (data) => {
        Swal.fire({
          title: "Success!",
          text: "Do you want to continue",
          icon: "success",
        });
      },
    }
  );

  if (loadingUpdate) {
    <LoadingSvg/>
  }

  const [baseImage, setBaseImage] = useState("");
  const [baseImage2, setBaseImage2] = useState("");

  const dataKosong = {
    namaBrand: "",
    fotoOutlet: "",
    fotoLogo: "",
    keterangan: "",
    tipe: "",
    area: "",
    kategori: "",
  };

  const dataUpdate = {
    namaBrand: dataTenantbyId?.tenants_by_pk.nama_brand,
    fotoOutlet: dataTenantbyId?.tenants_by_pk.image_url,
    fotoLogo: dataTenantbyId?.tenants_by_pk.logo_url,
    keterangan: dataTenantbyId?.tenants_by_pk.keterangan,
    tipe: dataTenantbyId?.tenants_by_pk.tipe,
    area: dataTenantbyId?.tenants_by_pk.area,
    kategori: dataTenantbyId?.tenants_by_pk.kategori,
  };

  useEffect(() => {
    if (!loadingGet && dataTenantbyId) {
      setInputs(dataUpdate);
    }
  }, [loadingGet, dataTenantbyId]);

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
    console.log("Foto Outlet", base64);
  };

  const uploadFile2 = async (e) => {
    const file = e.target.files[0];
    const base64_2 = await convertBase64(file);
    setBaseImage2(base64_2);
    console.log("Foto Logo", base64_2);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    updateForm({
      variables: {
        id: id,
        nama_brand: inputs.namaBrand,
        image_url: baseImage,
        keterangan: inputs.keterangan,
        tipe: inputs.tipe,
        area: inputs.area,
        kategori: inputs.kategori,
        logo_url: baseImage2,
      },
    });
    console.log(id);
    setInputs(dataKosong);
    setBaseImage("");
    setBaseImage2("");
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
        <h1 className="page__title">EDIT TENANT</h1>
        <div className="add__tenant__container">
          <Row>
            <Col lg="3" md="4" sm="6">
              <div className="foto__outlet">
                <h5>Foto Outlet</h5>
                <img
                  src={dataTenantbyId?.tenants_by_pk.image_url}
                  alt="GambarOutlet"
                />
              </div>
            </Col>

            <Col lg="9" md="8" sm="6">
              <div className="create__item">
                <form onSubmit={onSubmitForm}>
                  <div className="form__input">
                    <label htmlFor="">Nama Brand</label>
                    <input
                      type="text"
                      name="namaBrand"
                      placeholder="Masukkan nama brand"
                      className="upload__input"
                      value={inputs.namaBrand}
                      onChange={handleInput}
                    />
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <div className="form__input">
                      <label htmlFor="">Foto Outlet</label>
                      <input
                        type="file"
                        name="fotoOutlet"
                        className="upload__input__file"
                        onChange={(e) => {
                          uploadFile(e);
                        }}
                      />
                    </div>
                    <div className="form__input">
                      <label htmlFor="">Foto Logo</label>
                      <input
                        type="file"
                        name="fotoLogo"
                        className="upload__input__file"
                        onChange={(e) => {
                          uploadFile2(e);
                        }}
                      />
                    </div>
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Keterangan</label>
                    <textarea
                      name="keterangan"
                      rows="10"
                      placeholder="Masukkan keterangan outlet"
                      onChange={handleInput}
                      value={inputs.keterangan}
                    ></textarea>
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Tipe Tenant</label>
                    <input
                      type="text"
                      name="tipe"
                      placeholder="Masukkan tipe tenant"
                      className="upload__input"
                      onChange={handleInput}
                      value={inputs.tipe}
                    />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Area Tenant</label>
                    <input
                      type="text"
                      name="area"
                      placeholder="Masukkan area tenant"
                      className="upload__input"
                      onChange={handleInput}
                      value={inputs.area}
                    />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Kategori</label>
                    <input
                      type="text"
                      name="kategori"
                      placeholder="Masukkan kategori makanan atau minuman"
                      className="upload__input"
                      onChange={handleInput}
                      value={inputs.kategori}
                    />
                  </div>

                  <button type="submit" className="submit__btn">
                    Update
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

export default UpdateTenants;
