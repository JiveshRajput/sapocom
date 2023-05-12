import React from 'react'

function VideoBackgroundMessage({heading= 'Let’s discover what software solution will boost your services'}) {
    return (
        <>
            <section className='w-full p-4 md:py-48 py-36 relative bg-gray-400 flex justify-center items-center'>
                <video src={"/sapocomIntro.mp4"} type="video/mp4" preload="auto" muted autoPlay loop className='absolute top-0 left-0 w-full h-full object-cover'></video>
                <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
                <h1 className='uppercase text-white font-semibold max-md:text-2xl text-3xl text-center max-w-[600px]'>{heading}</h1>
            </section>
        </>
    )
}

export default VideoBackgroundMessage
