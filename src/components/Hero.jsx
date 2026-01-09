import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

    useGSAP(() => {
        // Entrance animation
        gsap.from('#hero-text', {
            y: 30,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.2
        });

        // Scroll animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        });

        tl.to('#hero-img', {
            y: 100,
            scale: 1.1,
            filter: 'blur(10px)',
            opacity: 0.5,
        }, 0);

        tl.to('#hero-text', {
            y: -150,
            opacity: 0,
            filter: 'blur(5px)',
        }, 0);

        tl.to('#hero-section', {
            backgroundPosition: '50% 100%',
            opacity: 0.8,
        }, 0);
    });


    return (
        <section id="hero-section" className='relative min-h-dvh bg-cover bg-no-repeat bg-center overflow-hidden' style={{ backgroundImage: "url('/herobg.jpeg')" }}>
            <div className=''>
                <img id="hero-img" src="/first.png" alt="Hero Image" className='absolute top-0 left-0 w-full h-full object-cover z-0' />
            </div>
            <div id='hero-text' className='absolute top-[16%] ml-8 z-10'>
                <p className='text-[25px] ml-[185px] text-white-100'>Hey Nice to meet you I'm</p>
                <h1 className="text-[135px] -tracking-widest text-white-100">SPIDERMAN</h1>
                <p className='text-[25px] ml-[120px] mt-2 text-white-100'>Always at a service for my town 🫡</p>
            </div>

        </section >
    )
}

export default Hero