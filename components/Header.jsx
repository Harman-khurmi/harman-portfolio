'use client'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.svg'
import Link from 'next/link'
import Nav from './Nav'
import { FiMenu } from "react-icons/fi";
import { Button } from "@/components/ui/button"
import Mobilebar from './Mobilebar'

const Header = () => {
    const { setTheme } = useTheme()
    return (
        <div className='w-full mx-auto flex justify-between items-center py-3  md:py-5 px-8 md:px-10 lg:px-32 min-h-20'>
            <div className='flex mx-auto w-full gap-46 justify-between  '>
                <div>
                    <Link href={'/'} passHref>
                        <Image src={logo} className='w-12 md:w-14 shrink-0' alt='logo'></Image>
                    </Link>
                </div>
                <div className='lg:hidden flex relative mt-3 md:mt-7 mr-6 md:mr-10 cursor-pointer  '>
                    {/* <FiMenu /> */}
                    <Mobilebar/>

                </div> 
            </div>
            <div className='hidden lg:flex items-center gap-10'>

                <div className=''>
                    <Nav className="hidden md:flex" />
                </div>
                <div>
                    <Button variant="outline" className={`rounded-3xl border-2 border-dashed border-second bg-white px-6 py-5 font-semibold uppercase text-dark transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-lg hover:shadow-second hover:shadow-[4px_4px_0px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none`}>Hire me</Button>
                </div>
                <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className={`rounded-full`} size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            </div>
        </div>
    )
}

export default Header
