'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { easeInOut } from 'framer-motion'
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import Contact from '@/components/Contact';
import Image from 'next/image';


const PHONE_NUMBER = "+91 8264627072";
const EMAIL = "harmankhurmi365@gmail.com";

const contact = () => {

  return (
    <section className='text-dark dark:text-light flex lg:mx-6'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.4, ease: easeInOut } }}
        className='mt-8 container mx-auto'
      >
        <div className='flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-center lg:mx-16 md:mx-10'>
          <div className='lg:w-[40%]  w-full px-10 lg:px-0 flex flex-col items-center justify-baseline gap-4'>
            <Image src="/contact.svg"
              height={400}
              width={400}
              quality={75}
              placeholder="blur"
              blurDataURL="/tiny-blur.jpg"
              loading="lazy"
              alt="Contact image"
              className='cover rounded-2xl md:w-[64%] w-full' />
            {/* <img src="/contact.svg" alt="contact image" className='cover rounded-2xl md:w-[64%]  w-full' /> */}
            {/* Phone card */}
            <div className='flex items-center justify-between bg-neutral-100 dark:bg-dark p-4 rounded-2xl gap-4 md:w-[64%] w-full'>
              <div className='flex flex-col items-start justify-center'>
                <p className='text-xs'>Call me on</p>
                <h3 className=''>{PHONE_NUMBER}</h3>
              </div>
              <div
                className='flex items-center justify-center dark:bg-neutral-700 bg-neutral-200 p-2 rounded-lg '>
                {/* Phone Icon */}
                <MdOutlineLocalPhone className='text-2xl text-fourth' />
              </div>
            </div>
            {/* phone card end */}
            {/* email card */}
            <div className='flex items-center justify-between bg-neutral-100 dark:bg-dark p-4 rounded-2xl gap-4 md:w-[64%] w-full '>
              <div className='flex flex-col items-start justify-center w-full'>
                <p className='text-xs'>Email me here</p>
                <h3 className='break-all'>{EMAIL}</h3>
              </div>
              <div
                className='flex items-center justify-center dark:bg-neutral-700 bg-neutral-200 p-2 rounded-lg  '>
                {/* Phone Icon */}
                <MdOutlineEmail className='text-2xl text-fourth' />
              </div>
            </div>
            {/* email card end */}
          </div>
          <div className='lg:w-[60%] w-full mx-auto px-4 md:px-12 lg:px-4 my-12 lg:my-0 flex '>
            <Contact />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default contact
