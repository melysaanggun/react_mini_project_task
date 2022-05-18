import React from "react";

/**React Strap */
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

/**Styles */
import "./header-theme.css";

const HeaderTheme = ({ title }) => {
  return (
    <div className="header__theme">
      <Container className="text-center">
        <h2>{title}</h2>
      </Container>
    </div>
  );
};

export default HeaderTheme;
