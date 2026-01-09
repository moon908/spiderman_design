import React from 'react'

const Game = () => {
    return (
        <section id="game-section" className='relative min-h-dvh bg-cover  bg-no-repeat overflow-hidden' style={{ backgroundImage: "url('/gamebg.png')" }}>
            <div className='flex justify-between items-center mt-15'>
                <div className='flex items-center'>
                    <p>-------------------------------</p>
                    <img src='/redicon.svg' alt='redicon' width={35} height={35} className='mt-5' />
                </div>
                <div className='flex items-center flex-row-reverse'>
                    <p>-------------------------------</p>
                    <img src='/redicon.svg' alt='redicon' width={35} height={35} className='mt-5' />
                </div>
            </div>
            <div className='absolute top-4 flex flex-row justify-center mt-15 gap-160 mx-58 '>
                <div className='text-left'>
                    <h2 className='text-3xl font-semibold'>
                        SEPTEMBER <span className='text-red-500'>2020</span>
                    </h2>
                    <p className='text-xl'>
                        PLAY FIRST ON
                    </p>
                </div>
                <div className='text-right'>
                    <h2 className='text-3xl font-semibold'>
                        JUNE <span className='text-red-500'>2021</span>
                    </h2>
                    <p className='text-xl'>
                        NOW COME TO ALL PLATFORM
                    </p>
                </div>
            </div>
            <div>
                <img src='/six.png' alt='sixth-spiderma' className='absolute top-20 left-130 w-[700px] h-auto object-cover' />
            </div>
        </section>
    )
}

export default Game