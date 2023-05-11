import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import SetHeaders from "@/components/SetHeaders";
import { slidesData, industryDetails, sapServicesDetails, whyChooseUsData } from "@/configs/config";

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
                <SwiperSlide key={ind}>
                  <div className='flex justify-center items-center flex-col w-full h-full p-4  relative bg-black'>
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
            <h2 className='text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-2'>SAPOCOM Global</h2>
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

      {/* Industry Led Services */}
      <section className='w-full p-4 md:py-8 max-w-1200 mx-auto ' >
        <div className='flex items-center flex-col mb-10 max-md:mb-5 text-center'>
          <p className='text-black uppercase mb-2 font-medium'>Industries</p>
          <h2 className='md:text-4xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-2'>Industry Led Services</h2>
          <p className='text-black opacity-70'>Our comprehensive SAP services are designed to meet the evolving needs of your business</p>
        </div>
        <div className='grid grid-cols-auto-4 gap-4 justify-items-center'>
          {
            industryDetails.map((industry, ind) => {
              return (
                <div key={ind} className='rounded-md aspect-[3/4] p-4 bg-primary transition-all relative flex items-end before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black before:to-transparent before:rounded-md  before:opacity-100 before:z-[86] before:transition-all group overflow-hidden'>
                  <Image alt='oil and gas' src={industry.image} fill className='object-cover w-full h-full absolute top-0 left-0 z-[85] rounded-md group-hover:scale-[1.1] transition-[transform]' />
                  <div className='z-[87] select-none'>
                    <h1 className='text-white font-semibold text-2xl md:text-3xl mb-2'>{industry.name}</h1>
                    <p className='text-white/50 mb-2'>{industry.description}</p>
                    <Link href={industry.link} className='text-[#FFAAE3] opacity-60 hover:opacity-100'>Learn More &gt;</Link>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>

      {/* SAP Services  */}
      <section className='w-full p-4 md:py-8 max-w-1200 mx-auto ' >
        <div className='flex items-center flex-col mb-10 max-md:mb-5 text-center'>
          <p className='text-black uppercase mb-2 font-medium'>Services</p>
          <h2 className='md:text-4xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-2'> SAP Services</h2>
          <p className='text-black opacity-70 text-center'>Innovative SAP solutions designed to help you stay ahead of the competition </p>
        </div>
        <div className='grid grid-cols-auto-3 gap-4 justify-items-center'>
          {
            sapServicesDetails.map(({ name, description, image, }, ind) => {
              return (
                <div key={ind} className='rounded-md aspect-[14/9]  p-4 bg-primary transition-all relative flex items-end before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black before:to-transparent before:rounded-md  before:opacity-100 before:z-[86] before:transition-all group overflow-hidden'>
                  <Image alt={name} src={image} fill className='object-cover w-full h-full absolute top-0 left-0 z-[85] rounded-md group-hover:scale-[1.1] transition-[transform]' />
                  <div className='z-[87] select-none'>
                    <h1 className='text-white font-semibold text-2xl md:text-3xl mb-2'>{name}</h1>
                    <p className='text-white/50 mb-2'>{description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>

      {/* Why Chose Us  */}
      <section className='w-full p-4 md:py-8 max-w-1200 mx-auto ' >
        <div className='flex items-center flex-col mb-10 max-md:mb-5'>
          <p className='text-black uppercase mb-2 font-medium'>Why Choose</p>
          <h2 className='md:text-4xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-2'>Why Choose Us as Your SAP Partner</h2>
          <p className='text-black opacity-70 text-center'>Our commitment to quality, innovation, and customer satisfaction sets us apart from the competition</p>
        </div>
        <div className='grid grid-cols-auto-3-250 gap-4 justify-items-center mx-auto max-w-900'>
          {
            whyChooseUsData.map(({ name, description, image, }, ind) => {
              const even = ind % 2 == 0 || ind == 0 ? true : false;
              console.log(even);
              return (
                <div key={ind} className={`${even ? 'bg-white border-primary/10' : 'bg-gradient-to-br from-primary to-secondary border-transparent'} rounded-md border-2 aspect-[3/4] p-4 flex`}>

                  <div className={`select-none ${even ? 'text-black' : 'text-white'}`}>
                    <div className={`${!even ? 'bg-white' : 'bg-gradient-to-br from-primary to-secondary '} rounded-md aspect-[1/1] w-20 p-3 flex mb-8`}>
                      <Image src={image} alt={name} />
                    </div>
                    <h1 className='font-semibold text-2xl mb-2'>{name}</h1>
                    <p className='opacity-60 mb-2'>{description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section >
    </>
  )
}
