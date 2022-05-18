import React from 'react'

/**Styles */
import "./event-collab.css"

/**Components */
import HeaderTheme from "../../../components/ui/HeaderTheme";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

/**React Strap */
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

/**Hook */
import { useState } from "react";

/**Query */
import { gql, useMutation } from '@apollo/client';
const addEventForm = gql`
mutation MyMutation($object: event_collab_list_insert_input!) {
    insert_event_collab_list_one(object: $object) {
      id
    }
  }  
`


const EventCollab = () => {
  
    const [inputs, setInputs] = useState([
        {
          type: "text",
          placeholder: "Masukkan nama event organizer",
          value: "",
        },
        {
          type: "text",
          placeholder: "Masukkan nama event yang ingin diajukan",
          value: "",
        },
        {
          type: "text",
          placeholder: "Masukkan deskripsi event",
          value: "",
        },
      ]);

      const [addForm, { loading: loadingAdd }] = useMutation(addEventForm);

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
              nama_eo: inputs[0].value,
              nama_event: inputs[1].value,
              deskripsi_event: inputs[2].value
            },
          },
        });
        setInputs([
          {
            type: "text",
            placeholder: "Masukkan nama event organizer",
            value: "",
          },
          {
            type: "text",
            placeholder: "Masukkan nama event yang ingin diajukan",
            value: "",
          },
          {
            type: "text",
            placeholder: "Masukkan deskripsi event",
            value: "",
          },
        ]);
        };


  return (
    <>
    <Header/>
      <HeaderTheme title={"EVENT COLLABORATION"} />
      <section>
        <Container>
          <Row>
            <Col
              lg="6"
              md="6"
              className="event__collab__header m-auto text-center"
            >
              <h2>EVENT COLLABORATION</h2>
              <h6>Aloha #OSFamily!</h6>
              <p>
                Terima kasih sudah tertarik untuk berkolaborasi dengan OSF dalam acara. 
                Silahkan mengisi form berikut untuk diajukan ke pihak management.
              </p>
              <div className="event__collab__form mt-4">
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
    </>
  )
};

export default EventCollab;