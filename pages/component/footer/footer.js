import React from 'react';
import { RiLinkedinFill, RiPinterestFill, RiTelegramFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className='footer px-[8%] py-[15px]   '>
            <div className=' flex justify-between py-[10px]  '>
                {/* navigation list */}
                <div className='w-1/6'>
                    <h2>دسته بندی ها </h2>

                    <ul>
                        <li>جعبه</li>
                        <li>کارتن</li>
                        <li>کارتن لمینتی</li>
                        <li>لیبل</li>
                        <li>شاپینگ</li>
                        <li>شیت افست</li>
                    </ul>
                </div>
                {/* fast access */}
                <div className='w-1/6'>
                    <h2> دسترسی آسان </h2>
                    <ul>
                        <li>گالری</li>
                        <li>وبلاگ</li>
                        <li>درباره ما </li>
                        <li> ارتباط به ما  </li>
                        <li>سوالات شما</li>
                    </ul>
                </div>
                {/* contact sizpack */}
                <div className='w-2/6'>
                    <h2>ارتباط با سیزپک</h2>
                    <p>تهران -میدان آزادی-ابتدای اتوبان جناح- بلوار صالحی- نبش کوچه جعفرنیا شمالی پلاک 1

                    </p>
                    <a  href="tel:09338697097"> تلفن :09905666692</a>
                    <div className=' w-3/6 social-Media flex py-[10px] justify-start'>
                        <div className='shadow-md w-[40px] h-[40px] rounded-[50%] flex justify-center items-center' >
                            <RiTelegramFill className='text-[#25a4c4]' />

                        </div>
                        <div className='shadow-md w-[40px] h-[40px] rounded-[50%] flex justify-center items-center'>
                            <RiInstagramFill className='text-[#e03d60]' />

                        </div>
                        <div className='shadow-md w-[40px] h-[40px] rounded-[50%] flex justify-center items-center'>
                            <RiPinterestFill className='text-[red]' />

                        </div>
                        <div className='shadow-md w-[40px] h-[40px] rounded-[50%] flex justify-center items-center'>
                            <RiLinkedinFill className='text-[#5097d1]' />

                        </div>

                    </div>
                </div>
                {/* social media */}
                <div className='w-2/6 flex flex-col justify-start items-end' >
                    <img className='w-3/6' src="/sizpack typo-26.svg" alt="" />
          
                    {/* License */}
                    <div className='flex justify-end w-3/6 py-[5px]'>
                        <img style={{ width: "110px" }} src="/electronic.png" alt="" />
                        <img style={{ width: "110px" }} src="/nehsan.png" alt="" />
                    </div>
                </div>

            </div>
            {/* security */}
            <div className=' flex items-center justify-between border-t-[1px] border-[#dbd9d9] '>
                <div className='w-4/6'>
                    <p>برای استفاده از مطالب سیزپک داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت ایده پردازان فروغ پردیس (سامانه آنلاین چاپ و بسته بندی) است.</p>
                </div>
                <div className=' flex justify-end  items-center w-2/6'>
                    <p className='!text-gray-500 '>طراحی توسط تیم تحقیق و توسعه سیزپک</p>
                    <img  className='w-[60px]' src="/Logo-Final-SIZ01.png" alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;