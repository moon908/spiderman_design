import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {

    useGSAP(() => {
        gsap.from('#gallery-img', {
            scrollTrigger: {
                trigger: '#gallery-section',
                start: 'top 80%',
                end: 'top 20%',
                scrub: 1,
            },
            scale: 1.2,
            filter: 'blur(10px)',
            opacity: 0,
        });

        gsap.from('#gallery-text', {
            scrollTrigger: {
                trigger: '#gallery-section',
                start: 'top 50%',
                end: 'top 30%',
                scrub: true,
            },
            y: 50,
            opacity: 0,
        });
    });

    return (
        <section id="gallery-section" className='relative w-full overflow-hidden py-20'>
            <div className='flex items-center justify-center'>
                <img
                    id="gallery-img"
                    src="/gallerypng.png"
                    alt="gallery"
                    className='w-full max-w-7xl h-auto object-contain px-4'
                />
            </div>
            <div id="gallery-text" className='mt-10'>
                <p className='text-4xl md:text-6xl font-semibold flex justify-center items-center text-white-100 uppercase tracking-tighter'>
                    Spidey's Gallery
                </p>
            </div>
        </section>
    )
}

export default Gallery