// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";




// import required modules
import { Pagination } from "swiper";
import './testimonials.css'
import data from './data'
import Testimonial from "./Testimonial";

function Testimonials() {
    return (
        <section id='testimonials'>
            <h2>What my Clients Say</h2>
            <p>These are unbiased testimonials from some of my clients</p>
            <div className="container">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        601: { slidesPerView: 2 },
                        1025: { slidesPerView: 3 }
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    autoplay={true}
                    className="mySwiper"
                >
                    {
                        data.map(testimonial => (
                            <SwiperSlide key={testimonial.id}>
                                <Testimonial testimonial={testimonial} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section >
    )
}

export default Testimonials




