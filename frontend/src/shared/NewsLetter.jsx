import React from "react";
import './news-letter.css';
import maleGuide from '../assets/images/male-tourist.png';

import { Container, Row, Col } from "reactstrap";

const NewsLetter = () => {
    return(
        <section className="newsletter">
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="newsletter__content">
                            <h2>Subscribe now to get useful traveling information.</h2>
                            <div className="newsletter__input">
                                <input type="email"     placeholder="Enter You Email" />
                                <button className="btn newsletter__btn">Subscribe</button>
                            </div>
                            <p>Simply stating that your tours are “heaps of fun” may work for a few people,
                                but proving and showing evidence that your activities are heaps more fun than your competitors will most likely capture bookings.</p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="newsletter__img">
                            <img src={maleGuide} alt="Guide" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default NewsLetter;