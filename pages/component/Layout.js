import React, {useEffect, useState} from 'react';
import Footer from './footer/footer';
import Header from "./Headers/Header-Two"
import ProfileHeader from "../profile/component/header"
import { useRouter } from 'next/router'

const Layout = ({children}, props) => {
    const [headerStatus,setHeaderStatus]=useState(false)
    const router = useRouter()
    let path = router.pathname
    // checking the header status
    useEffect(()=>{
    let right_path=path.split('/')[1]
    if(right_path=="profile"){
      
        setHeaderStatus(true)
    }  
    else{
        setHeaderStatus(false)
    }
    },[path])

    return (
        <div>
            {
                headerStatus==true ? <ProfileHeader/> :<Header/>
            }
            
            {/*page link router*/}


            {
                children
            }
            <Footer/>
        </div>
    );
};

export default Layout;