import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(() => {
        // Section background fade and blur in
        gsap.from('#about-section', {
            scrollTrigger: {
                trigger: '#about-section',
                start: 'top bottom',
                end: 'top center',
                scrub: true,
            },
            filter: 'blur(20px)',
            opacity: 0,
        });

        // Title reveal (Fade in)
        gsap.from('#about-title', {
            scrollTrigger: {
                trigger: '#about-section',
                start: 'top 80%',
                end: 'top 50%',
                scrub: true,
            },
            x: 50,
            opacity: 0,
            filter: 'blur(10px)',
        });

        // Details reveal (Fade in)
        gsap.from('#about-text', {
            scrollTrigger: {
                trigger: '#about-section',
                start: 'top 75%',
                end: 'top 45%',
                scrub: true,
            },
            y: 50,
            opacity: 0,
            filter: 'blur(10px)',
        });

        // Hanging Spiderman drop down
        gsap.from('#hanging-spiderman', {
            scrollTrigger: {
                trigger: '#about-section',
                start: 'top 90%',
                end: 'top 50%',
                scrub: 1.5,
            },
            y: -40,
            opacity: 0,
            scale: 0.8,
            ease: 'power2.out'
        });
    });

    return (
        <section id="about-section" className='relative min-h-dvh bg-cover bg-center bg-no-repeat overflow-hidden' style={{ backgroundImage: "url('/secondbg.jpeg')" }}>
            <div id="about-title" className='absolute right-36 top-34 flex justify-center gap-5 '>
                <img src='/redicon.svg' alt='red icon' width={35} height={35} className='mt-4' />
                <h1 className='text-[45px] font-semibold text-white-100'>About</h1>
            </div>
            <div id='about-text' className='absolute right-26 top-43 max-w-3xl mx-auto px-8 mt-10'>
                <p className='text-xl leading-relaxed text-white/90 text-right'>Spider-Man, created by writer Stan Lee and writer-artist Steve Ditko, is one of the most iconic and enduring superheroes in popular culture. He first appeared in "Amazing Fantasy" #15, published by Marvel Comics in 1962. Spider-Man's alter ego is Peter Parker, a high school student who gains superpowers after being bitten by a radioactive spider.</p>
                <button id="see-more" className='bg-red-500 text-white px-6 py-2 rounded-full mt-8 ml-145'>See More</button>
            </div>
            <div className='absolute bottom-0 left-10 w-[600px] h-[650px]'>
                <img
                    src='barsecondbg.jpeg'
                    alt='Bar Image of Second'
                    className='absolute bottom-0 z-0 w-[400px] h-auto left-10' />
                <img
                    src='second.png'
                    alt='Second spiderman'
                    className='absolute bottom-0 top-0 z-10 w-[550px] h-auto left-0' />
            </div>
            <div>
                <img
                    id='hanging-spiderman'
                    src='third.png'
                    alt='Third spederman'
                    className='absolute top-0 right-8 z-10 w-[270px] h-auto mt-111' />
            </div>
        </section>
    )
}

export default About