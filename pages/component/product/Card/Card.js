import Image from 'next/image';
import React from 'react';

const Card = ({img_Src,img_alt,product_Name,count}) => {
    return (
        <div  className={`w-${count}/6 px-[10px] !min p-[0] my-[5px] flex flex-col items-center`}>
            {/* <Image className='rounded-md !h-auto !min-h-min !m-[0]' width={"100%"} height={"100%"} src={img_Src} alt={img_alt} layout={"responsive"} /> */}
            <img className='rounded-[5px]' src={img_Src} alt={img_alt} />
            <span className='text-[14px] text-[#474747]'>{product_Name}</span>
        </div>
    );
};

export default Card;