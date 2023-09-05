import React from "react";
import './services-card.css';

const ServicesCard = ({item}) => {
    const {imgUrl, title, des} = item;
    return(
        <div className="service__item">
            <div className="service__img">
                <img src={imgUrl} alt="Card Imgae"/>
            </div>
            <h5>{title}</h5>
            <p>{des}</p>
        </div>
    )
}

export default ServicesCard;