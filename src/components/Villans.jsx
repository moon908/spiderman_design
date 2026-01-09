import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { villans } from "../constants"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Villans = () => {

    useGSAP(() => {
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
    });

    return (
        <section id="villans-section" className='relative w-full min-h-screen py-20'>
            <div id="villans-header" className='flex justify-center items-center gap-2 mr-8'>
                <img src="/redicon.svg" alt="red-icon" width={35} height={35} className='mt-4' />
                <h1 className='text-4xl font-semibold'>
                    Villans
                </h1>
            </div>

            <div className='max-w-6xl mx-auto mt-12 px-10'>
                <Carousel className="w-full">
                    <CarouselContent className="">
                        {villans.map((villan, index) => (
                            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                                <div className="villan-card group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 p-4 transition-all hover:border-red-500/50">
                                    <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-zinc-800">
                                        <img
                                            src={villan.image}
                                            alt={villan.name}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-center text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                                        {villan.name}
                                    </h3>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                        <CarouselPrevious className="left-[-50px] bg-red-500 text-white hover:bg-red-600 border-none" />
                        <CarouselNext className="right-[-50px] bg-red-500 text-white hover:bg-red-600 border-none" />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}

export default Villans