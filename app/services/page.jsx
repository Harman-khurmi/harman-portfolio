'use client'
import React from 'react'
import { easeInOut, motion } from 'framer-motion'
import { HiArrowLongRight } from "react-icons/hi2";
import Link from 'next/link';

const service = [
  {
    num: "01",
    title: 'Web Development',
    description: 'Design & build responsive websites with React, Next.js & Tailwind CSS for standout user experiences.',
    icon: <HiArrowLongRight />,
  },
  {
    num: "02",
    title: 'UI/UX Design',
    description: 'Craft intuitive Figma wireframes & interactive prototypes for web and mobile to drive engagement.',
    icon: <HiArrowLongRight />,
  },
  {
    num: "03",
    title: 'Brand Identity Design',
    description: 'Develop memorable logos, color palettes & brand guidelines in Illustrator & Photoshop for cohesive branding.',
    icon: <HiArrowLongRight />,
  },
  {
    num: "04",
    title: 'Graphic Design',
    description: 'Deliver custom illustrations, vector icons & marketing collateral in Illustrator & Photoshop to elevate your message.',
    icon: <HiArrowLongRight />,
  },
]

const services = () => {
  return (
    <>
      <section className=' text-dark dark:text-light flex lg:mx-16 md:mx-10 '>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5, ease: easeInOut } }}
          className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 my-10 lg:my-4.5 container mx-auto'>

          {service.map((item) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5, ease: easeInOut } }}
              className='flex flex-col p-8 gap-4 rounded-3xl group mx-6 md:mx-0  lg:mx-0 bg-light dark:bg-dark shadow-third dark:shadow-third-dark transition-all duration-300 hover:shadow-[4px_4px_0px] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-lg
              focus:shadow-[4px_4px_0px] focus:translate-x-[-4px] focus:translate-y-[-4px] border-dark border-2'
              key={item.num}>

              {/*  bg-light dark:bg-dark shadow-third dark:shadow-third-dark transition-all duration-300 hover:shadow-[4px_4px_0px] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-lg */}

              <div className='flex gap-2 items-center text-center content-center align-middle place-content-center justify-between '>
                <div className='text-6xl font-semibold  stroke-text group-hover:!text-third group-focus:!text-third duration-300 delay-150 transition-all ease-in-out'>{item.num}</div>
                <Link href="/contact" passHref>
                <button className='flex gap-2 items-center justify-center text-3xl dark:bg-light size-16 rounded-full text-dark group-hover:!bg-third group-focus:!bg-third hover:cursor-pointer group-hover:!text-light hover:-rotate-45 duration-300 delay-150 transition-all ease-in-out'>{item.icon}</button>
                </Link>
              </div>

              <div className='text-4xl font-semibold  group-hover:!text-third group-focus:!text-third duration-300 delay-150 transition-all ease-in-out'>{item.title}</div>
              <div className='text-lg'>{item.description}</div>
            </motion.div>
          ))}

        </motion.div>
      </section>
    </>
  )
}

export default services


// in detail content
// Web Development
// End‑to‑end website creation—from wireframing and visual design to responsive implementation using React, Next.js, and Tailwind CSS for pixel‑perfect performance across all devices.

// UI/UX Design
// User‑centered interface and experience design in Figma—wireframes and interactive prototypes for both mobile apps and websites—to craft intuitive, engaging digital products.

// Brand Identity Design
// Comprehensive brand ecosystems—logo creation, typography, color palettes, and digital‑first guidelines—crafted in Adobe Illustrator and Photoshop with deep design expertise to ensure memorable, cohesive identities.

// Graphic Design
// Custom illustrations, vector icons, and marketing collateral developed in Adobe Illustrator and Photoshop, delivering polished, high‑impact visuals that elevate your brand presence.