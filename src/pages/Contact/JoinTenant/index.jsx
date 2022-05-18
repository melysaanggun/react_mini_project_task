import React from "react";

/**Styles */
import "./join-tenant.css";

/**Components */
import HeaderTheme from "../../../components/ui/HeaderTheme";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

/**React Strap */
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

/**Hook */
import { useState } from "react";

/**Query*/
import { gql, useMutation } from "@apollo/client";
const AddToTenantForm = gql`
  mutation MyMutation($object: tenants_waiting_list_insert_input!) {
    insert_tenants_waiting_list_one(object: $object) {
      id
    }
  }
`;

const JoinTenant = () => {
  const [inputs, setInputs] = useState([
    {
      type: "text",
      placeholder: "Masukkan nama owner",
      value: "",
    },
    {
      type: "text",
      placeholder: "Masukkan nama toko/brand",
      value: "",
    },
    {
      type: "text",
      placeholder: "Masukkan kategori menu brand",
      value: "",
    },
    {
      type: "textarea",
      placeholder: "Masukkan deskripsi brand",
      value: "",
    },
    {
      type: "text",
      placeholder: "Masukkan sosial media brand",
      value: "",
    },
    {
      type: "text",
      placeholder: "Masukkan nomor yang dapat dihubungi",
      value: "",
    },
    {
      type: "text",
      placeholder: "Masukkan email",
      value: "",
    },
  ]);

  const [addForm, { loading: loadingAdd }] = useMutation(AddToTenantForm);

  const handleInput = (value, inputIdx) => {
    const newInputs = { ...inputs[inputIdx], value };
    inputs[inputIdx] = newInputs;
    setInputs([...inputs]);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    addForm({
      variables: {
        object: {
          nama_owner: inputs[0].value,
          nama_brand: inputs[1].value,
          kategori: inputs[2].value,
          deskripsi_brand: inputs[3].value,
          sosmed_brand: inputs[4].value,
          no_wa: inputs[5].value,
          email: inputs[6].value,
        },
      },
    });
    setInputs(
        [
            {
              type: "text",
              placeholder: "Masukkan nama owner",
              value: "",
            },
            {
              type: "text",
              placeholder: "Masukkan nama toko/brand",
              value: "",
            },
            {
              type: "text",
              placeholder: "Masukkan kategori menu brand",
              value: "",
            },
            {
              type: "textarea",
              placeholder: "Masukkan deskripsi brand",
              value: "",
            },
            {
              type: "text",
              placeholder: "Masukkan sosial media brand",
              value: "",
            },
            {
              type: "text",
              placeholder: "Masukkan nomor yang dapat dihubungi",
              value: "",
            },
            {
              type: "text",
              placeholder: "Masukkan email",
              value: "",
            },
          ]
    );
  };

  return (
    <>
    <Header/>
      <HeaderTheme title={"JOIN AS TENANT"} />
      <section>
        <Container>
          <Row>
            <Col
              lg="6"
              md="6"
              className="join-tenant-header m-auto text-center"
            >
              <h2>JOIN AS TENANT</h2>
              <h6>Aloha #OSFamily</h6>
              <p>
                Terima kasih sudah tertarik untuk bergabung di OSF Tenant{" "}
                <span>Batch 3</span> 2022. Saat ini space tenant sudah{" "}
                <span>full booked</span> secara keseluruhan. Jika Bapak/Ibu
                berkenan, maka akan dimasukkan ke waiting list dengan mengisi
                form berikut.
              </p>
              <div className="join__tenant__form mt-4">
                <form onSubmit={onSubmitForm}>
                  {inputs.map((input, idx) => (
                    <div className="form__input" key={idx}>
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        value={input.value}
                        onChange={(e) => handleInput(e.target.value, idx)}
                      />
                    </div>
                  ))}
                  <button className="submit__btn">Submit</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </>
  );
};

export default JoinTenant;
