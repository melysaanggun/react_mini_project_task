import React from 'react'

/**React Strap */
import {Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';

/**S6yle */
import "./mainsection.css"
import racoos from "../../assets/images/Racoos.png"


const MainSection = () => {
  return (
    <section className="main__section">
        <Container className='main_content'>
            <Row>
                <Col lg='6' md='6'>
                    <div className="main__content">
                        <h4 className='line1_title'>NUMBER <span>#1</span></h4>
                        <h1>DIGITAL STREET FOOD</h1>
                        <h4>IN TOWN</h4>
                        <div className="main__btn d-flex align-items-center gap-3">
                        <button>
                            <Link to='/about'>GET TO KNOW US!</Link>
                        </button>
                        <button>
                            <a href='https://desty.page/onestreetfood'>ORDER FOOD BY ONLINE</a>
                        </button>
                        </div>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className="racoos_img">
                        <img src={racoos} alt="" className='main__img' />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default MainSection