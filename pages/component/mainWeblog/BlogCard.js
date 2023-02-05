import React from 'react';
import * as moment from 'jalali-moment';

const BlogCard = () => {
    let time=new Date()
    return (
        <div className='w-[22%] text-text-color   '>
            <img className='rounded-md' src="/600b2a00e736a93399ac2d40_image-7-blog-book-template-p-800.jpeg" alt="" />
            {/* card info */}
            {/* <div className='flex items-center justify-between   py-[10px]'>
            <p className='flex items-center text-[10px]'>منبع :<span></span> <a   className='text-[10px]'   href='#'> سیزپک</a></p>
            <p className='flex items-center' > <span className='text-[10px]'>تاریخ انتشار:</span> <span   className='text-[10px]'> {moment(time).locale('fa').format('HH:mm YYYY-M-D')}</span></p>
                
                
            </div> */}
            {/* card content */}
            <div className='flex flex-col py-2'>
                <h2 className='text-[18px] font-bold'>افست چیست؟  </h2>
                <p className='text-[13px]'> روی صفحات فلزی حرکت کرده و سبب چاپی با کیفیت میشود. از این روش بعنوان به صرفه ترین روش چاپی برای چاپ مقادیر انبوهی از صفحات یاد میشود. این مقاله بصورت جامع به چاپ افست، مزایا و معایب آن میپردازیم.</p>
                <a href="#" className='bg-transparent text-active-color rounded-sm hover:text-white hover:bg-active-color flex justify-center w-max px-[10px] text-[14px] border-[1px] border-active-color'> خواندن مطالب بیشتر ... </a>
             </div>

        </div>
    );
};

export default BlogCard;