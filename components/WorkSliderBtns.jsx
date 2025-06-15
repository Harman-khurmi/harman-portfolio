import React from 'react'
import { useSwiper } from 'swiper/react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const WorkSliderBtns = () => {
    const swiper = useSwiper();
    return (
        <>
            <div className='flex gap-2 lg:gap-6 absolute right-0 bottom-[45%] xl:bottom-0 z-20 w-full justify-between px-2 lg:px-0 xl:w-max xl:justify-none'>
                <button onClick={() => { swiper.slidePrev() }} className='flex items-center justify-center bg-first text-white text-2xl cursor-pointer rounded-sm p-2'><IoIosArrowBack className='' /></button>
                <button onClick={() => { swiper.slideNext() }} className='flex items-center justify-center bg-first text-white text-2xl cursor-pointer rounded-sm p-2'><IoIosArrowForward className='' /></button>
            </div>
        </>
    )
}

export default WorkSliderBtns
