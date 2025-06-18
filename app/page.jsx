'use client'
import React from 'react'
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
import { easeInOut, motion } from 'framer-motion';
import SplitText from '@/components/SplitText/SplitText';
import { TextEffect } from '@/components/motion-primitives/text-effect';
import TextPressure from '@/components/TextPressure/TextPressure';
import { useRef, useEffect } from 'react';
import BlurText from "@/components/BlurText/BlurText";
import VariableProximity from '@/components/VariableProximity/VariableProximity';

const Home = () => {
  const containerRef = useRef(null);

  const resumeUrl = "https://drive.google.com/file/d/1_zZiuKD5VMfSwPiCNLCkNyKO0SwuCzni/view?usp=sharing";

  const socialBtnDesktop = "flex gap-2 lg:text-xl font-semibold uppercase text-dark transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl hover:shadow-second hover:shadow-[4px_4px_0px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-xl  bg-light border-2 border-second border-dotted p-2 md:p-3 rounded-full md:rounded-3xl dark:hover:bg-dark dark:hover:text-white group hover:bg-gray-100 hover:text-dark";

  const socialBtnMobile = "flex gap-2 lg:text-xl font-semibold uppercase text-dark transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl hover:shadow-second hover:shadow-[4px_4px_0px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-xl  bg-light border-2 border-second border-dotted p-2 md:p-3 rounded-full md:rounded-3xl";
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
                <SplitText
                  text="Hello, I'm"
                  delay={100}
                  duration={1}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"

                />

                <div className='lg:flex-row lg:gap-4 flex flex-col items-center text-center font-extrabold text-second'>
                  <BlurText
                    text="Harmanpreet"
                    delay={150}
                    animateBy="letters"
                    direction="top"
                    className="text-4xl md:text-5xl lg:text-6xl"
                  />
                  <BlurText
                    text="Singh"
                    delay={200}
                    animateBy="letters"
                    direction="top"
                    className="text-4xl md:text-5xl lg:text-6xl"
                  />
                </div>

                {/* <div className='w-full hidden lg:grid place-content-center cursor-crosshair'><BubbleText /></div> */}
               <div className='lg:flex gap-4 font-bold hidden'>
                   {/* <div style={{ position: 'relative', height: '100px', width: '100%' }}>
                    <TextPressure
                      text="Harmanpreet"
                      flex={true}
                      alpha={false}
                      stroke={false}
                      width={true}
                      weight={true}
                      italic={true}
                      textColor="#8c84fe"
                      strokeColor="#ff0000"
                      minFontSize={96}
                    />
                  </div>
                  <div style={{ position: 'relative', height: '100px', width: '100%' }}>
                    <TextPressure
                      text="Singh"
                      flex={true}
                      alpha={false}
                      stroke={false}
                      width={true}
                      weight={true}
                      italic={true}
                      textColor="#8c84fe"
                      strokeColor="#ff0000"
                      minFontSize={96}
                    />
                  </div>
                </div> */}
                {/* <div
                  ref={containerRef}
                  style={{ position: 'relative' }}
                >
                  <VariableProximity
                    label={'Harmanpreet Singh'}
                    className={'variable-proximity-demo text-first'}
                    fromFontVariationSettings="'wght' 400, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={200}
                    falloff='linear'
                  />
                </div> */}
                </div>

              </div>
              <div className='text-sm md:text-lg lg:text-xl justify-center lg:text-left max-w-[24rem] md:max-w-[32rem] text-center lg:max-w-[44rem]'>
                <TextEffect per='char' preset='fade'>
                  I'm a Full Stack developer and UI/UX designer with 2 years of experience crafting web products and brand identities. I love finding creative, efficient solutions that turn ideas into standout digital experiences.
                </TextEffect>
              </div>
              <div className='mt-4'>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className={`flex gap-2 text-lg lg:text-xl rounded-3xl border-2 border-dashed border-second bg-white lg:px-10 lg:py-6 py-5 font-semibold uppercase text-dark transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-lg hover:shadow-second hover:shadow-[4px_4px_0px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none`}>
                    <span>Downlaod CV</span>
                    <HiDownload />
                  </Button>
                </a>
              </div>

              {/* socials for mobile*/}

              <div className='lg:hidden mx-auto flex flex-wrap items-center justify-center gap-7 md:gap-9 mt-6'>
                <div className={socialBtnMobile}>
                  <Link href='https://www.linkedin.com/in/harmankhurmi/'><FaLinkedinIn className='text-dark' /></Link>
                </div>
                <div className={socialBtnMobile}>
                  <Link href='https://github.com/Harman-khurmi'><FiGithub className='text-dark' /></Link>
                </div>
                <div className={socialBtnMobile}>
                  <Link href='https://x.com/HarmanKhurmi3'><BsTwitterX className='text-dark' /></Link>
                </div>
                <div className={socialBtnMobile}>
                  <Link href='https://www.figma.com/@harmankhurmi'><TbBrandFigma className='text-dark' /></Link>
                </div>
                <div className={socialBtnMobile}>
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
          {/* socials for desktop */}
          <div className=' order-3  hidden lg:flex flex-col ml-10 mr-0 items-center justify-center gap-7 md:gap-9'>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/harmankhurmi/' className={socialBtnDesktop}>
              <button ><FaLinkedinIn className='text-dark dark:group-hover:text-white ' /></button>
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/Harman-khurmi' className={socialBtnDesktop}>
              <button ><FiGithub className='text-dark dark:group-hover:text-white ' /></button>
            </a>
            <a href='https://x.com/HarmanKhurmi3' target='_blank' rel='noopener noreferrer' className={socialBtnDesktop}>
              <button ><BsTwitterX className='text-dark dark:group-hover:text-white ' /></button>
            </a>
            <a href='https://www.figma.com/@harmankhurmi' target='_blank' rel='noopener noreferrer' className={socialBtnDesktop}>
              <button ><TbBrandFigma className='text-dark dark:group-hover:text-white ' /></button>
            </a>
            <a href='https://www.behance.net/harmankhurmi' target='_blank' rel='noopener noreferrer' className={socialBtnDesktop}>
              <button ><FaBehance className='text-dark dark:group-hover:text-white ' /></button>
            </a>
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default Home;

