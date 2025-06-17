import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BsGithub } from 'react-icons/bs';
import { BsArrowUpRight } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from './WorkSliderBtns';
// import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

const projects = [
    {
        num: '01',
        category: 'Web Development',
        title: 'Project One',
        description: 'This is a description of project one. Some more text to make it longer and more descriptive.',
        stack: [{ name: 'React', icon: '/react-icon.svg' }, { name: 'Node.js', icon: '/nodejs-icon.svg' }],
        image: '/sample.jpeg',
        github: '',
        live: 'https://example.com/project1'
    },
    {
        num: '02',
        category: 'Full Development',
        title: 'Project One',
        description: 'This is a description of project one.',
        stack: [{ name: 'React', icon: '/react-icon.svg' }, { name: 'Node.js', icon: '/nodejs-icon.svg' }],
        image: '/sample.jpeg',
        github: '',
        live: 'https://example.com/project1'
    },
]

const ProjectCarousel = () => {

    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        setProject(projects[swiper.activeIndex]);
    };
    const swiper = useSwiper();

    return (
        <div className='flex flex-col gap-6 lg:flex-row lg:gap-10  w-full h-full lg:px-10'>
            <div className='flex flex-col order-2 lg:order-none lg:w-[50%] px-5 lg:px-0 gap-5 group'>
                {/* project count */}
                <div className='text-8xl font-bold text-first stroke-text group-hover:!text-third group-focus:!text-third duration-300 delay-150 transition-all ease-in-out'>
                    {project.num}
                </div>
                {/* category */}
                <h2 className='lg:text-4xl text-3xl font-semibold text-dark dark:text-light mb-2'>
                    {project.category}
                </h2>
                {/* description */}
                <p className='lg:text-lg text-md text-dark dark:text-light mb-4'>
                    {project.description}
                </p>
                {/* stack */}
                <ul className='flex flex-wrap gap-1 mb-4'>
                    {project.stack.map((item, index) => (
                        <li key={index} className='flex items-center gap-2 text-first text-lg'>
                            {/* <Image src={item.icon} alt={item.name} width={24} height={24} /> */}
                            <span>{item.name}{index !== project.stack.length - 1 && <span className=''> ,</span>}</span>

                        </li>
                    ))}
                </ul>
                {/* divider */}
                <div className='border'></div>
                {/* buttons */}
                <div className='flex gap-8 mt-4'>
                    <div className='order-2'>
                        <Link href={project.live} target='_blank' className='flex items-center gap-2'>
                            <TooltipProvider delayDuration={180}>
                                <Tooltip>
                                    <TooltipTrigger className='flex items-center gap-2'>
                                        <BsGithub className='lg:hover:animate-bounce hover:cursor-pointer text-6xl dark:bg-dark bg-gray-200 hover:bg-first hover:text-white transition-colors duration-300 active:bg-first active:text-white hover:dark:bg-first hover:dark:text-dark p-3 rounded-full' />
                                        {/* <span>GitHub</span> */}
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        View on GitHub
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                    </div>
                    <div>
                        <Link href={project.live} target='_blank' className='flex items-center gap-2'>
                            <TooltipProvider delayDuration={180}>
                                <Tooltip>
                                    <TooltipTrigger className='flex items-center gap-2'>
                                        <BsArrowUpRight className='lg:hover:animate-bounce hover:cursor-pointer text-6xl dark:bg-dark bg-gray-200 hover:bg-first hover:text-white transition-colors duration-300 active:bg-first active:text-white hover:dark:bg-first hover:dark:text-dark p-3 rounded-full' />
                                        {/* <span>Project Link</span> */}
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Deployed Link
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                    </div>
                </div>
            </div>
            {/* SLIDER IMAGE */}
            <div className='flex flex-col lg:w-[50%] w-full px-5 lg:px-0'>
                <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange} className='w-full h-full'>
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className='relative w-full h-full '>
                            <div className='object-fill w-full h-full relative'>
                                <Image src={project.image} alt='work-image' width={96} height={96} className=' relative rounded-xl object-cover w-full h-90' />
                            </div>
                        </SwiperSlide>
                    ))}
                    <WorkSliderBtns />
                </Swiper>
            </div>
        </div>
    )
}

export default ProjectCarousel
