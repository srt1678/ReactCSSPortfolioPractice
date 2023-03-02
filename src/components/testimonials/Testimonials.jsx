import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
    {
        avatar: AVTR1,
        name: "tina Snow",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptates ducimus. Temporibus error, quas doloribus non tenetur, ab nisi earum quis illo placeat voluptatum pariatur commodi necessitatibus provident enim impedit et at autem eaque.",
    },
    {
        avatar: AVTR2,
        name: "Shatta Wale",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptates ducimus. Temporibus error, quas doloribus non tenetur, ab nisi earum quis illo placeat voluptatum pariatur commodi necessitatibus provident enim impedit et at autem eaque.",
    },
    {
        avatar: AVTR3,
        name: "Kwame Despite",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptates ducimus. Temporibus error, quas doloribus non tenetur, ab nisi earum quis illo placeat voluptatum pariatur commodi necessitatibus provident enim impedit et at autem eaque.",
    },
    {
        avatar: AVTR4,
        name: "Temp Smith",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat atque.",
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper
                className="container testimonials__container"
                modules={[ Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {data.map(({ avatar, name, review }, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonial">
                            <div className="client__avatar">
                                <img src={avatar} />
                            </div>
                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">{review}</small>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials;
