import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel"
import { villans } from "../constants"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Villans = () => {
    // Debug: Check if villans data is loaded
    console.log("Villans data:", villans);

    useGSAP(() => {
        if (!villans || villans.length === 0) return;

        gsap.from('#villans-header', {
            scrollTrigger: {
                trigger: '#villans-section',
                start: 'top 80%',
                end: 'top 50%',
                scrub: true,
            },
            y: 30,
            opacity: 0,
        });

        gsap.from('.villan-card', {
            scrollTrigger: {
                trigger: '#villans-section',
                start: 'top 60%',
                end: 'top 20%',
                scrub: 1,
            },
            scale: 0.8,
            opacity: 0,
            y: 50,
            stagger: 0.1,
        });
    }, [villans]);

    return (
        <section id="villans-section" className='relative w-full min-h-screen py-20 bg-black'>
            <div id="villans-header" className='flex justify-center items-center gap-4 mb-20'>
                <img src="/redicon.svg" alt="red-icon" width={40} height={40} className='mt-5' />
                <h1 className='text-5xl md:text-6xl font-black text-white uppercase tracking-tighter'>
                    The Villains
                </h1>
            </div>

            <div className='max-w-7xl mx-auto px-10 md:px-20'>
                {villans && (villans.length - 1) > 0 ? (
                    <Carousel className="w-full">
                        <CarouselContent className="-ml-4">
                            {villans.map((villan, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <div className="villan-card group relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/5 p-6 transition-all hover:border-red-600/50 hover:bg-zinc-900">
                                        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-800">
                                            <img
                                                src={`/${villan.image}`}
                                                alt={villan.name}
                                                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                        </div>
                                        <h3 className="mt-6 text-center text-2xl font-black text-white uppercase tracking-tight group-hover:text-red-500 transition-colors">
                                            {villan.name}
                                        </h3>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:flex justify-center gap-4 mt-12">
                            <CarouselPrevious className="static translate-y-0 bg-zinc-900 border-zinc-800 text-white hover:bg-red-600 hover:text-white" />
                            <CarouselNext className="static translate-y-0 bg-zinc-900 border-zinc-800 text-white hover:bg-red-600 hover:text-white" />
                        </div>
                    </Carousel>
                ) : (
                    <div className="text-center text-white py-20">
                        <p className="text-xl">No villains found in the multiverse...</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Villans