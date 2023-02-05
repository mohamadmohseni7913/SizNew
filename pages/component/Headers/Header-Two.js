import Image from 'next/image';
import React from 'react';
import image from "../../../src/Img/icons/sizpack typo-26.svg";
import User from "../../../src/Img/icons/user-icon-s.svg"
import Home from "../../../src/Img/icons/header-home.svg"
import Pack from "../../../src/Img/icons/pack-l.svg"
import Gallery from "../../../src/Img/icons/gallery-icon-l.svg"
import Support from "../../../src/Img/icons/support -black.svg"
import Link from 'next/link';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
const Header = () => {
    if (typeof window !== "undefined") {

        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            let element = document.getElementById("header")
            if (element) {
                if (prevScrollpos > currentScrollPos) {

                    element.style.height = "80px";
                    element.style.overflow = "visible "


                } else {

                    element.style.height = "0";
                    element.style.overflow = "hidden"

                }
            }


            prevScrollpos = currentScrollPos;
        }
    }

    return (

        <div className='inner-Header fixed top-0 z-30 w-[100%] transition-all' >
            <div id='header' className={"flex justify-between items-center w-[100%] px-[5%]  bg-[white] shadow-sm	transition-all duration-500 h-[80px]	   "}  >
                {/*logo section  */}
                <div className='w-1/6 '>
                    <Image src={image} width={"250px"} alt={"لوگو"} />
                </div>
                {/* menu bar  */}
                <div className=' header-Menu w-3/6 flex justify-center items-center h-[100%] ' >
                    <ul className='flex justify-between w-5/6 h-[100%] items-center '>
                        <li className='drop-Down h-[100%] ' ><a className='flex items-end' href=""><HomeOutlinedIcon />صفحه اصلی  </a>
                           
                             {/* underLine */}
                             <div className='underLine'>
                                <div>

                                </div>
                            </div>
                        </li>
                        <li className='drop-Down h-[100%] '><a className='flex items-end' href=""> <CategoryOutlinedIcon /> دسته بندی ها <ArrowDropDownOutlinedIcon /></a>
                        

                            <ul className='drop-Down-Content bg-[white]  shadow-sm rounded-[3px]'>
                                <li><Link href="/land-1">جعبه</Link></li>
                                <li><Link href="/land-2">کارتن</Link></li>
                                <li><Link href="/land-3">کارتن لمینتی</Link></li>
                                <li><Link href="/land-4">لیبل</Link></li>
                                <li><Link href="/land-4">شاپینگ</Link></li>
                                <li><Link href="/land-4">شیت افست</Link></li>

                            </ul>
                            {/* underLine */}
                            <div className='underLine'>
                                <div>

                                </div>
                            </div>
                        </li>
                        <li className='drop-Down h-[100%]'>
                            <a className='flex items-end ' href=""> <InfoOutlinedIcon />درباره ما</a>
                           

                              {/* underLine */}
                              <div className='underLine'>
                                <div>

                                </div>
                            </div>
                        </li>
                        <li className='drop-Down h-[100%]'>
                            <a className='flex items-end ' href=""><CallOutlinedIcon />ارتباط با ما </a>
                           

                            {/* underLine */}
                            <div className='underLine'>
                                <div>

                                </div>
                            </div>
                        </li>
                        <li className='drop-Down h-[100%]'>
                            <a className='flex items-end ' href=""> <QuizOutlinedIcon />سوالات شما</a>
                           

                             {/* underLine */}
                             <div className='underLine'>
                                <div>

                                </div>
                            </div>
                        </li>

                        <li>

                        </li>
                    </ul>


                </div>

                {/* icon controller  */}
                <div className='flex justify-evenly  w-1/6 text-gray-600 ' >

                    <div className='flex flex-col items-center'>
                        <Link href={"/"}>
                            <Image src={Home} width={"40px"} height={"40px"} alt={"صفحه اصلی"}></Image>

                        </Link>

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
                        <Link href={"/profile"} >
                            <Image src={User} width={"40px"} height={"40px"} alt={"پروفایل"}></Image>

                        </Link>
                        {/* <span className='text-[12px]'>
                        پروفایل

                    </span> */}
                    </div>

                </div>

            </div>

        </div>
    );
};


export default Header;