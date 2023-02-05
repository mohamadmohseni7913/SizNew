import React from 'react';
import { FiShoppingCart, FiUpload } from "react-icons/fi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { HiOutlineLocationMarker, HiOutlineInformationCircle } from "react-icons/hi";
import { BiSupport, BiExit } from "react-icons/bi";
import { VscPackage } from "react-icons/vsc";
import { BiUser } from "react-icons/bi";
import User from "../../../src/Img/icons-light/user-icon-L.svg"
import Home from "../../../src/Img/icons-light/home-icon-L.svg"
import Pack from "../../../src/Img/icons/pack-l.svg"
import Gallery from "../../../src/Img/icons-light/gallery-icon-L.svg"
import Support from "../../../src/Img/icons-light/support -black-L.svg"
import Image from 'next/image';
import Link from 'next/link';
import image from "../../../src/Img/icons-light/Logo Final SIZ-02.svg";



const Header = () => {
    // if (typeof window !== "undefined") {
    //     window.onscroll = function () { scrollFunction() };

    //     function scrollFunction() {
    //         if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //             document.getElementById("profile-Header").style.position="sticky"
    //             document.getElementById("profile-Header").style.top="0"
    //         } else {
    //             // document.getElementById("profile-Header").style.top = "0";

    //         }
    //     }
    // }

    return (
        <div id='profile-Header' className='profile-Header bg-[#414142be] px-[5%] text-white h-[80px] '>
            {/* user profile header info */}
            <div className='w-[20%] flex items-center  '>
                {/* <BiUser className='text-[50px] border-[1px] rounded-[50%] p-[5px]' />

                <div className='flex flex-col items-center justify-between'>
                    <span className='text-[14px] w-max'>محمد محسنی</span>
                    <span className='text-[12px] tracking-[2px]'>09338697097</span>
                </div> */}
                <Image src={image} width={"250px"} alt={"لوگو"} />


            </div>
            {/* user profile header links  */}
            <div className={"w-[70%] flex justify-center "}>
                <ul className={"w-6/6"}>
                    <li> <VscPackage /><a href="#">بسته های من</a></li>
                    <li> <FiShoppingCart /> <a href="#"> سفارش های من</a></li>
                    <li> <FiUpload /> <a href="#"> آپلود فایل چاپی</a></li>
                    <li> <AiOutlineDollarCircle /> <a href="#">گزارش مالی</a></li>
                    <li> <HiOutlineLocationMarker /> <a href="#">نشانی ها </a></li>
                    <li> <HiOutlineInformationCircle /><a href="#">اطلاعات حساب</a></li>
                    <li> <BiSupport /> <a href="#">پشتیبان </a></li>
                    <li> <BiExit /><a href="#">خروج از حساب</a></li>
                </ul>
            </div>
            {/* icons section */}
            {/* icon controller  */}
            <div className=' w-[22%]  flex justify-evenly items-center  text-gray-600 ' >

                <div className='flex flex-col items-center '>
                    <Link href={"/"}>
                        <Image src={Home} width={"40px"} height={"40px"} alt={"صفحه اصلی"}></Image>

                    </Link>

                </div>

                <div className='flex flex-col items-center '>
                    <Image src={Gallery} width={"40px"} height={"40px"} alt={"گالری"}></Image>

                </div>

                <div className='flex flex-col items-center '>
                    <Image src={Pack} width={"40px"} height={"40px"} alt={"بسته ها "}></Image>

                </div>

                <div className='flex flex-col items-center '>
                    <Image src={Support} width={"40px"} height={"40px"} alt={"پشتیبانی"}></Image>

                </div>

                <div className='flex  items-center  border-[1px] border-[#eeeeee5d] rounded-lg h-[48px] px-[10px] '>
                    <Link href={"/profile"}>
                        <Image src={User} width={"40px"} height={"40px"} alt={"پروفایل"}></Image>

                    </Link>
                    <p className='flex flex-col text-white px-[5px] '>
                        <span className='text-[11px]'>محمد محسنی</span>
                        <span className='text-[11px]'>09338697097</span>
                    </p>
                </div>

            </div>


        </div>
    );
};

export default Header;