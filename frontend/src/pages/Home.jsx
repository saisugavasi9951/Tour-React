import React from "react";
import '../styles/home.css';
import { Container, Row, Col } from "reactstrap";

import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';

import Subtitle from "../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServicesList from "../services/ServicesList";

import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonial from "../components/Testimonial/Testimonial";
import NewsLetter from "../shared/NewsLetter";

const Home = () => {
    return <>
         {/* Hero Section */}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero__content">
                            <div className="hero__subtitle d-flex align-items-center">
                                <Subtitle subtitle={'Know Before You GO'} />
                                <img src={worldImg} alt="" />
                            </div>
                            <h1>Traveling opens the door to creating {""}
                                <span className="highlight">memories</span>
                            </h1>
                            <p>
                            Obsessed with the idea of empowering the travelers with best vacation deals,
                            Travel World is a product of Holiday Travel World Pvt. Ltd. We are an online
                            marketplace that connects a traveler to multiple local travel agents. 
                            </p>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box">
                            <img src={heroImg} alt="Hero" />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-4">
                            <video src={heroVideo} controls />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-5">
                            <img src={heroImg02} alt="Hero" />
                        </div>
                    </Col>
                    <SearchBar />
                </Row>
            </Container>
        </section>

        {/* Services Section */}
        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                        <h5 className="services__subtitle">What we serve</h5>
                        <h2 className="services__title">We offer our best services</h2>
                    </Col>
                    <ServicesList />
                </Row>
            </Container>
        </section>

        {/* Featured Section */}
        <section>
            <Container>
                <Row>
                    <Col lg='12' className="mb-5">
                        <Subtitle subtitle={'Explore'} />
                        <h2 className="featured__tour-title">Our Featured Tours</h2>
                    </Col>
                    <FeaturedTourList />
                </Row>
            </Container>
        </section>

        {/* Experiences Section */}
        <section>
            <Container>
                <Row>
                    <Col lg='6' className="mb-5">
                        <div className="experience__content">
                            <Subtitle subtitle={'Experience'} />
                            <h2 className="featured__tour-title">With our all experience <br /> we will serve you</h2>
                            <p>we take pride in the depth and breadth of our experiences,<br />
                                and we are excited to bring this wealth of knowledge to your service.</p>
                        </div>
                        <div className="counter__wrapper d-flex align-items-center gap-5">
                            <div className="counter__box">
                                <span>12k+</span>
                                <h6>Successful Trip</h6>
                            </div>
                            <div className="counter__box">
                                <span>2k+</span>
                                <h6>Regular clients</h6>
                            </div>
                            <div className="counter__box">
                                <span>15+</span>
                                <h6>Years experience</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="experience__img">
                            <img src={experienceImg} alt="Experience Logo" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        {/* Gallery Section */}
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Subtitle subtitle={'Gallery'} />
                        <h2 className="gallery__title">visit our customers tour gallery</h2>
                    </Col>
                    <Col lg='12'>
                        <MasonryImagesGallery />    
                    </Col>
                </Row>
            </Container>
        </section>

        {/* Testimonial Section */}
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Subtitle subtitle={'Customers Love'} />
                        <h2 className="testimonial__title">What our customers say about us</h2>
                    </Col>
                    <Col>
                        <Testimonial />
                    </Col>
                </Row>
            </Container>
        </section>
        <NewsLetter />
    </>
}

export default Home;