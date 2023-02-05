import { SearchRounded } from '@mui/icons-material';
import { useRouter } from 'next/router';
import React from 'react';

import { BorderLinearProgress } from './progressBar';
const SectionHeader = () => {
    const Router = useRouter()
    return (
        <div className='  flex justify-between items-center'>
            {/* title section */}
            <div className='flex flex-col'>
                <h1 className='text-[30px]'>داشبورد</h1>


            </div>
            {/* managing section */}
            <div>
                {/* search btn */}
                <div className='border-[1px] rounded-md border-[#cfcccc] px-2' >
                    <input type="text" className='border-none bg-transparent ' placeholder='جست و جو' />
                    <SearchRounded className=' !fill-text-color' />

                </div>
            </div>
    
        </div>
    );
};

export default SectionHeader;


