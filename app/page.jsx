'use client'
import React from 'react'
import styles from "./bubble.module.css";
import { Button } from "@/components/ui/button"
import { HiDownload } from "react-icons/hi";
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link'
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FaBehance } from "react-icons/fa6";
import { TbBrandFigma } from "react-icons/tb";
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import { easeInOut,motion } from 'framer-motion';

const Home = () => {
  return (
    <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5, ease: easeInOut } }}
        >
      <section className='h-full text-dark dark:text-light flex lg:mx-6'>

          <div className='flex lg:flex-row flex-col gap-10 lg:gap-1 mx-6 md:container items-center lg:items-start md:mx-auto lg:justify-evenly mt-12'>
            <div className='order-2 lg:order-none gap-6 flex flex-col items-center lg:items-start'>
              <TypeAnimation
                sequence={[
                  "Software Developer", 3000,
                  "Full stack Developer", 3000,
                  "UI/UX Designer", 3000,
                  "React Developer", 3000,
                  "Graphic Designer", 3000,
                ]}
                wrapper='span'
                speed={50}
                className='font-semibold text-lg md:text-lg lg:text-xl'
                repeat={Infinity}
                loop={true}
              />
              <div className='flex flex-col items-center lg:items-start text-4xl md:text-5xl lg:text-6xl font-extrabold  '>
                <span>Hello I'm</span>
                <span className='lg:hidden flex text-center text-second'>Harmanpreet Singh</span>
                <div className='w-full hidden lg:grid place-content-center cursor-crosshair'><BubbleText /></div>
              </div>
              <div className='text-sm md:text-lg lg:text-xl justify-center lg:text-left max-w-[24rem] md:max-w-[32rem] text-center lg:max-w-[40rem]'>
                <p>I specialize in building scalable and user-friendly web applications. Exploring the techscape with a designer's eye and a coder's heart, I create magic in the pixels.</p>
              </div>
              <div className='mt-4'>
                <Button variant="outline" className={`flex gap-2 text-lg lg:text-xl rounded-3xl border-2 border-dashed border-second bg-white lg:px-10 lg:py-6 py-5 font-semibold uppercase text-dark transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-lg hover:shadow-second hover:shadow-[4px_4px_0px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none`}>
                  <span>Downlaod CV</span>
                  <HiDownload />
                </Button>
              </div>

              {/* socials */}

              <div className='lg:hidden mx-auto flex flex-wrap items-center justify-center gap-7 md:gap-9 mt-6'>
                <div className='flex gap-2 lg:text-xl font-semibold uppercase text-dark transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl hover:shadow-second hover:shadow-[4px_4px_0px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-xl  bg-light border-2 border-second border-dotted p-2 md:p-3 rounded-full md:rounded-3xl'>
                  <Link href='https://www.linkedin.com/in/harmankhurmi/'><FaLinkedinIn className='text-dark' /></Link>
                </div>
                <div className='flex gap-2 lg:text-xl font-semibold uppercase text-dark transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl hover:shadow-second hover:shadow-[4px_4px_0px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-xl  bg-light border-2 border-second border-dotted p-2 md:p-3 rounded-3xl'>
                  <Link href='https://github.com/Harman-khurmi'><FiGithub className='text-dark' /></Link>
                </div>
                <div className='flex gap-2 lg:text-xl font-semibold uppercase text-dark transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl hover:shadow-second hover:shadow-[4px_4px_0px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-xl  bg-light border-2 border-second border-dotted p-2 md:p-3 rounded-3xl'>
                  <Link href='https://x.com/HarmanKhurmi3'><BsTwitterX className='text-dark' /></Link>
                </div>
                <div className='flex gap-2 lg:text-xl font-semibold uppercase text-dark transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl hover:shadow-second hover:shadow-[4px_4px_0px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-xl  bg-light border-2 border-second border-dotted p-2 md:p-3 rounded-3xl'>
                  <Link href='https://www.figma.com/@harmankhurmi'><TbBrandFigma className='text-dark' /></Link>
                </div>
                <div className='flex gap-2 lg:text-xl font-semibold uppercase text-dark transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl hover:shadow-second hover:shadow-[4px_4px_0px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-xl  bg-light border-2 border-second border-dotted p-2 md:p-3 rounded-3xl'>
                  <Link href='https://www.behance.net/harmankhurmi'><FaBehance className='text-dark' /></Link>
                </div>
              </div>

              <div>
                <Stats />
              </div>

            </div>
            <div className='order-1 lg:order-none relative'>
              <Photo />
            </div>
          </div>

          <div className=' order-3  hidden lg:flex flex-col ml-10 mr-0 items-center justify-center gap-7 md:gap-9'>
            <div className='flex gap-2 lg:text-xl font-semibold uppercase text-dark transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl hover:shadow-second hover:shadow-[4px_4px_0px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-xl  bg-light border-2 border-second border-dotted p-2 md:p-3 rounded-full md:rounded-3xl'>
              <Link href='https://www.linkedin.com/in/harmankhurmi/'><FaLinkedinIn className='text-dark' /></Link>
            </div>
            <div className='flex gap-2 lg:text-xl font-semibold uppercase text-dark transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl hover:shadow-second hover:shadow-[4px_4px_0px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-xl  bg-light border-2 border-second border-dotted p-2 md:p-3 rounded-3xl'>
              <Link href='https://github.com/Harman-khurmi'><FiGithub className='text-dark' /></Link>
            </div>
            <div className='flex gap-2 lg:text-xl font-semibold uppercase text-dark transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl hover:shadow-second hover:shadow-[4px_4px_0px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-xl  bg-light border-2 border-second border-dotted p-2 md:p-3 rounded-3xl'>
              <Link href='https://x.com/HarmanKhurmi3'><BsTwitterX className='text-dark' /></Link>
            </div>
            <div className='flex gap-2 lg:text-xl font-semibold uppercase text-dark transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl hover:shadow-second hover:shadow-[4px_4px_0px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-xl  bg-light border-2 border-second border-dotted p-2 md:p-3 rounded-3xl'>
              <Link href='https://www.figma.com/@harmankhurmi'><TbBrandFigma className='text-dark' /></Link>
            </div>
            <div className='flex gap-2 lg:text-xl font-semibold uppercase text-dark transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl hover:shadow-second hover:shadow-[4px_4px_0px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-xl  bg-light border-2 border-second border-dotted p-2 md:p-3 rounded-3xl'>
              <Link href='https://www.behance.net/harmankhurmi'><FaBehance className='text-dark' /></Link>
            </div>
          </div>
      </section>
        </motion.div>
    </>
  )
}

export default Home;

const BubbleText = () => {
  return (
    <h2 className="text-center text-4xl lg:text-6xl dark:font-thin font-bold  text-second">
      {"Harmanpreet Singh".split("").map((child, idx) => (
        <span className={`${styles.hoverText} duration-300 delay-200 transform transition-all min-w-1`} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};
