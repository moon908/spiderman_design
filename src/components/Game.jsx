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
            <div className='absolute top-35 left-60 flex flex-row gap-170 items-center'>
                <div>
                    <img src='/xbox.svg' alt='xbox-logo' className='w-[150px] h-auto' />
                </div>
                <div className='flex flex-row justify-center items-center gap-16'>
                    <img src='/psicon.svg' alt='ps-5-logo' className='w-[150px] h-auto mb-20' />
                    <img src='/windows.svg' alt='windows-logo' className='w-[150px] h-auto' />
                </div>
            </div>
            <div id="firstbar" className='absolute top-120 left-5 p-4 pr-25 w-160 h-auto bg-gradient-to-r from-black to-transparent rounded-2xl z-10'>
                <h1 className='text-2xl font-semibold'>
                    Customized Spider-Man Suits
                </h1>
                <hr className='w-90 mt-2 h-0.5 bg-red-600 mr-auto' />
                <p className='text-md mt-2'>
                    feature a unique design that balances aesthetic appeal and functionality while remaining true to the Spider-Man universe. Players will have access to a diverse color palette, including traditional red and blue, as well as alternative shades like black, white, and metallic.
                    <br />
                    <br />
                    The suit's textures will combine sleek, smooth surfaces with detailed, web-like patterns, utilizing materials such as carbon fiber and matte finishes.
                </p>
                <br />
                <div className="pl-2">
                    <button className=' text-white px-6 py-2 rounded-xl  border-2 border-red-500'>
                        FULL STORY
                    </button>
                </div>
            </div>
            <div id="secondbar" className='absolute top-135 right-3 p-4 text-right pl-25  w-160 h-auto bg-gradient-to-l from-black to-transparent rounded-2xl'>
                <h1 className='text-2xl font-semibold'>
                    All About New Edition
                </h1>
                <hr className='w-70 mt-2 h-0.5 bg-red-600 ml-auto' />
                <p className='text-md mt-2'>
                    This isnt the Spider-Man you've met or ever seen before. In Marvel's Spider-Man Remastered, we meet an experienced Peter Parker who's more masterful at fighting big crime in New York City. At the same time, he's struggling to balance his chaotic personal life and career while the fate of Marvel's New York rests upon his shoulders.
                </p>
                <br />
                <div className="pl-2">
                    <button className=' text-white px-6 py-2 rounded-xl  border-2 border-red-500'>
                        FULL STORY
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Game