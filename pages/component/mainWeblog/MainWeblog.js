import React from 'react';

import { BiSearchAlt2 } from "react-icons/bi";
import BlogCard from './BlogCard';

const MainWeblog = () => {
    return (
        <div className='px-[5%] py-[10px] '>
            {/* header section */}
            <div className='flex flex-col '>
            {/* title section */}
                <div className='flex items-center'>
                    <h1 className='text-[25px] w-max font-bold text-text-color'>مقالات و منابع</h1>
                    <div className='flex-1 border-b-[1px] border-gray-200'>

                    </div>
                </div>
                {/* search bar section */}
                {/* <div className='flex justify-between items-center py-1   '>
                    <button className='border-[1px] text-text-color hover:bg-active-color hover:text-white transition-all  p-[5px] rounded-sm '>مشاهده همه</button>
                    <form className='search'>
                        <input type="text" placeholder='جست و جو' className='search__input' />

                        <button type='button' className='search__btn' ><BiSearchAlt2 /></button>

                    </form>
                </div> */}
                {/* card sections */}
                <div className='flex justify-between items-center flex-wrap'>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </div>
            </div>
        </div>
    );
};

export default MainWeblog;