import React, {useState} from "react";

/**React Strap */
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

/**Styles */
import "./admin.css";

/**Router */
import { Routes, Route, Navigate } from 'react-router-dom';

import HeaderAdmin from "../../components/HeaderAdmin";

const Admin = () => {
  const[show,setShow] = useState(false);

  return (
    <div className={show ? 'space-toggle' : null}>
      <HeaderAdmin />

      <div className="content">
        <h1>Test</h1>
      </div>
      </div>
  );
};

export default Admin;
