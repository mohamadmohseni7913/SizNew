import { Box } from '@mui/material';
import React from 'react';
import Header from './component/header';
import { BorderLinearProgress } from './component/progressBar';
import SectionHeader from './component/sectionHeader';


const Index = () => {
    return (
        <div className='px-[10%] py-[60px] profile h-[700px] '>
            {/* profile index section */}
            <div>
                <SectionHeader />
            </div>
            {/* main section */}
            <div className='flex flex-wrap justify-between px-[5%] '>
                {/* progress bar */}
                {/* <div className='w-1/6'>
                    <Box sx={{ flexGrow: 1 }}>
                   
                        <BorderLinearProgress variant="determinate" value={15}/>
                        
                    </Box>
                </div> */}

            </div>

        </div>
    );
};

export default Index;
