'use client'
import React from 'react'
import { easeInOut, motion } from 'framer-motion'
import { HiArrowLongRight } from "react-icons/hi2";
import Link from 'next/link';

const service = [
  {
    num: "01",
    title: 'Web Development',
    description: 'I create responsive websites that allow the user to experience your website in the best and most appropriate way ',
    icon: <HiArrowLongRight />,
  },
  {
    num: "02",
    title: 'Mobile Development',
    description: 'I create mobile applications that are user-friendly and fully functional. I use Dart and Flutter to build mobile applications.',
    icon: <HiArrowLongRight />,
  },
  {
    num: "03",
    title: 'UI/UX Design',
    description: 'I create user interfaces that are intuitive, easy to use, and engaging. I use Figma to design user interfaces.',
    icon: <HiArrowLongRight />,
  },
  {
    num: "04",
    title: 'Graphic Design',
    description: 'I create visual concepts that inspire, inform, and transform. I use Adobe Illustrator and Adobe Photoshop to create visual concepts.',
    icon: <HiArrowLongRight />,
  },
]

const services = () => {
  return (
    <>
      <section className=' text-dark dark:text-light flex lg:mx-6 '>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5, ease: easeInOut } }}
          className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 my-10 lg:my-4.5 container mx-auto'>

          {service.map((item) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5, ease: easeInOut } }}
              className='flex flex-col p-8 gap-4 rounded-3xl group mx-6 lg:mx-0 bg-light dark:bg-dark shadow-third dark:shadow-third-dark transition-all duration-300 hover:shadow-[4px_4px_0px] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-lg
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
