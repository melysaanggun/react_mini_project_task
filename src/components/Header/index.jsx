import React from 'react'
import "./header.css"
import { Container } from 'reactstrap'

import { NavLink, Link } from 'react-router-dom'

/*Logo*/
import logo from "../../assets/images/logo.png";

const NAV_LINKS = [
  {
    display: 'Home',
    url: '/home'
  },
  {
    display: 'About Us',
    url: '/about'
  },
  {
    display: 'Our Tenants',
    url: '/tenants'
  },
  {
    display: 'Our Events',
    url: '/events'
  },
  {
    display: 'Contact Us',
    url: '/contact'
  },
]

const Header = () => {
  return (
    <div className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex gap-2 align-items-center">
              <img src={logo} alt="Logo" className="main_logo" /> 
              ONE STREET FOOD 
            </h2>
          </div>

          <div className="nav__menu">
            <ul className="nav__list">
            {
              NAV_LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink to={item.url} className= {navClass => navClass.isActive ? 'active' : '' }>{item.display}</NavLink>
                </li>
              ))
            }
              
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header