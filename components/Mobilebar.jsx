'use client';
import React from 'react'
import * as motion from "motion/react-client"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Resume', path: '/resume' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' },
]

export default function MobileNavbar() {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  console.log(pathname);


  return (
    <div className="relative">
    
      {/* Menu Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} style={toggleButtonStyle}>
        {isOpen ? <RxCross2 className={`bg-light/30 rounded-full text-4xl md:text-5xl py-2 relative z-100 ${isOpen ? "text-dark" : "bg-dark/20"}`} /> : <HiOutlineMenuAlt3 className={` text-4xl md:text-5xl bg-second/20 rounded-full  py-2 relative z-100 ${isOpen ? "text-dark" : ""}`} />}
      </button>

      {/* Full-screen Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        style={menuStyle}
        className="relative"
      />
      {isOpen ? <div className="flex flex-col gap-8 items-start content-start absolute top-30 right-30 text-dark z-100 opacity-100 duration-300 delay-500 transition-all ease-in-out">
        {/*  */}
        <div>
          <ul className='flex flex-col items-start max-w-16 gap-8'>
            {routes.map((route, index) => (
              <Button variant="link" key={index} className={`text-light text-4xl p-0`}>
                <Link href={route.path} className={`${pathname === route.path ? "border-light  !text-light font-bold" : "!text-dark"} cursor-pointer transition-all  ease-in-out text-!primary w-16 hover:!text-light hover:font-bold m-2 py-2 min-w-fit`}>
                  {route.name}
                </Link>
              </Button>
            ))}
          </ul>
        </div>
        {/*  */}
        <div>
          <Link href="/services" passHref>
          <Button variant="outline" className={`rounded-3xl border-2 border-dashed border-second bg-white px-8 py-7 font-bold uppercase text-dark text-xl transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-lg hover:shadow-light hover:shadow-[4px_4px_0px] active:shadow-[6px_6px_0px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl `}>Hire me</Button>
          </Link>
        </div>

        {/* dark toggler */}

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
