import React from 'react'
import { navItems } from '../constants'
import logo from '../assets/logo.jpeg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {

    useGSAP(() => {
        // Entrance animation
        gsap.from('nav', {
            y: -100,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
        });

        // Scroll animation for background
        gsap.to('nav', {
            backgroundColor: '#000000c0',
            backdropFilter: 'blur(16px)',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            scrollTrigger: {
                trigger: 'body',
                start: 'top -50',
                end: 'top -150',
                scrub: true,
            }
        });
    })

    return (
        <nav className='fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm bg-black/10'>
            <div className='flex items-center justify-between py-4 px-10 md:px-20'>
                <a href="#home" className='hover:scale-110 transition-transform'>
                    <img src={logo} alt="logo" className="w-[50px] md:w-[62px] h-auto object-contain rounded-lg border border-red-500/20" />
                </a>
                <ul className='hidden md:flex items-center gap-8'>
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className="text-white hover:text-red-500 transition-colors font-bold uppercase tracking-widest text-sm">{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="md:hidden">
                    {/* Mobile menu toggle would go here */}
                    <button className="text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation