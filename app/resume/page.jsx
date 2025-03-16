'use client'
import React, { useRef } from "react";
import {
  easeInOut,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FaRegHandPointer } from "react-icons/fa";

import { LuMousePointerClick } from "react-icons/lu";
import { GiClick } from "react-icons/gi";
import ClipPathLinks from "@/components/ClipPathLinks";
import { FaReact } from "react-icons/fa";
import { HoverBorderGradient } from "../../components/ui/hover-border-gradient";

const resume = () => {
  return (
    <section className='text-dark dark:text-light flex lg:mx-6'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5, ease: easeInOut } }}
        className='mt-8 container mx-auto'
      >
        <Tabs defaultValue="Experience" className="w-full min-h-full container mx-auto">
          <div className='gap-4 grid grid-cols-1 md:grid-cols-3 md:gap-6  lg:my-4.5'>
            <div className='col-span-1 items-center h-fit justify-center'>
              <TabsList className={`grid h-full gap-4 w-full`}>
                <TabsTrigger value="Experience" className={`p-4 px-10 w-52`}>Experience</TabsTrigger>
                <TabsTrigger value="Education" className={`p-4 px-10 w-52`}>Education</TabsTrigger>
                <TabsTrigger value="Skills" className={`p-4 px-10 w-52`}>Skills</TabsTrigger>
                <TabsTrigger value="About me" className={`p-4 px-10 w-52`}>About me</TabsTrigger>
              </TabsList>
            </div>
            <div className='col-span-2 px-6 md:px-0 w-full mt-6 md:mt-0'>
              <TabsContent value="Experience">
                <div className='flex flex-col gap-4 items-center md:items-start'>
                  <h1 className='text-3xl'>{experience.title}</h1>
                  <p className='text-md text-justify'>{experience.description}</p>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5, ease: easeInOut } }}
                  className='flex w-full items-center justify-center content-center py-10'
                >
                  {/* grid grid-cols-1 lg:grid-cols-2 */}
                  <ScrollArea className="h-[18rem] w-full flex justify-center content-center">
                    <div className='flex flex-wrap w-full items-center justify-start mx-auto gap-8'>
                      {experience.exp.map((item, index) => (
                        <HoverBorderGradient
                          containerClassName="rounded-md"
                          key={index}
                          as="button"
                          className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center w-full p-6 px-12"
                        >
                          <AceternityLogo key={index} item={item}/>
                        
                        </HoverBorderGradient>
                        // <TiltCard key={index} item={item} />
                      ))}
                    </div>
                  </ScrollArea>
                </motion.div>
              </TabsContent>

              <TabsContent value="Education">
                <div className='flex flex-col gap-4 items-center md:items-start'>
                  <h1 className='text-3xl'>{education.title}</h1>
                  <p className='text-md text-justify'>{education.description}</p>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5, ease: easeInOut } }}
                  className='flex w-full items-center justify-center content-center py-10'
                >
                  <ScrollArea className="h-[18rem] w-full flex justify-center content-center">
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-center content-center place-content-center mx-auto gap-8'>
                      {education.edu.map((item, index) => (
                        <TiltCardEdu key={index} item={item} />
                      ))}
                    </div>
                  </ScrollArea>
                </motion.div>
              </TabsContent>

              <TabsContent value="Skills">
                <div className='flex flex-col gap-4 items-center md:items-start'>
                  <h1 className='text-3xl'>{skills.title}</h1>
                  <p className='text-md text-justify'>{skills.description}</p>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5, ease: easeInOut } }}
                  className='flex w-full items-center justify-center content-center py-10'
                >
                  <ScrollArea className="h-[18rem] w-full flex justify-center content-center">
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-center content-center place-content-center mx-auto gap-8'>
                      {skills.logos.map((item, index) => (
                        <ClipPathLinks key={index} item={item} />
                      ))}
                    </div>
                  </ScrollArea>
                </motion.div>
              </TabsContent>

              <TabsContent value="About me">Change your password here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus assumenda asperiores natus, repudiandae illo sunt alias vero quis obcaecati, blanditiis, saepe totam magnam! Tempora provident ad aliquam magni adipisci eos!</TabsContent>
            </div>
          </div>
        </Tabs>
      </motion.div>
    </section>
  )
}

export default resume

const experience = {
  icon: "",
  title: 'My Experience',
  description: "I have 3+ years of experience in web development, mobile development, UI/UX design, and graphic design. I have worked on various projects and have gained valuable experience in creating user-friendly applications. I am proficient in HTML, CSS, JavaScript, Dart, Flutter, Figma, Adobe Illustrator, and Adobe Photoshop. I am always looking for new challenges and opportunities to grow as a developer.",
  exp: [
    {
      company: 'Company Name',
      position: 'Web Developer',
      duration: '2020 - Present',
      description: 'I create responsive websites that allow the user to experience your website in the best and most appropriate way.',
    },
    {
      company: 'Company Name',
      position: 'Mobile Developer',
      duration: '2018 - 2020',
      description: 'I create mobile applications that are user-friendly and fully functional. I use Dart and Flutter to build mobile applications.',
    },
    {
      company: 'Company Name',
      position: 'UI/UX Designer',
      duration: '2016 - 2018',
      description: 'I create user interfaces that are intuitive, easy to use, and engaging. I use Figma to design user interfaces.',
    },
    {
      company: 'Company Name',
      position: 'Graphic Designer',
      duration: '2014 - 2016',
      description: 'I create visual concepts that inspire, inform, and transform. I use Adobe Illustrator and Adobe Photoshop to create visual concepts.',
    },
  ],
}

