import React from 'react'

const Gallery = () => {
    return (
        <section>
            <div className='flex items-center justify-center'>
                <img src="/gallerypng.png" alt="gallery" width={1200} height={1200} />
            </div>
            <div>
                <p className='text-4xl font-semibold flex justify-center items-center '>Spidey's Gallery</p>
            </div>
        </section>
    )
}

export default Gallery