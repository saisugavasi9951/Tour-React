import React from "react";
import ServicesCard from "./ServicesCard";
import {Col} from 'reactstrap';


import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import cusomizationImg from '../assets/images/customization.png';

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        des: "Discover Your Journey: Unveiling Unforgettable Adventures"
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        des: "Discover Your Journey: Unveiling Unforgettable Adventures"
    },
    {
        imgUrl: cusomizationImg,
        title: "Cusomization",
        des: "Discover Your Journey: Unveiling Unforgettable Adventures"
    },
]

const ServicesList = () => {
    return(
        <>
            {servicesData.map((item, index) => (
                <Col lg='3' key={index}>
                    <ServicesCard item={item}/>
                </Col>
            )
            )}
        </>
    );
}

export default ServicesList;