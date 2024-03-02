"use client"
import { NAVLINKS } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Navigation = () => {
    const [isRouting, setIsRouting] = useState(false)
    const path = usePathname()
    const [prevPath, setPrevPath] = useState('/')


    useEffect(() => {
        if (prevPath !== path) {
            setIsRouting(true)
        }
    }, [path, prevPath])

    useEffect(() => {
        if (isRouting) {
            setPrevPath(path)
            const timeout = setTimeout(() => {
                setIsRouting(false)
            }, 1200)
            return () => clearTimeout(timeout)
        }
    }, [isRouting])

    return (
        <div
            className='absolute z-[50] -bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center border border-white py-7'
            style={{ left: '20%' }}
        >
            {NAVLINKS.map(navLink => (
                <Link
                    key={navLink.name}
                    href={navLink.link}
                    className='mb-16 pl-4 min-w-[20%]'
                >
                    <navLink.icon className={`w-[24px] h-[24px] ${path === navLink.name ? 'text-purple-800' : 'text-white'}`} />
                </Link>
            ))}
        </div>
    )
}

export default Navigation