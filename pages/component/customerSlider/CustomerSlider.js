import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper";
import Image from 'next/image';

const CustomerSlider = () => {
    return (
        <div className={'border-t-[3px] border-active-color'}>
            <Swiper style={{ backgroundImage: "linear-gradient(to right, rgb(223 225 241 / 13%) 0%, white 100%)" }}
                slidesPerView={12}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper w-[100%]"
            >
                <SwiperSlide><img className='flex justify-center items-center' src="/customer-logo/LOGO MOSHTARI-01-2022-02-27-09-35-52.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='flex justify-center items-center' src="/customer-logo/LOGO MOSHTARI-03-2022-02-24-17-20-13.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='flex justify-center items-center' src="/customer-logo/LOGO MOSHTARI-03-2022-02-24-17-20-13.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='flex justify-center items-center' src="/customer-logo/LOGO MOSHTARI-03-2022-02-24-17-20-13.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='flex justify-center items-center' src="/customer-logo/LOGO MOSHTARI-03-2022-02-24-17-20-13.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='flex justify-center items-center' src="/customer-logo/LOGO MOSHTARI-03-2022-02-24-17-20-13.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='flex justify-center items-center' src="/customer-logo/LOGO MOSHTARI-03-2022-02-24-17-20-13.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='flex justify-center items-center' src="/customer-logo/LOGO MOSHTARI-04-2022-02-24-17-21-10 (1).png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='flex justify-center items-center' src="/customer-logo/LOGO MOSHTARI-09-2022-02-27-09-41-16.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='flex justify-center items-center' src="/customer-logo/Sizpack_Amoon-01-01-2022-04-21-16-46-05.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='flex justify-center items-center' src="/customer-logo/Sizpack_Amoon-01-01-2022-04-21-16-46-05.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='flex justify-center items-center' src="/customer-logo/Sizpack_Amoon-01-01-2022-04-21-16-46-05.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='flex justify-center items-center' src="/customer-logo/Sizpack_Amoon-01-01-2022-04-21-16-46-05.png" alt="" /></SwiperSlide>
            </Swiper>
        </div >
    );
};

export default CustomerSlider;