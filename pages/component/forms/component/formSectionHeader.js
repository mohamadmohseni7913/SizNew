import React from 'react';
import { BsInfoCircle } from "react-icons/bs";

const FormSectionHeader = ({ name }) => {
    //open 
    const open = () => {
        document.getElementById("explain").style.left = "0"
    }
    const closeExplain = () => {
        document.getElementById("explain").style.left = "-100%"
    }
    // img click
    if (typeof window !== "undefined") {
        let img_click_status = false;
        const imgClick = (id) => {
            const element = document.getElementById(`img_section` + id)
            element.style.transform = "scale(1)"
            element.style.opacity = "1"
            if (img_click_status == false) {
                imgOpen(element)
            }
            else if (img_click_status == true) {
                imgClose(element)
            }
        }
        const imgOpen = (el) => {
            el.style.transform = "scale(1)"
            el.style.opacity = "1"
            img_click_status = true
        }
        const imgClose = (el) => {
            el.style.transform = "scale(0)"
            el.style.opacity = "0"
            img_click_status = false
        }
    }

    return (
        <div className={"w-full flex items-center py-[12px]"}>
            <span style={{fontWeight:600}} className={"w-max px-[10px] flex justify-start items-center text-gray-600 text-[14px] "}> {name} <BsInfoCircle onClick={open} className='text-active-color mx-2 text-[13px] text-gray-500 cursor-pointer hover:text-active-color  ' /> </span>
            <div id='explain' className='w-[100%] h-[100vh] fixed top-[78px] left-[-100%] flex flex-row transition-all duration-[300ms] z-10'>

                <div onClick={closeExplain} className='w-7/12  h-[100%]   '>

                </div>
                <div className='w-5/12 h-[100%]   bg-[#eee] flex flex-col items-center p-[20px]   '>
                    <div >
                        {/* img section  */}
                        <div onClick={e => imgClick(1)} className='w-3/12'>
                            <img className='w-[100%]' src="/Logo-Final-SIZ01.png" alt="" />

                        </div>
                        {/* img section modal */}
                        <div id={`img_section${1}`} onClick={e => imgClick(1)} className='w-3/12 forms-Modal'>
                            <img className='w-[100%]' src="/Logo-Final-SIZ01.png" alt="" />

                        </div>
                        {/* content section */}
                        <div className='text-[white]' >
                            <p className='text-black text-[14px]'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </p>
                        </div>
                    </div>
                    <div >
                        {/* img section  */}
                        <div onClick={e => imgClick(2)} className='w-3/12'>
                            <img className='w-[100%]' src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />

                        </div>
                        {/* img section modal */}
                        <div id={`img_section${2}`} onClick={e => imgClick(2)} className='w-3/12 forms-Modal'>
                            <img className='w-[100%]' src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />

                        </div>
                        {/* content section */}
                        <div className='text-[white]' >
                            <p className='text-black text-[14px]'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </p>
                        </div>
                    </div>


                </div>

            </div>

            <div className={"flex-1 border-b-[1px] border-gray-200 "}></div>

        </div>
    );
};

export default FormSectionHeader;