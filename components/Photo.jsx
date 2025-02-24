'use client'
import React from 'react'
import { easeInOut, motion } from 'framer-motion'
import Image from 'next/image'
import harman from '../public/formal-me.png'

const Photo = () => {
  return (
    <div className='relative w-full h-full'>
      <motion.div className='relative'>
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5, ease: easeInOut } }}
          className='mix-blend-multiply dark:mix-blend-lighten absolute'>
          <Image src={harman} priority className='w-72 md:w-80 lg:w-96 object-contain' alt='profile pic' />
        </motion.div>
        {/* circle */}

        <motion.svg className={` w-72 md:w-80 lg:w-96`} fill="transparent" viewBox="0 0 506 506" xmlns="https://www.w3.org/2000/svg">
          <motion.circle
            cx="253" cy="253" r="250" stroke="#8c84fe" strokeWidth="4" strokeLinecap="round" strokeLinejoin={"round"} initial={{ strokeDasharray: "24 10 0 0" }} animate={{ strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], rotate: [120, 360] }} transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }} />
        </motion.svg>

      </motion.div>

    </div>
  )
}

export default Photo