const education = {
  title: 'My Education',
  description: "I have a strong educational background in computer science and design. I have completed various courses and certifications to enhance my skills and knowledge.",
  edu: [
    {
      institution: 'University Name',
      degree: 'Bachelor of Science in Computer Science',
      duration: '2016 - 2020',
      description: 'I studied computer science and gained a solid foundation in programming, algorithms, and software development.',
    },
    {
      institution: 'Design School',
      degree: 'Diploma in Graphic Design',
      duration: '2014 - 2016',
      description: 'I completed a diploma in graphic design, where I learned about design principles, typography, and visual communication.',
    },
  ],
}

const skills = {
  title: 'My Skills',
  description: "I have a diverse set of skills in web development, mobile development, UI/UX design, and graphic design. I am proficient in various programming languages and design tools.",
  logos: [
    {
      skill: "FaReact",
      // level: 'Expert',
    },
    {
      skill: "FaReact",
      // level: 'Expert',
    },

  ],
}

const aboutMe = {
  icon: "",
  title: 'About Me',
  description: "I am a passionate developer and designer with a keen eye for detail. I enjoy creating user-friendly applications and exploring new technologies. I am always eager to learn and grow in my field.",
  exp: [
    {
      hobby: 'Coding',
      description: 'I love coding and building new projects. It allows me to solve problems and create innovative solutions.',
    },
    {
      hobby: 'Designing',
      description: 'Designing is my passion. I enjoy creating visually appealing and user-friendly designs.',
    },
    {
      hobby: 'Reading',
      description: 'I like to read books and articles about technology, design, and personal development.',
    },
    {
      hobby: 'Traveling',
      description: 'Traveling helps me to explore new cultures and gain new perspectives. It also inspires my creativity.',
    },
  ],
}

const AceternityLogo = ({ item }) => {
  return (
    <>
      <div
          className="flex flex-col text-lg font-bold gap-2 items-center p-4"
        >
          <h1 className="text-xl md:text-2xl">{item.position}</h1>
          <div className="flex gap-3 items-center">

            {/* <div className="blink"></div> */}
            <p className="text-fourth">{item.duration}</p>
          </div>
          <p className="">{item.company}</p>
          </div>
    </>
  );
};

const TiltCard = ({ item }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * 32.5;
    const mouseY = (e.clientY - rect.top) * 32.5;

    const rX = (mouseY / height - 32.5 / 2) * -1;
    const rY = mouseX / width - 32.5 / 2;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-48 md:h-60 rounded-xl bg-gradient-to-br from-third to-fourth"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg p-4 md:p-2"
      >
        {/* content */}
        <div
          style={{
            transform: "translateZ(50px)",
          }}
          className="flex flex-col text-lg font-bold text-black gap-2 items-center"
        >
          <h1 className="text-xl md:text-2xl">{item.position}</h1>
          <div className="flex gap-3 items-center">

            <div className="blink"></div>
            <p className="text-fourth">{item.duration}</p>
          </div>
          <p className="">{item.company}</p>

          <LuMousePointerClick
            style={{
              transform: "translateZ(75px)",
            }}
            className="absolute -bottom-7 -right-8  md:-bottom-10 md:-right-16 mx-auto text-3xl lg:text-4xl text-fourth"
          />
          {/* <GiClick
          style={{
            transform: "translateZ(75px)",
          }}
          className="absolute lg:hidden not-hidden bottom-2  -rotate-6 lg:-rotate-30  right-2 mx-auto text-3xl lg:text-4xl text-fourth"
          /> */}
        </div>
      </div>
    </motion.div>
  );
};


const TiltCardEdu = ({ item }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * 32.5;
    const mouseY = (e.clientY - rect.top) * 32.5;

    const rX = (mouseY / height - 32.5 / 2) * -1;
    const rY = mouseX / width - 32.5 / 2;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-48 md:h-60 rounded-xl bg-gradient-to-br from-third to-fourth"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg p-4 md:p-2"
      >
        {/* content */}
        <div
          style={{
            transform: "translateZ(50px)",
          }}
          className=" relative flex flex-col text-lg font-bold text-black gap-2 items-center justify-center text-center"
        >
          <h1 className="text-xl md:text-2xl">{item.degree}</h1>
          <div className="flex gap-3 items-center">

            <div className="blink"></div>
            <p className="text-fourth">{item.duration}</p>
          </div>
          <p className="">{item.institution}</p>

          <LuMousePointerClick
            style={{
              transform: "translateZ(75px)",
            }}
            className="absolute -bottom-3 -right-2  md:-bottom-6 md:-right-0 mx-auto text-3xl lg:text-4xl text-fourth"
          />
          {/* <GiClick
          style={{
            transform: "translateZ(75px)",
          }}
          className="absolute lg:hidden not-hidden bottom-2  -rotate-6 lg:-rotate-30  right-2 mx-auto text-3xl lg:text-4xl text-fourth"
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

