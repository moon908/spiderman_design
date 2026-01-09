import { navItems } from '@/constants'
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

    const currentYear = new Date().getFullYear();

    useGSAP(() => {
        gsap.from('#footer-spidey-left', {
            scrollTrigger: {
                trigger: 'footer',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: 1,
            },
            x: -200,
            opacity: 0,
        });

        gsap.from('#footer-spidey-right', {
            scrollTrigger: {
                trigger: 'footer',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: 1,
            },
            x: 200,
            opacity: 0,
        });

        gsap.from('#footer-marvel', {
            scrollTrigger: {
                trigger: 'footer',
                start: 'top 80%',
                end: 'top 50%',
                scrub: true,
            },
            scale: 0.5,
            opacity: 0,
        });

        gsap.from('.footer-link', {
            scrollTrigger: {
                trigger: 'footer',
                start: 'top 70%',
                end: 'top 40%',
                scrub: true,
            },
            y: 20,
            opacity: 0,
            stagger: 0.1,
        });
    });

    return (
        <footer className='relative bg-zinc-950 pt-32 pb-10 px-10 overflow-hidden'>
            <div className='flex justify-between items-end max-w-7xl mx-auto'>
                <img id="footer-spidey-left" src="fourth.png" alt="fourth" className='w-40 md:w-70 h-auto' />
                <img id="footer-spidey-right" src="five.png" alt="five" className='w-40 md:w-70 h-auto' />
            </div>

            <div className='absolute top-10 left-1/2 transform -translate-x-1/2'>
                <img id="footer-marvel" src="marvel.png" alt="marvel" className='w-40 md:w-60 h-auto opacity-50' />
            </div>

            <div className='flex flex-wrap justify-center gap-8 md:gap-12 mt-20'>
                {navItems.map((item) => (
                    <a key={item.label} href={item.href} className='footer-link text-zinc-400 hover:text-red-500 transition-colors uppercase font-bold tracking-widest text-sm'>
                        {item.label}
                    </a>
                ))}
            </div>

            <div className='mt-20 pt-10 border-t border-zinc-900 flex justify-center'>
                <p className='text-zinc-600 text-sm'>© {currentYear} Spider-Man. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer