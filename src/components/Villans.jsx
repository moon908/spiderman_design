import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { villans } from "../constants"

const Villans = () => {
    return (
        <section className='relative w-full h-full'>
            <div className='flex justify-center items-center gap-2 mt-20 mr-8'>
                <img src="redicon.svg" alt="red-icon" width={35} height={35} className='mt-4' />
                <h1 className='text-4xl font-semibold'>
                    Villans
                </h1>
            </div>
            <Carousel className="w-full h-full max-w-xs mx-auto mt-12">
                <CarouselContent className="-ml-2 md:-ml-4 w-full h-full">
                    {villans.map((villan, index) => (
                        <CarouselItem key={index} className={"w-full h-full"}>
                            <div className="flex h-40 items-center justify-center bg-muted w-full h-full">
                                <img src={villan.image} alt={villan.name} width={300} height={300} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className={"left-[-600px]"} />
                <CarouselNext className={"right-[-600px]"} />
            </Carousel>
        </section>
    )
}

export default Villans