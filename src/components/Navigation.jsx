import React from 'react'
import { navItems } from '../constants'
import logo from '../assets/logo.jpeg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {

    useGSAP(() => {
        gsap.to('nav', {
            backgroundColor: '#00000090',
            backdropFilter: 'blur(12px)',

            scrollTrigger: {
                trigger: 'body',
                start: 'top -50',
                end: 'top -100',
                scrub: true,
            }
        });
    })

    return (
        <nav className='fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm bg-black/10'>
            <div className='flex items-center justify-between py-2 px-20 '>
                <a href="#home" className='hover:scale-105 transition-transform'>
                    <img src={logo} alt="logo" className="w-[62px] h-[62px] object-contain rounded-lg" />
                </a>
                <ul className='flex items-center gap-8'>
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className="text-white hover:text-red-500 transition-colors font-medium">{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navigation