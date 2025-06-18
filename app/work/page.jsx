'use client'
import { easeInOut, motion } from 'framer-motion'
import React from 'react'
import ProjectCarousel from '@/components/ProjectCarousel';

const work = () => {
  return (
    <>
      <section className=' text-dark dark:text-light flex lg:mx-20 md:mx-10'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5, ease: easeInOut } }}
          className='flex my-10 container mx-auto '>
          <ProjectCarousel />
        </motion.div>
      </section>
    </>
  )
}

export default work
