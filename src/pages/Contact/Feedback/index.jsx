import React from "react";

/**Styles */
import "./feedback.css";

/**Components */
import HeaderTheme from "../../../components/ui/HeaderTheme";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

/**React Strap */
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

/**Hook */
import { useState } from "react";

/**Query*/
import { gql, useMutation } from "@apollo/client";
const AddToFeedbackForm = gql`
  mutation MyMutation($object: feedback_list_insert_input!) {
    insert_feedback_list_one(object: $object) {
      id
    }
  }
`;

const Feedback = () => {
  const [inputs, setInputs] = useState([
    {
      type: "text",
      placeholder: "Masukkan nama Anda",
      value: "",
    },
    {
      type: "text",
      placeholder: "Darimanakah Anda mengetahui OSF",
      value: "",
    },
    {
      type: "text",
      placeholder: "Masukkan kesan dan pesan Anda terhadap OSF",
      value: "",
    },
    {
      type: "textarea",
      placeholder: "Masukkan kritik dan saran untuk OSF",
      value: "",
    },
  ]);

  const [addForm, { loading: loadingAdd }] = useMutation(AddToFeedbackForm);

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
          nama: inputs[0].value,
          info: inputs[1].value,
          kesan: inputs[2].value,
          kritik: inputs[3].value,
        },
      },
    });
    setInputs([
      {
        type: "text",
        placeholder: "Masukkan nama Anda",
        value: "",
      },
      {
        type: "text",
        placeholder: "Darimanakah Anda mengetahui OSF",
        value: "",
      },
      {
        type: "text",
        placeholder: "Masukkan kesan dan pesan Anda terhadap OSF",
        value: "",
      },
      {
        type: "textarea",
        placeholder: "Masukkan kritik dan saran untuk OSF",
        value: "",
      },
    ]);
  };

  return (
    <>
      <Header />
      <HeaderTheme title={"GIVE US FEEDBACK"} />
      <section>
        <Container>
          <Row>
            <Col
              lg="6"
              md="6"
              className="join-tenant-header m-auto text-center"
            >
              <h2>WE HEAR YOU!</h2>
              <h6>Aloha #OSFamily</h6>
              <p>
                Kami sangat menerima kritikan dan saran untuk pengembangan ke
                depannya. Mohon berikan kritik dan saran Anda di form berikut.
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
      <Footer />
    </>
  );
};

export default Feedback;
