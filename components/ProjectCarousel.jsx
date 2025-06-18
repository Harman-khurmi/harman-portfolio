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
        category: 'EnlightAI - Real-time Answer Generation Platform',
        title: 'Project One',
        description: 'Built EnlightAI—a real-time AI chat platform with Gemini API integration, Auth0-powered signup, dark mode, chat history, front-end featuring prompt state management and skeleton loading.',
        stack: [{ name: 'React.js'}, { name: 'TailwindCSS' }, { name: 'Auth0' }, { name: 'Gemini API' }, { name: 'Flowbite' }],
        image: '/EnlightAI.png',
        github: 'https://github.com/Harman-khurmi/EnlightAI',
        live: 'https://enlight-ai.vercel.app/'
    },
    {
        num: '02',
        category: 'Dawdle - Landing Page',
        title: 'Project One',
        description: 'Built a high‑impact landing page designed and developed to create the online presence featuring smooth animations, enhancing user engagement and showcasing the business effectively.',
        stack: [{ name: 'React.js' }, { name: 'TailwindCSS' }, { name: 'Framer Motion' }, { name: 'Figma' }],
        image: '/dawdle.png',
        github: 'https://github.com/Harman-khurmi/Dawdle-live-main',
        live: 'https://dawdle-live-main.vercel.app/'
    },
    {
        num: '03',
        category: 'NexaAI - AI Business Landing Page',
        title: 'Project One',
        description: 'A fully crafted Figma file for NexaAI, an all-in-one AI automation platform. Instantly drop this responsive landing-page UI into your projects and customize it to your needs.',
        stack: [ { name: 'Figma' } , { name: 'Adobe Illustrator' }],
        image: '/NexaAI.png',
        github: '',
        live: 'https://www.figma.com/community/file/1499168088089012437'
    },
]

const ProjectCarousel = () => {

    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        setProject(projects[swiper.activeIndex]);
    };
    const swiper = useSwiper();

    return (
        <div className='flex flex-col gap-0 lg:flex-row lg:gap-10  w-full h-full lg:px-10'>
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
                            <span>{item.name}{index !== project.stack.length - 1 && <span className=''> ,</span>}</span>

                        </li>
                    ))}
                </ul>
                {/* divider */}
                <div className='border'></div>
                {/* buttons */}
                <div className='flex gap-8 mt-4'>
                    { project.github ? (
                    <div className='order-2'>
                        <Link href={project.github} target='_blank' className='flex items-center gap-2'>
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
                    ) : null}
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
            <div className='flex flex-col lg:w-[50%] w-full h-110 px-5 lg:px-0'>
                <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange} className='w-full h-full'>
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className='relative w-full h-full '>
                            <div className='object-fill w-full h-full relative'>
                                <Image src={project.image} alt='work-image' quality={100} placeholder="blur" blurDataURL="/tiny-blur.jpg" loading="lazy" width={1000} height={1000} className=' relative rounded-xl object-cover w-full h-96' />
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
