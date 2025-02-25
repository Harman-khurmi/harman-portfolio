'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"

const routes = [
    { name: 'Home', path: '/',color:'text-second' },
    { name: 'Services', path: '/services',color:'third' },
    { name: 'Resume', path: '/resume' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' },
]

const Nav = () => {
    const pathname = usePathname()
    console.log(pathname);

    return (
        <div className=''>
            <ul className='flex'>
                {routes.map((route, index) => (
                    <Button variant="link" key={index} className={`text-second text-md`}>
                        <Link href={route.path} className={`${pathname === route.path ? " border-second !text-second font-bold" : "!text-dark dark:!text-light"} cursor-pointer transition-all  ease-in-out  hover:!text-second  m-2 py-2`}>
                            {route.name}
                        </Link>
                    </Button>
                ))}
            </ul>
        </div>
    )
}

export default Nav