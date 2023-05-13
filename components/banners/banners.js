import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export function HeaderBanner({ bgImg, heading, para, cta = '/about-us' }) {
    return (
        <>
            <section className={`w-full py-10 pt-20 md:pt-36 px-4 relative`}>
                {/* Black to transparent gradient */}
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t lg:bg-gradient-to-r from-black to-transparent z-10"></div>
                {/* Background Image */}
                <Image src={bgImg} width={1300} alt={`${heading} header banner image`} className='w-full h-full absolute top-0 left-0 object-cover' />
                {/* Background Image */}
                <div className='max-w-1200 mx-auto grid text-white z-50'>
                    <h1 className="max-w-[650px] mb-3 text-3xl z-40 font-bold max-md:mt-24">{heading}</h1>
                    <p className=" m-0 max-w-[500px] z-30 mb-8">{para}</p>
                    <Link passHref href={cta}>
                        <button className='px-5 py-2 rounded-md text-white bg-gradient-to-r from-primary to-secondary'>Request Consultation</button>
                    </Link>
                </div>
            </section>
        </>
    )
}

