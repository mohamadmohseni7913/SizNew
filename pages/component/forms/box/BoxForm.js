import React, { useEffect, useState } from 'react';
import FormTitle from '../component/FormTitle';
import FormSectionHeader from "../component/formSectionHeader";
import { Accordion, AccordionDetails, AccordionSummary, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import Slider from '../component/slider';
import "./accardion"
import FormExplain from '../component/FormExplain';
import { Error, warning, success, ErrorLowData, ErrorMuchData } from '../component/Alert';
import NumberFormat from 'react-number-format';
import { from } from 'jalali-moment';

const BoxFrom = () => {
    const [form, setFrom] = useState({ length: null, width: null, height: null, material: null, gramaj: null, tiraj: null })
    // form value Handler
    const valueHandler = (value, name) => {
        if (name == "width" && value < 10) {
            ErrorLowData('عرض', null, 10)
        }
        if (name == "width" && value > 480) {
            ErrorMuchData('عرض', null, 480)
        }
        if (name == "length" && value < 10) {
            ErrorLowData('طول', null, 10)
        }
        if (name == "length" && value > 480) {
            ErrorMuchData('طول', null, 480)
        }
        if (name == "height" && value < 48) {
            ErrorLowData('ارتفاع', null, 48)
        }
        if (name == "height" && value > 690) {
            ErrorMuchData('ارتفاع', null, 690)
        }
        if (name == "material" && value == null || name == "gramaj" && value == null) {
            Error(name, `مقدار ${name} نمیتواند خالی باشد`)
        }
        if (name == "tiraj") {
            if (value.length < 4 || value < 1000) {
                Error("تیراژ", "تیراژ نمیتواند کمتر از ۱۰۰۰ باشد")
            }

        }
        setFrom({ ...form, [name]: value })
    }
    // forms btn control
    useEffect(() => {
       if(form.length==null || form.length==""  || form.width==null || form.width=="" || form.height==null || form.height=="" || form.material==null || form.material=="" || form.gramaj==null || form.gramaj=="" || form.tiraj==null || form.tiraj==""){
        document.getElementById("AcceptOrder").disabled=true
        document.getElementById("AddYourPack").disabled=true
        document.getElementById("GetInvoice").disabled=true
       }
       else{
        document.getElementById("AcceptOrder").disabled=false
        document.getElementById("AddYourPack").disabled=false
        document.getElementById("GetInvoice").disabled=false
       }
       if(form.width<10 || form.width>480 || form.length<10 || from.length>480 || form.tiraj<1000){
        document.getElementById("AcceptOrder").disabled=true
        document.getElementById("AddYourPack").disabled=true
        document.getElementById("GetInvoice").disabled=true
       }
       else{
        document.getElementById("AcceptOrder").disabled=false
        document.getElementById("AddYourPack").disabled=false
        document.getElementById("GetInvoice").disabled=false
       }
    }, [form])
    // accept order 
    const AcceptOrder = () => {
        alert(1)
    }
    // Add your pack
    const AddYourPack = () => {
        alert(1)
    }
    // Get Invoice
    const GetInvoice = () => {
        alert(1)
    }
    console.log(form);



    return (
        <div className='flex justify-around px-[1%] py-[20px] my-[80px]'>
            {/* forms materials */}
            <div className={"w-6/12"}>
                {/*    form title*/}
                <FormTitle />
                {/*form materials*/}
                {/* <div className={"flex flex-col py-[5px] "}>
                    <FormSectionHeader name={"ابعاد"} />
                    <div className={"flex justify-between items-center pt-[5px]"} >
                        {
                            inputs.map(item => item.type == "input" ? <TextField key={item.name} onBlur={e => valueHandler(e.target.value, item.name)} color="error" id="outlined-basic" label={item.name} variant="outlined" type={"number"}
                                className={' lg:w-[31%] md:w-[31%] sm:w-[48%] !my-[5px] '} /> : <FormControl color="error"
                                    className='lg:w-[48%] md:w-[48%] sm:w-[48%] w-full !my-[5px]'>
                                <InputLabel id="demo-simple-select-label">{item.name}</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                          
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            )
                        }

                                


                    </div>
                </div> */}

                {/* form content  */}
                {/* form content  */}
                <div className='mt-2'>
                    <div className={"flex flex-col  "}>
                        <FormSectionHeader name={"ابعاد"} />
                        {/*  form section content  */}
                        <div className={"flex justify-between items-center "}>
                            <TextField onBlur={(e) => valueHandler(e.target.value, "length")} color="error" id="outlined-basic" label={"طول"} variant="outlined" type={"number"}
                                className={' lg:w-[32%] md:w-[32%] sm:w-[48%] !my-[5px] '} />
                            <TextField onBlur={(e) => valueHandler(e.target.value, "width")} color="error" id="outlined-basic" label={"عرض"} variant="outlined" type={"number"}
                                className={' lg:w-[32%] md:w-[32%] sm:w-[48%] !my-[5px] '} />
                            <TextField onBlur={(e) => valueHandler(e.target.value, "height")} color="error" id="outlined-basic" label={"ارتفاع"} variant="outlined" type={"number"}
                                className={' lg:w-[32%] md:w-[32%] sm:w-[48%] !my-[5px] '} />
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <FormSectionHeader name={"متریال"} />
                        <div className='flex justify-between flex-wrap'>
                            <FormControl color="error"
                                className='lg:w-[48%] md:w-[48%] sm:w-[48%] w-full !my-[5px]'>
                                <InputLabel id="demo-simple-select-label">انتخاب متریال</InputLabel>
                                <Select onBlur={(e) => valueHandler(e.target.value, "material")}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"

                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl color="error"
                                className='lg:w-[48%] md:w-[48%] sm:w-[48%] w-full !my-[5px]'>
                                <InputLabel id="demo-simple-select-label">گرماژ</InputLabel>
                                <Select onBlur={(e) => valueHandler(e.target.value, "gramaj")}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"

                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <FormSectionHeader name={"چاپ"} />
                        <div className='flex justify-between flex-wrap'>
                            <FormControl color="error"
                                className='lg:w-[48%] md:w-[48%] sm:w-[48%] w-full !my-[5px]'>
                                <InputLabel id="demo-simple-select-label">چاپ رو ندارد</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"

                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl color="error"
                                className='lg:w-[48%] md:w-[48%] sm:w-[48%] w-full !my-[5px]'>
                                <InputLabel id="demo-simple-select-label">چاپ پشت ندارد</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"

                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <FormSectionHeader name={"خدمات پس از چاپ"} />
                        <div className='flex justify-between flex-wrap'>
                            <FormControl color="error"
                                className='lg:w-[32%] md:w-[48%] sm:w-[48%] w-full !my-[5px]'>
                                <InputLabel id="demo-simple-select-label">چاپ رو ندارد</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"

                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl color="error"
                                className='lg:w-[32%] md:w-[48%] sm:w-[48%] w-full !my-[5px]'>
                                <InputLabel id="demo-simple-select-label">چاپ پشت ندارد</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"

                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl color="error"
                                className='lg:w-[32%] md:w-[48%] sm:w-[48%] w-full !my-[5px]'>
                                <InputLabel id="demo-simple-select-label">چاپ پشت ندارد</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"

                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <FormSectionHeader name={"خدمات طلاکوب"} />
                        <div className='flex justify-between flex-wrap'>
                            <FormControl color="error"
                                className='lg:w-[32%] md:w-[48%] sm:w-[48%] w-full !my-[5px]'>
                                <InputLabel id="demo-simple-select-label">طلاکوب ندارد</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"

                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField color="error" id="outlined-basic" label={"طول به میلی متر"} variant="outlined" type={"number"}
                                className={' lg:w-[32%] md:w-[31%] sm:w-[48%] !my-[5px] '} />
                            <TextField color="error" id="outlined-basic" label={"عرض به میلی متر"} variant="outlined" type={"number"}
                                className={' lg:w-[32%] md:w-[31%] sm:w-[48%] !my-[5px] '} />

                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <FormSectionHeader name={"خدمات طلاکوب"} />
                        <div className='flex justify-between flex-wrap'>
                            <FormControl color="error"
                                className='w-full !my-[5px]'>
                                <InputLabel id="demo-simple-select-label">طلاکوب ندارد</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"

                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>


                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <FormSectionHeader name={"تیراژ"} />
                        <div className='flex justify-between items-center flex-wrap'>
                            <TextField onBlur={e => valueHandler(e.target.value, "tiraj")} color="error" id="outlined-basic" label={"تیراژ"} variant="outlined" type={"number"}
                                className={'w-[48%] !my-[3px] !text-center'} />
                            <p className=' flex justify-between items-center px-[10px] w-[48%] rounded-[4px] border-[1px] border-gray-300 h-[40px]  !my-[3px] '>
                                <span className='text-[14px] font-bold text-gray-600'>تیراژ اقتصادی : </span>
                                <span className='text-active-color font-bold text-[14px]'><NumberFormat id="totalPrice"
                                    value={333355555}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                /></span>
                                <span className='text-[14px] font-bold text-gray-600'>عدد</span>
                            </p>
                            <p className=' flex justify-between items-center px-[10px] w-[48%] rounded-[4px] border-[1px] border-gray-300 h-[40px]  !my-[3px]'>
                                <span className='text-[14px] font-bold text-gray-600'> جمع کل:</span>
                                <span className='text-active-color font-bold text-[14px]'><NumberFormat id="totalPrice"
                                    value={333355555}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                /></span>

                                <span className='text-[14px] font-bold text-gray-600'>ریال</span>

                            </p>
                            <p className=' flex justify-between items-center px-[10px] w-[48%] rounded-[4px] border-[1px] border-gray-300 h-[40px]  !my-[3px]'>
                                <span className='text-[14px] font-bold text-gray-600'>فی هر عدد: </span>
                                <span className='text-active-color font-bold text-[14px]'><NumberFormat id="totalPrice"
                                    value={333355555}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                /></span>

                                <span className='text-[14px] font-bold text-gray-600'>ریال</span>

                            </p>
                            <p className=' flex justify-between items-center px-[10px] w-[48%] rounded-[4px] border-[1px] border-gray-300 h-[40px]  !my-[3px]'>
                                <span className='text-[14px] font-bold text-gray-600'>پیش پرداخت</span>
                                <span className='text-active-color font-bold text-[14px]'><NumberFormat id="totalPrice"
                                    value={333355555}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                /></span>

                                <span className='text-[14px] font-bold text-gray-600'>ریال</span>
                            </p>
                            <p className=' flex justify-between items-center px-[10px] w-[48%] rounded-[4px] border-[1px] border-gray-300 h-[40px]  !my-[3px]'>
                                <span className='text-[14px] font-bold text-gray-600'>زمان تحویل:</span>
                                <span className='text-active-color font-bold text-[14px]'>12</span>

                                <span className='text-[14px] font-bold text-gray-600'>روز</span>
                            </p>



                        </div>
                    </div>

                </div>
                <FormExplain />


                <div className='flex justify-between py-[12px] text-white '>
                    <button onClick={GetInvoice} id="GetInvoice" className='rounded-md w-[32%] bg-btn-icon-color h-[40px]'>پیش فاکتور</button>
                    <button onClick={AddYourPack} id="AddYourPack" className='rounded-md w-[32%] bg-active-color'>افزودن به بسته های من </button>
                    <button onClick={AcceptOrder} id="AcceptOrder" className='rounded-md w-[32%] bg-green-500'>ثبت سفارش</button>

                </div>

            </div>
            <div className='w-4/12'>
                <Slider />
            </div>

        </div>
    );
};
export default BoxFrom;


