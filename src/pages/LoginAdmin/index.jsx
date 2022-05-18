import React from "react";

/* Styles */
import "./login-admin.css";
import LoadingSvg from "../../components/LoadingSvg";
import Swal from "sweetalert2";
import Racoos from "../../assets/images/Racoos_Please.png"

/* React Strap */
import { Container, Row, Col } from "reactstrap";

/* Hooks */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* Query */
import { useLazyQuery } from "@apollo/client";
import { GET_ADMIN } from "../../GraphQl/Admin/queries";

const LoginAdmin = () => {
  const [getAdminUser, { data, loading }] = useLazyQuery(GET_ADMIN, {
    onCompleted: (data) => {
      const token = JSON.stringify({
        id: data.admin_user[0].id,
        email: data.admin_user[0].email,
      });
      Swal.fire({
        title: "LOGIN SUCCESS!",
        text: "Please select the data at the sidebar to continue",
        icon: "success",
      });
      localStorage.setItem("token", token);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  let navigate = useNavigate();

  const [inputs, setInputs] = useState([
    {
      label: "Email",
      type: "text",
      value: "",
    },
    {
      label: "Password",
      type: "password",
      value: "",
    },
  ]);

  useEffect(() => {
    if (data?.admin_user.length === 1) {
      console.log("data", data);
      return navigate("/login/admin/admin-page");
    }
  }, [data]);

  const handleInput = (value, inputIdx) => {
    const newInputs = { ...inputs[inputIdx], value };
    inputs[inputIdx] = newInputs;
    setInputs([...inputs]);
  };

  const handleSubmit = () => {
    getAdminUser({
      variables: {
        _eq: inputs[0].value,
      },
    });
  };

  if (loading) {
    return <LoadingSvg />;
  }

  return (
    <Container>
      <Row>
        <Col lg="6" className="login__wrapper">
          <form onSubmit={handleSubmit}>
            <img src={Racoos} alt="GambarRacoos" />
            <h5>Aloha, #OSFamily! Please Login First</h5>
            {inputs.map((input, idx) => (
              <div className="form__input" key={idx}>
                <label>{input.label}</label>
                <input
                  type={input.type}
                  value={input.value}
                  onChange={(e) => handleInput(e.target.value, idx)}
                />
              </div>
            ))}
            {data && <h3>Gagal</h3>}
            <button type="submit" className="submit__btn">
              Submit
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginAdmin;
