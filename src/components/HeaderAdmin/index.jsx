import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

import logo from "../../assets/images/logo_sec.png";
import "./header-admin.css"

const HeaderAdmin = () => {
  const [show, setShow] = useState(false);

  const handleClick = () =>{
    localStorage.clear();
  }

  return (
    <>
      <div className={`header-admin ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <i class="ri-menu-line"></i>
        </div>
      </div>

      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div className="nav__logo d-flex">
            <img src={logo} alt="GambarLogo" className="nav__logo__img"/>
            <span className="nav-logo-name">OSF</span>
          </div>

          <div className="nav_list">
            <Link to="/tenants-data" className="nav_link active-admin">
              <i className="ri-store-2-fill nav-logo-icon"></i>
              <span className="nav-link-name">Tenants</span>
            </Link>
            <Link to="/events-data" className="nav_link">
              <i className="ri-calendar-event-line"></i>
              <span className="nav-link-name">Events</span>
            </Link>
          </div>
          
          <Link to="/login/admin" className="nav_link">
            <button onClick={handleClick} className="logout__btn">
            <i className="ri-logout-box-fill"></i>
            <span className="nav-link-logout">LOGOUT</span>
            </button>
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default HeaderAdmin;
