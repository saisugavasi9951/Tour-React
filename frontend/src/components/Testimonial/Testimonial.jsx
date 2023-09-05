import React from "react";
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonial = () => {

    const settings = {
        dots:true,
        Infinity:true,
        autoplay:true,
        speed:1000,
        swipeToSlide: true,
        autoPlaySpeed: 2000,
        slideToShow: 3,
        contro: true,

        responsive:[
            {
                breakpoints:992,
                settings: {
                    slideToShow:2,
                    slideToScroll: 1,
                    Infinity: true,
                    dots:true,
                },
            },
            {
                breakpoints:576,
                settings: {
                    slideToShow:1,
                    slideToScroll: 1,
                },
            },
        ]
    }

    return (
        <Slider {...settings }>
            <div className="testimonial py-4 px-3">
                <p> We had an amazing experience overall and the full credit goes to our tour agent Vasant and our travel agent Shanil. Vasant was very informative, amazing, caring, proactive, and professional, he 
                    ensured we got the best recommendations and deals and also helped us at every stage 
                    of travel right from deciding tour itinerary to finishing the trip.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className="w-25 h-25 rounded-2" alt="Testimonial" />
                    <div>
                        <h6 className="mb-0 mt-3">John Doe</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p> It’s was a good experience. Really Happy about the trip and a big thanks to Piyush Saxena. He was really
                    working for us for our itinerary and gave a good itinerary in the short span of time his effort for
                    our trip was appreciatable. Thank you so much and planning for upcoming trips with travel world</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt="Testimonial" />
                    <div>
                        <h6 className="mb-0 mt-3">Lia Franklin</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>Over It was a good experience. We had booked most of trip on private basis and cab were on time.
                    City toor is waste of time. City toor was suggested on SIC basis and its just like sit in bus roam on road and come back to hotel</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className="w-25 h-25 rounded-2" alt="Testimonial" />
                    <div>
                        <h6 className="mb-0 mt-3">Devid Ratod</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Testimonial;