import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import Img1 from "../../../src/Img/slider/Heder-and-bilboerd---box.png"
import Img2 from "../../../src/Img/slider/Heder-and-bilboerd---box.png";
import Img3 from "../../../src/Img/slider/Heder-and-bilboerd---label.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from 'next/image';
const BannerOne = () => {
    return (
        <Swiper style={{cursor:"pointer"}}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
                dynamicBullets: true,

            }}
            loop={true}

            navigation={true}
            modules={[ Pagination, Navigation]}
            className="mySwiper"
        >
            {/* <SwiperSlide><Image src={Img1} /></SwiperSlide> */}
            <SwiperSlide><Image src={Img2}  /></SwiperSlide>
            <SwiperSlide><Image src={Img3} /></SwiperSlide>

        </Swiper>
    );
};

export default BannerOne;