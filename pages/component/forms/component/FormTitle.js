import React from 'react';
import { IoChevronBackCircleOutline } from "react-icons/io5";

const FormTitle = () => {
    return (
        <div className='border-[1px] rounded-[4px] p-[5px] font-bold text-active-color  border-active-color flex justify-between  items-center '>
            <span className='text-[12px]'>مشخصات کاغذ را وارد نمایید  </span >
            <button onClick={()=>window.history.back()} className='flex items-center font-normal'>
                <IoChevronBackCircleOutline className='text-[24px]' />

            </button>

        </div>
    );
};

export default FormTitle;