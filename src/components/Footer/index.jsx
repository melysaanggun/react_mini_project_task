import React from 'react'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom';

import "./footer.css"

/*Logo*/
import logo from "../../assets/images/logo_sec.png";

const COMPANY = [
  {
    display: 'About Us',
    url: '#'
  },
  {
    display: 'Contact Us',
    url: '#'
  },
  {
    display: 'Join as #OSFamily',
    url: '#'
  }
]

const SOCIAL__MEDIA = [
  {
    display: 'Instagram',
    url: '#'
  },
  {
    display: 'TikTok',
    url: '#'
  },
  {
    display: 'Facebook Page',
    url: '#'
  }
]

const INFO = [
  {
    display: 'Location',
    url: '#'
  },
  {
    display: 'Operational Hours',
    url: '#'
  },
  {
    display: 'Phone Number',
    url: '#'
  }
]

const Footer = () => {
  return ( 
  <>
  <footer className="footer">
    <Container>
      <Row>
        <Col lg='5' md='6' sm='6'>
          <div className="logo">
            <h2 className="d-flex gap-2 align-items-center">
            <div className="logo">
            <h2 className="d-flex gap-2 align-items-center">
              <img src={logo} alt="Logo" className="main_logo" /> 
              ONE STREET FOOD
            </h2>
            <p>Street Shop Space that will give you the best digital ordering food experience.</p>
            </div>
            </h2>
          </div>
        </Col>

        <Col lg='2' md='3' sm='6'>
          <h5>More Info</h5>
          <ListGroup>
            {
              COMPANY.map((item, idx) => (
                <ListGroupItem key={idx} className="list__item">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>

        <Col lg='2' md='3' sm='6'>
          <h5>Our Social Media</h5>
          <div className="socmed__links">
            <span><Link to=''><i class="ri-instagram-fill"></i></Link></span>
            <span><Link to=''><i class="ri-facebook-circle-fill"></i></Link></span>
            <span><Link to=''><i class="ri-file-music-fill"></i></Link></span>
          </div>
        </Col>

        <Col lg='2' md='3' sm='6' className='footer_col'>
          <h5>Company</h5>
          <ListGroup>
            {
              INFO.map((item, idx) => (
                <ListGroupItem key={idx} className="list__item">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>

        <Col lg='12' className='mt-4 text-center'>
          <p className='copyright'>Copyrights 2022, Developed by Ohana. All Rights Reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
  </>
  )
}

export default Footer