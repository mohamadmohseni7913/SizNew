
import { useEffect, useState } from 'react'
// import "../styles/output.css"
import 'animate.css';
import Categories from './component/product/Categories';
import Banner from "./component/Sliders/Banner-Two"
import BoxFrom from './component/forms/box/BoxForm';
import BannerTwo from './component/Sliders/Banner-Two';
import Slogan from './component/Slogan/Slogan';
import Card from './component/product/Card/Card';
import CustomerSlider from './component/customerSlider/CustomerSlider';
import MainCategories from './component/mainCategories/MainCategories';
import MainWeblog from './component/mainWeblog/MainWeblog';
import { Menu } from '@headlessui/react'

export default function Home(props) {
  return (
    <div className='mt-[60px]'>
    {/* main slider */}
      <BannerTwo/>
      {/* main slogan */}
      <Slogan/>
      {/* main categories  */}
      <MainCategories/>
      {/* main Weblog */}
      <MainWeblog/>
      {/* customer slider */}
      <CustomerSlider />
    </div>
  )
}
