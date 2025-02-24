'use client';
// import React from 'react'
// import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
// import { useState } from "react"
import { HiOutlineMenuAlt3 } from "react-icons/hi";

// const Mobilebar = () => {
//   const [isVisible, setIsVisible] = useState(true)
//   return (
//     <div>
//       <AnimatePresence initial={false}>
//         {isVisible ? (
//           <motion.div className='absolute top-0 right-0 h-screen w-screen bg-second' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

//           </motion.div>
//         ) : null}
//       </AnimatePresence>
//       <motion.button
//         // style={button}
//         className='z-100 absolute'
//         onClick={() => setIsVisible(!isVisible)}
//         whileTap={{ y: 1 }}
//       >
//         {/* {isVisible ? "Hide" : "Show"} */}
//         <HiOutlineMenuAlt3 className={`${isVisible ? "text-white" : ""}`} />
//       </motion.button>
//     </div>
//   )
// }

// export default Mobilebar

// const container = {
//   display: "flex",
//   flexDirection: "column",
//   width: 100,
//   height: 160,
//   position: "relative",
// }

// const box = {
//   width: 100,
//   height: 100,
//   backgroundColor: "#0cdcf7",
//   borderRadius: "10px",
// }

// // const button = {
// //   backgroundColor: "#0cdcf7",
// //   borderRadius: "10px",
// //   padding: "10px 20px",
// //   color: "#0f1115",
// //   // position: "absolute",
// //   // bottom: 0,
// //   // left: 0,
// //   // right: 0,
// // }

// "use client";
// 
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Resume', path: '/resume' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' },
]

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  console.log(pathname);

  return (
    <div style={{ position: "relative" }} className="mr-10">
      {/* Menu Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} style={toggleButtonStyle}>
        {isOpen ? <RxCross2 className={`bg-light/30 rounded-full text-4xl py-2 relative z-100 ${isOpen ? "text-dark" : "bg-dark/20"}`} /> : <HiOutlineMenuAlt3 className={` text-4xl bg-second/20 rounded-full  py-2 relative z-100 ${isOpen ? "text-dark" : ""}`} />}
      </button>

      {/* Full-screen Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        style={menuStyle}
        className="relative"
      />
      {isOpen ? <div className="absolute top-50 right-20 text-dark z-100 opacity-100 duration-300 delay-500 transition-all ease-in-out">
        <ul className='flex flex-col items-start gap-8'>
          {routes.map((route, index) => (
            <Button variant="link" key={index} className={`text-light text-4xl`}>
              <Link href={route.path} className={`${pathname === route.path ? " border-light border-b-2 !text-light font-bold" : "!text-dark"} cursor-pointer transition-all  ease-in-out text-!primary  hover:!text-light hover:font-bold m-2 py-2`}>
                {route.name}
              </Link>
            </Button>
          ))}
        </ul>
      </div> : <div className="opacity-0"></div>}
    </div>
  );
}

/** Animation Variants */
const menuVariants = {
  open: {
    clipPath: "circle(140% at 90% 5%)",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 20,
      damping: 8,
    },
  },
  closed: {
    clipPath: "circle(0% at 90% 12%)",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

/** Styles */
const toggleButtonStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 90,
  background: "transparent",
  border: "none",
  cursor: "pointer",
};

const menuStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "#8c84fe",
  zIndex: 80,
};
