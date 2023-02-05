import Image from 'next/image';
import React from 'react';
import image from "../../../src/Img/icons/sizpack typo-26.svg";
import User from "../../../src/Img/icons/user-icon-s.svg"
import Home from "../../../src/Img/icons/header-home.svg"
import Pack from "../../../src/Img/icons/pack-l.svg"
import Gallery from "../../../src/Img/icons/gallery-icon-l.svg"
import Support from "../../../src/Img/icons/support -black.svg"
import 'animate.css';

const Header = () => {
    return (
        <div className={"flex justify-between items-center w-[100%] px-[5%] py-[10px] bg-gray-50 border-b-[3px] border-[#fd1e4a]  "}>
            {/*logo section  */}
            <div className='w-1/6 '>
                <Image src={image} width={"300px"} alt={"لوگو"} />
            </div>
            {/* menu bar  */}
            <div className='w-4/6 flex justify-center' >
                <ul className='flex justify-between w-4/6 '>
                    <li><a className={"text-sm text-gray-600 hover:text-rose-600 ease-in-out duration-[0.3s] border-b-[1px] border-[#fd1e4a] "} href="">صفحه اصلی</a></li>
                    <li><a className='text-sm text-gray-600 hover:text-rose-600 ease-in-out duration-[0.3s]' href="">جعبه</a></li>
                    <li><a className='text-sm text-gray-600 hover:text-rose-600 ease-in-out duration-[0.3s]' href="">کارتن</a></li>
                    <li><a className='text-sm text-gray-600 hover:text-rose-600 ease-in-out duration-[0.3s]' href="">کارتن لمینتی</a></li>
                    <li><a className='text-sm text-gray-600 hover:text-rose-600 ease-in-out duration-[0.3s]' href="">لیبل</a></li>
                    <li><a className='text-sm text-gray-600 hover:text-rose-600 ease-in-out duration-[0.3s]' href="">رول</a></li>
                    <li><a className='text-sm text-gray-600 hover:text-rose-600 ease-in-out duration-[0.3s]' href="">شیت افست</a></li>
                    <li><a className='text-sm text-gray-600 hover:text-rose-600 ease-in-out duration-[0.3s]' href="">درباره ما</a></li>
                    <li><a className='text-sm text-gray-600 hover:text-rose-600 ease-in-out duration-[0.3s]' href="">ارتباط با ما</a></li>
                    <li><a className='text-sm text-gray-600 hover:text-rose-600 ease-in-out duration-[0.3s]' href="">سوالات شما</a></li>
                </ul>
            </div>
            {/* icon controller  */}
            <div className='flex justify-evenly  w-1/6 text-gray-600 ' >

                <div className='flex flex-col items-center'>
                    <Image src={Home} width={"40px"} height={"40px"} alt={"صفحه اصلی"}></Image>
                    {/* <span className='text-[12px]'>
                        صفحه اصلی

                    </span> */}
                </div>

                <div className='flex flex-col items-center'>
                    <Image src={Gallery} width={"40px"} height={"40px"} alt={"گالری"}></Image>
                    {/* <span className='text-[12px]'>
                        گالری

                    </span> */}
                </div>

                <div className='flex flex-col items-center'>
                    <Image src={Pack} width={"40px"} height={"40px"} alt={"بسته ها "}></Image>
                    {/* <span className='text-[12px]'>
                        بسته ها

                    </span> */}
                </div>

                <div className='flex flex-col items-center'>
                    <Image src={Support} width={"40px"} height={"40px"} alt={"پشتیبانی"}></Image>
                    {/* <span className='text-[12px]'>
                        پشتیبانی

                    </span> */}
                </div>

                <div className='flex flex-col items-center'>
                    <Image src={User} width={"40px"} height={"40px"} alt={"پروفایل"}></Image>
                    {/* <span className='text-[12px]'>
                        پروفایل

                    </span> */}
                </div>

            </div>

        </div>
    );
};

export default Header;