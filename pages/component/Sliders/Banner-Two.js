import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import Img2 from "../../../src/Img/slider/home_hero.jpeg"

// // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from 'next/image';
function scrollWin() {
    let height = window.innerHeight;

    window.scrollTo(0, height);
  }

const BannerTwo = () => {
    return (
        <div>
            <Swiper style={{ cursor: "pointer", height: "100vh" }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,

                }}
                loop={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {/* slides */}
                <SwiperSlide><Image src={Img2} />
                    {/* navigation */}
                    {/* <Header /> */}
                    {/* site description */}
                    <div className='absolute z-10 top-[30%]  flex justify-center items-start flex-col w-[100%]   '>
                        <div className='w-3/6  p-[20px] '>
                            <h1 className='text-[30px] w-max  bg-[#ffffffb4] rounded-[10px] p-[20px] animate__animated animate__backInRight text-[#000000d3]  ' > سامانه آنلاین چاپ و بسته بندی </h1>
                            <p className='animate__animated  animate__bounceInRight bg-[#ffffffb4] p-[20px] rounded-[10px] my-[5px] text-[#000000d3]'>سیزپک ، استارتاپی تخصصی در عرصه ی بسته بندی و چاپ است که با هدف رفع چالش های موجود، امکان دسترسی آسان و جامع تولیدکننده ایرانی به خدمات صنعت چاپ و بسته بندی را به صورت آنلاین فراهم می آو </p>
                            <button className='p-[10px] w-[140px]  rounded-3xl mx-[5px] bg-[#ffffffb4]  text-[#000000d3] animate__animated animate__fadeIn'>ورود </button>
                            <button className='p-[10px] w-[140px]  rounded-3xl mx-[5px] bg-[#ffffffb4] text-[#000000d3] animate__animated  animate__fadeIn'>ثبت نام</button>
                        </div>

                    </div>
                    <div className='absolute   z-10 bottom-[30px]  flex justify-center items-start  w-[100%]   '>
                        <button onClick={scrollWin} className='slider-Full-Btn' > <BsFillArrowDownCircleFill style={{ fill: "white", fontSize: "40px"}} />
                            <div  className=' slider-Full-Btn-Fade'>

                            </div>
                        </button>
                    </div>
                </SwiperSlide>


            </Swiper>

        </div>

    );
};

export default BannerTwo;