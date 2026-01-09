import { navItems } from '@/constants'
import React from 'react'


const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <section className='relative'>
            <div className='flex justify-between pr-20'>
                <img src="fourth.png" alt="fourth" className='w-70 h-auto' />
                <img src="five.png" alt="five" className='w-70 h-auto' />
            </div>
            <div className='absolute top-18 left-1/2 transform -translate-x-1/2'>
                <img src="marvel.png" alt="marvel" className='relative top-0 w-70 h-auto ' />
            </div>
            <div className='absolute top-45 left-1/2 transform -translate-x-1/2 flex justify-center gap-12 mt-20 '>
                {navItems.map((item) => (
                    <a key={item.label} href={item.href} className='text-white'>{item.label}</a>
                ))}
            </div>
            <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center gap-12 mt-20 '>
                <p>© {currentYear} Spider-Man. All rights reserved.</p>
            </div>
        </section>
    )
}

export default Footer