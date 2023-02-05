import React from 'react';
import Card from './Card/Card';

const Categories = () => {
  return (
    <div className='flex flex-col items-center w-[100%] px-[8%] py-[15px]'>
      <h1 className='border-b-[1px]'>استعلام و سفارش آنلاین  </h1>
      <div className='flex justify-between  flex-wrap py-[10px]'>
        <Card count={1} img_Src={"/categories/box.png"} img_alt={"asdasd"} product_Name={"جعبه"} />
        <Card count={1} img_Src={"/categories/carton.png"} img_alt={"asdasd"} product_Name={"کارتون"} />
        <Card count={1} img_Src={"/categories/laminet-carton.png"} img_alt={"asdasd"} product_Name={"کارتون لمینتی"} />
        <Card count={1} img_Src={"/categories/label-desktop.png"} img_alt={"asdasd"} product_Name={"لیبل"} />
        <Card count={1} img_Src={"/categories/shopping.png"} img_alt={"asdasd"} product_Name={"شاپینگ"} />
        <Card count={1} img_Src={"/categories/offset.png"} img_alt={"asdasd"} product_Name={"شیت افست"} />
      </div>


    </div>


  );
};

export default Categories;