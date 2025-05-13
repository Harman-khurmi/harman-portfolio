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
import { HoverBorderGradient } from "../../components/ui/hover-border-gradient";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";
import { GrAchievement } from "react-icons/gr";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";


// Mapping of icon libraries
const iconLibraries = {
  fa: require("react-icons/fa"),
  si: require("react-icons/si"),
  io5: require("react-icons/io5"),
  ri: require("react-icons/ri"),
  io: require("react-icons/io"),
  tb: require("react-icons/tb"),
  bi: require("react-icons/bi"),
  gr: require("react-icons/gr"),
  fi: require("react-icons/fi"),
  // Add other libraries as needed
};

const getIconComponent = (library, iconName) => {
  const IconLibrary = iconLibraries[library];
  return IconLibrary ? IconLibrary[iconName] : null;
};

const resume = () => {
  return (
    <section className='text-dark dark:text-light flex lg:mx-6'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.4, ease: easeInOut } }}
        className='mt-8 container mx-auto'
      >
        <Tabs defaultValue="Experience" className="w-full min-h-full container mx-auto">
          <div className='gap-4 grid grid-cols-1 md:grid-cols-3 md:gap-6  lg:my-4.5'>
            <div className='col-span-1 items-center h-fit justify-center'>
              <TabsList className={`grid h-full gap-4 w-full`}>
                <TabsTrigger value="Experience" className={`p-4 px-10 w-52 hover:cursor-pointer hover:bg-fourth/10 transition-all`}>Experience</TabsTrigger>
                <TabsTrigger value="Education" className={`p-4 px-10 w-52 hover:cursor-pointer hover:bg-fourth/10 transition-all`}>Education</TabsTrigger>
                <TabsTrigger value="Skills" className={`p-4 px-10 w-52 hover:cursor-pointer hover:bg-fourth/10 transition-all`}>Skills</TabsTrigger>
                <TabsTrigger value="Projects & Achievements" className={`p-4 px-10 w-52 hover:cursor-pointer hover:bg-fourth/10 transition-all`}>Projects & Achievements</TabsTrigger>
                <TabsTrigger value="About me" className={`p-4 px-10 w-52 hover:cursor-pointer hover:bg-fourth/10 transition-all`}>About me</TabsTrigger>
              </TabsList>
            </div>
            <div className='col-span-2 px-6 md:px-0 w-full mt-6 md:mt-0'>
              <TabsContent value="Experience">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.4, ease: easeInOut } }}>
                  <div className='flex flex-col gap-4 items-center md:items-start'>
                    <h1 className='text-3xl'>{experience.title}</h1>
                    <p className='text-md text-justify'>{experience.description}</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.4, ease: easeInOut } }}
                  className='flex w-full items-center justify-center content-center py-10'
                >
                  <ScrollArea className="h-[18rem] w-full flex justify-center content-center">
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-center content-center place-content-center mx-auto gap-8'>
                      {experience.exp.map((item, index) => (
                        <HoverBorderGradient
                          containerClassName="rounded-md"
                          key={index}
                          as="button"
                          className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center w-full p-6 px-12"
                        >
                          <AceternityExperience key={index} item={item} className="" />
                        </HoverBorderGradient>
                      ))}
                    </div>
                  </ScrollArea>
                </motion.div>
              </TabsContent>

              <TabsContent value="Education">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.4, ease: easeInOut } }}>
                  <div className='flex flex-col gap-4 items-center md:items-start'>
                    <h1 className='text-3xl'>{education.title}</h1>
                    <p className='text-md text-justify'>{education.description}</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.4, ease: easeInOut } }}
                  className='flex w-full items-center justify-center content-center py-10'
                >
                  <ScrollArea className="h-[18rem] w-full flex justify-center content-center">
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-center content-center place-content-center mx-auto gap-8'>
                      {education.edu.map((item, index) => (
                        <HoverBorderGradient
                          containerClassName="rounded-md"
                          key={index}
                          as="button"
                          className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center w-full p-6 px-12"
                        >
                          <AceternityEducation key={index} item={item} className="" />
                        </HoverBorderGradient>
                      ))}
                    </div>
                  </ScrollArea>
                </motion.div>
              </TabsContent>

              <TabsContent value="Skills">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.4, ease: easeInOut } }}>
                  <div className='flex flex-col gap-4 items-center md:items-start'>
                    <h1 className='text-3xl'>{skills.title}</h1>
                    <p className='text-md text-justify'>{skills.description}</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.4, ease: easeInOut } }}
                  className='flex w-full items-center justify-center content-center py-10'
                >
                  <ScrollArea className="h-[18rem] w-full flex justify-center content-center">
                    <div className='flex flex-col gap-4'>
                      {skills.skill.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="w-full flex flex-col">
                          <h2 className="text-xl font-bold mb-6">{category.category}</h2>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 ">
                            {category.tech.map((item, index) => (
                              <TooltipProvider key={index}>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <div className="w-full">
                                      <HoverBorderGradient
                                        containerClassName="rounded-md"
                                        as="div"
                                        className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center w-full p-4"
                                      >
                                        <AceternitySkills item={item} />
                                      </HoverBorderGradient>
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{item.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </motion.div>
              </TabsContent>

              <TabsContent value="Projects & Achievements">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.4, ease: easeInOut } }}>
                  <div className='flex flex-col gap-4 items-center text-center md:text-start md:items-start'>
                    <h1 className='text-3xl'>{projects.title}</h1>
                    <p className='text-md text-justify'>{projects.description}</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.4, ease: easeInOut } }}
                  className='flex w-full items-center justify-center content-center py-10'
                >
                  <ScrollArea className="h-[18rem] w-full flex justify-center content-center pr-4">
                    <div className='flex flex-col lg:gap-24 md:gap-16 gap-8'>
                      {projects.content.map((section, sectionIdx) => (
                        <div key={sectionIdx} className="w-full flex flex-col">
                          <h2 className="text-xl font-bold mb-6">{section.subHead}</h2>
                          <div className="grid grid-cols-1 gap-4">
                            {section.list.map((item, idx) => (
                              <HoverBorderGradient
                                containerClassName="rounded-md"
                                as="div"
                                key={idx}
                                className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center w-full p-4"
                              >
                                <AceternityProject item={item} type={section.subHead} />
                              </HoverBorderGradient>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </motion.div>
              </TabsContent>

              <TabsContent value="About me">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.4, ease: easeInOut } }}>
                  <div className='flex flex-col gap-4 items-center md:items-start'>
                    <h1 className='text-3xl'>{aboutMe.title}</h1>
                    <p className='text-md text-justify'>{aboutMe.description}</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.4, ease: easeInOut } }}
                  className='flex w-full items-center justify-center content-center py-10'
                >
                  <ScrollArea className="h-[18rem] w-full flex justify-center content-center">
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-center content-center place-content-center mx-auto gap-8'>
                      {aboutMe.exp.map((item, index) => (
                        <div className="flex gap-4 lg:gap-6 items-center" key={index}>
                          <h2 className="text-second/60">{item.title}:</h2>
                          <h1 className="text-xl font-medium">{item.value}</h1>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </motion.div>
              </TabsContent>
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
      company: 'Digital Alpha Technologies',
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
  skill: [
    {
      category: "Frontend Development",
      tech: [
        { library: "fa", title: "FaHtml5", name: "HTML5" },
        { library: "fa", title: "FaCss3Alt", name: "CSS3" },
        { library: "io5", title: "IoLogoJavascript", name: "JavaScript" },
        { library: "fa", title: "FaReact", name: "React" },
        { library: "ri", title: "RiNextjsFill", name: "Next.js" },
        { library: "fa", title: "FaVuejs", name: "Vue.js" },
        { library: "ri", title: "RiTailwindCssFill", name: "Tailwind CSS" },
        { library: "fa", title: "FaBootstrap", name: "Bootstrap" },
        { library: "si", title: "SiGreensock", name: "GreenSock (GSAP)" },
        { library: "tb", title: "TbBrandFramerMotion", name: "Framer Motion" }
      ]
    },
    {
      category: "Backend & Databases",
      tech: [
        { library: "io", title: "IoLogoNodejs", name: "Node.js" },
        { library: "si", title: "SiExpress", name: "Express" },
        { library: "bi", title: "BiLogoMongodb", name: "MongoDB" },
        { library: "gr", title: "GrMysql", name: "MySQL" }
      ]
    },
    {
      category: "Programming Languages",
      tech: [
        { library: "tb", title: "TbBrandCpp", name: "C++" },
        { library: "fa", title: "FaPython", name: "Python" }
      ]
    },
    {
      category: "Tools & Others",
      tech: [
        { library: "fi", title: "FiFigma", name: "Figma" },
        { library: "si", title: "SiAdobecreativecloud", name: "Adobe Creative Cloud" },
        { library: "si", title: "SiSelenium", name: "Selenium" },
        { library: "fa", title: "FaGithub", name: "GitHub" },
        { library: "fa", title: "FaGitAlt", name: "Git" },
        { library: "fa", title: "FaAws", name: "AWS" }
      ]
    }
  ]
}
const projects = {
  title: 'My Projects & Achievements',
  description: "I have worked on various projects that showcase my skills in web development, mobile development, UI/UX design, and graphic design. I have created responsive websites, user-friendly mobile applications, and engaging user interfaces.",
  content: [

    {
      subHead: "Projects",
      list: [
        {
          title: 'Project Name',
          date: '2023-2024',
          toolsUsed: 'HTML, CSS, JavaScript, React',
          description: 'A brief description of the project and its features.A brief description of the project and its features.A brief description of the project and its features.',
          link: 'https://example.com'
        },
        {
          title: 'Project Name2',
          date: '2024-2025',
          toolsUsed: 'HTML, CSS, JavaScript, React',
          description: 'A brief description of the project and its features.',
          link: 'https://example2.com'
        },
      ]
    },
    {
      subHead: "Achievements",
      list: [
        {
          title: 'Achievement Name',
          description: 'Completed a fintech internship at Bluestock Fintech, contributing to key development projects and gaining hands-on industry experience',
          link: 'https://example.com',
          img: '/sample.jpeg'
        },
        {
          title: 'Achievement Name2',
          description: 'A brief description of the achievement and its significance.',
          link: 'https://example2.com',
          img: '/sample.jpeg'
        },

      ]
    },
  ]
}

const aboutMe = {
  title: 'About Me',
  description: "I am a passionate developer and designer with a keen eye for detail. I enjoy creating user-friendly applications and exploring new technologies. I am always eager to learn and grow in my field.",
  exp: [
    {
      title: 'Name',
      value: "Harmanpreet Singh"
    },
    {
      title: 'Phone',
      value: "+91 8264627072"
    },
    {
      title: 'Email',
      value: "harmankhurmi365@gmail.com"
    },
    {
      title: 'Experience',
      value: "3+ Years"
    },
    {
      title: 'Freelance',
      value: "Available"
    },
    {
      title: 'Nationality',
      value: "Indian"
    },
    {
      title: 'GitHub',
      value: "Harman-khurmi"
    },
    {
      title: 'Figma Community',
      value: "@harmankhurmi"
    },
    {
      title: 'Behance',
      value: "harmankhurmi"
    },
    {
      title: 'Languages',
      value: "English, Hindi, Punjabi"
    },
  ],
}

const AceternityExperience = ({ item }) => {

  return (
    <>
      <div
        className="flex flex-col w-full text-lg font-bold gap-2 items-center p-4"
      >
        <h1 className="text-xl md:text-2xl">{item.position}</h1>
        {/* <div className="blink"></div> */}
        <p className="text-fourth">{item.duration}</p>
        <p className="">{item.company}</p>
      </div>
    </>
  );
};

const AceternityEducation = ({ item }) => {
  return (
    <>
      <div
        className="flex flex-col text-lg font-bold gap-2 items-center p-4"
      >
        <h1 className="text-xl md:text-2xl">{item.degree}</h1>
        <div className="flex gap-3 items-center">
          {/* <div className="blink"></div> */}
          <p className="text-fourth">{item.duration}</p>
        </div>
        <p className="">{item.institution}</p>
      </div>
    </>
  );
};

const AceternitySkills = ({ item }) => {
  const IconComponent = getIconComponent(item.library, item.title);
  return (
    <>
      <div className="">
        <div className="text-5xl p-8">
          {IconComponent ? <IconComponent /> : null}
        </div>
      </div>
    </>
  );
};
const AceternityProject = ({ item, type }) => {
  return (
    <div className="flex w-full flex-col text-lg font-bold gap-2 items-start p-4">

      {type === "Projects" && (
        <>
          <div className="flex items-center justify-between w-full">
            <h1 className="text-xl md:text-2xl">{item.title}</h1>
            <p className="text-sm italic">[{item.date}]</p>
          </div>
          <p className="text-sm text-fourth">{item.toolsUsed}</p>
          <p className="text-neutral-500">{item.description}</p>
          <button
            onClick={() => window.open(item.link, "_blank")}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className=" flex lg:text-xl border-2 border-dashed border-second bg-white font-semibold text-dark  duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-second hover:shadow-[4px_4px_0px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-sm mt-2  items-center gap-2 group hover:cursor-pointer hover:dark:bg-black hover:dark:text-white hover:bg-neutral-50   transition-all p-2 px-3 rounded-xl">
            <p className="text-sm  transition-all delay-75">View Project</p>
            <MdArrowOutward className="inline-block group-hover:rotate-45 transition-all delay-75 group-hover:animate-bounce" />
          </button>
        </>

      )}
      {type === "Achievements" && item.link && (
        <>
          <div className="flex items-center justify-between w-full gap-12">
            <div className="flex flex-col w-full">
              <h1 className="text-xl md:text-2xl">{item.title}</h1>
              <p className="text-neutral-500">{item.description}</p>
            </div>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="block mb-2">
              {item.img && (
                <Image
                  src={item.img}
                  alt={item.title}
                  width={260}
                  height={260}
                  className="rounded-lg object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              )}
            </a>
          </div>
          {/* <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-sm mt-2"
          >
            More Info
          </a> */}
        </>
      )}
    </div>
  );
};