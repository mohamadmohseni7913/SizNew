import React from 'react';
import Card from "../product/Card/Card"
const MainCategories = () => {
    return (
        <div className='flex flex-col items-center w-[100%] px-[10%] py-[15px]'>
        <h1 className='border-b-[1px]'>استعلام و سفارش آنلاین  </h1>
        <div className='flex justify-between  flex-wrap py-[10px]'>
            <Card count={2} img_Src={"/categories/box.png"} img_alt={"asdasd"}  />
            <Card count={2} img_Src={"/categories/carton.png"} img_alt={"asdasd"}  />
            <Card count={2} img_Src={"/categories/laminet-carton.png"} img_alt={"asdasd"}  />
            <Card count={2} img_Src={"/categories/label-desktop.png"} img_alt={"asdasd"}  />
            <Card count={2} img_Src={"/categories/shopping.png"} img_alt={"asdasd"}  />
            <Card count={2} img_Src={"/categories/offset.png"} img_alt={"asdasd"}  />
        </div>


    </div>
    );
};

export default MainCategories;