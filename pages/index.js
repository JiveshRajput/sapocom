import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import SetHeaders from "@/components/SetHeaders";
import { slidesData } from "@/configs/config";

// image
import aboutSapocomSection from '@/assets/images/home/about-sapocom-section.png'

// css
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <>
      <SetHeaders title='Sapocom | A SAP based company to provide asap solutions to be at top in this world | Home Page' />
      {/* Header Banner */}
      <section id="Header_Banner">
        <Swiper slidesPerView={1} loop={true} modules={[Pagination, Autoplay]} className="mySwiper" pagination={{ clickable: true, }} autoplay={{ delay: 3000, disableOnInteraction: false, }}>
          {
            slidesData.map((slide, ind) => {
              return (
                <>
                  <SwiperSlide key={ind}>
                    <div className='flex justify-center items-center flex-col w-full h-full p-4 relative bg-black'>
                      <Image src={slide.image} alt='header_bg_image' className='absolute w-full h-full object-cover' fill />
                      <h1 className='max-w-[800px] text-[44px] max-md:text-3xl font-bold leading-tight mb-5 text-transparent bg-clip-text bg-gradient-to-t via-white from-[#f3bfff] to-white'>{slide.heading}</h1>
                      <p className='max-w-[650px] leading-tight text-white mb-4 max-md:text-base'>{slide.para}</p>
                      <div className='flex gap-4 max-[500px]:flex-col'>
                        <Link passHref href={slide.link}>
                          <button className='w-36 px-5 py-1 rounded-md text-white bg-gradient-to-r from-primary to-secondary border border-transparent'>Get Started</button>
                        </Link >
                        <Link passHref href={slide.cta}>
                          <button className='w-36 px-5 py-1 rounded-md text-white bg-transparent border '>Join Us</button>
                        </Link>
                      </div>
                    </div >
                  </SwiperSlide>
                </>
              )
            })
          }
        </Swiper>
      </section >

      {/* Stats Detail Section */}
      <section className='w-full p-4 md:py-8 bg-gradient-to-r from-secondary to-third text-white' >
        <div className='max-w-1200 mx-auto'>
          <h1 className='text-center md:text-4xl text-3xl mb-4'>Stats at Glance</h1>
          <div className='grid grid-cols-4 gap-4 max-md:grid-cols-2'>
            <div className='text-center p-2'>
              <h2 className='text-3xl font-semibold'>500+</h2>
              <p>Customers across the globe</p>
            </div>
            <div className='text-center p-2'>
              <h2 className='text-3xl font-semibold'>75%</h2>
              <p>Client retention rate</p>
            </div>
            <div className='text-center p-2'>
              <h2 className='text-3xl font-semibold'>50%</h2>
              <p>Client retention rate</p>
            </div>
            <div className='text-center p-2'>
              <h2 className='text-3xl font-semibold'>6+</h2>
              <p>Offices across the world</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Sapocom */}
      <section className='w-full p-4 md:py-8 bg-grey' >
        <div className='max-w-1200 mx-auto flex gap-10 flex-wrap '>
          <div className="flex-1">
            <p className='text-secondary uppercase mb-4 font-medium'>About</p>
            <h2 className='text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-third to-90% mb-2'>SAPOCOM Global</h2>
            <p className='text-black mb-6 opacity-70'>Sapocom Global , a sap based company to provide asap solutions to be at top in this world</p>
            <p className='text-black mb-6'>SAPOCOM is an emerging project-based SAP consulting, Training & talent recruitment enterprise among the fastest growing consultancy firms in India. We add value through talent acquisition, software development,</p>
            <div className='grid grid-cols-2 max-[600px]:grid-cols-1 w-full gap-4'>
              <div className='flex items-center p-2 px-5 rounded-full border border-black/20 text-secondary'>
                <Image alt='check_with_circle_svg' src={require('../assets/images/icons/check-with-circle.svg')} className='w-5 h-5 mr-3' />
                <p>Important Statment One</p>
              </div>
              <div className='flex items-center p-2 px-5 rounded-full border border-black/20 text-secondary'>
                <Image alt='check_with_circle_svg' src={require('../assets/images/icons/check-with-circle.svg')} className='w-5 h-5 mr-3' />
                <p>Important Statment One</p>
              </div>
              <div className='flex items-center p-2 px-5 rounded-full border border-black/20 text-secondary'>
                <Image alt='check_with_circle_svg' src={require('../assets/images/icons/check-with-circle.svg')} className='w-5 h-5 mr-3' />
                <p>Important Statment One</p>
              </div>
              <div className='flex items-center p-2 px-5 rounded-full border border-black/20 text-secondary'>
                <Image alt='check_with_circle_svg' src={require('../assets/images/icons/check-with-circle.svg')} className='w-5 h-5 mr-3' />
                <p>Important Statment One</p>
              </div>
            </div>
          </div>
          <div className="max-md:flex max-md:text-center max-md:w-full max-md:justify-center">
            <Image src={aboutSapocomSection} width={300} alt='about_sacopom_image' />
          </div>
        </div>
      </section>
    </>
  )
}
