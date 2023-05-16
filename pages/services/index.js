import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import SetHeaders from '@/layouts/SetHeaders'
import { HeaderBanner } from '@/components/banners/banners'
import serviceBanner from "@/assets/images/bgImages/serviceBanner.png";
import { CtaBanner } from '@/components/banners/ctaBanners';
import ClientReviews from '@/components/ClientReviews';
import IndustryCtaWithDetails from '@/components/IndustryCtaWithDetails';


// Images
import overview from '@/assets/images/service/overview.png'
import solution from '@/assets/images/service/solution.png'
import clientImage from '@/assets/images/industry/clientImage.png'

// Configs
import { industryDetailsData, servicesData } from '@/configs/config';

// css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const serviceSolution = [
  'Empowering Your Success Through Expert Services',
  'Empowering Your Success Through Expert Services',
  'Empowering Your Success Through Expert Services',
  'Empowering Your Success Through Expert Services',
  'Empowering Your Success Through Expert Services',
  'Empowering Your Success Through Expert Services',
]



function Services() {
  return (
    <>
      <SetHeaders title='Services | Sapocom' />
      <HeaderBanner heading='Empowering Global SAP Projects - SAPOCOM Consulting & Talent Solutions' para='Integrated software for oil, gas, and energy to facilitate the adoption of a sustainable energy mix with cutting-edge solutions.' bgImg={serviceBanner} />


      {/* Overview */}
      <section className='w-full p-4 py-8 md:py-10 bg-grey' >
        <div className='max-w-1200 mx-auto flex gap-10 flex-wrap '>
          <div className="flex-1">
            <p data-aos='fade-up' data-aos-delay='100' className='text-secondary uppercase mb-4 font-medium'>Overview</p>
            <h2 data-aos='fade-up' data-aos-delay='200' className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-4 max-w-[550px]'>Transform Your Business with Our Comprehensive Services</h2>
            <p data-aos='fade-up' data-aos-delay='300' className='text-black mb-8 opacity-70 max-w-[450px]'>From implementation to ongoing support, we offer a full suite of services to meet your unique business needs.</p>

            <div className='grid grid-cols-2 max-[600px]:grid-cols-1 w-full gap-4 max-w-[600px]'>
              <div data-aos='flip-left' className='flex items-center text-black'>
                <Image alt='check_black_svg' src={require('../../assets/images/icons/check-black.svg')} className='w-4 h-4 mr-3' />
                <p>Emphasizing point to be added</p>
              </div>
              <div data-aos='flip-left' className='flex items-center text-black'>
                <Image alt='check_black_svg' src={require('../../assets/images/icons/check-black.svg')} className='w-4 h-4 mr-3' />
                <p>Emphasizing point to be added</p>
              </div>
              <div data-aos='flip-left' className='flex items-center text-black'>
                <Image alt='check_black_svg' src={require('../../assets/images/icons/check-black.svg')} className='w-4 h-4 mr-3' />
                <p>Emphasizing point to be added</p>
              </div>
              <div data-aos='flip-left' className='flex items-center text-black'>
                <Image alt='check_black_svg' src={require('../../assets/images/icons/check-black.svg')} className='w-4 h-4 mr-3' />
                <p>Emphasizing point to be added</p>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-delay='200' className="max-md:flex max-md:text-center max-md:w-full max-md:justify-center">
            <Image src={overview} width={350} alt='overview' />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className='w-full p-4 py-8 md:py-10 bg-gradient-to-r from-[#641977] via-[#390D44] to-[#0D0110] text-white'>
        <div className='max-w-1200 mx-auto'>
          {/* Heading */}
          <div className="flex items-center flex-col mb-10 max-md:mb-5 text-center">
            <p data-aos="flip-left" data-aos-delay="100" className="uppercase mb-4 font-medium ">Industries</p>
            <h2 data-aos="flip-right" data-aos-delay="100" className="md:text-4xl text-3xl font-semibold text-white mb-4 max-w-1000">Empower Your Business with the Best-in-Class SAP Technologies for Future-Proof Growth</h2>
            <p data-aos="flip-left" data-aos-delay="100" className="opacity-70 max-w-[600px]">Here you can have a short description of our services technologies </p>
          </div>
          {/* Cards */}
          {/* View on Desktop */}
          <div className="max-w-1000 mx-auto grid grid-cols-auto-3-280 gap-4 md:gap-8 justify-items-center max-md:hidden">
            {
              servicesData.map(({ title, description, image }, ind) => {
                const even = ind % 2 == 0 || ind == 0 ? true : false;
                return (
                  <div key={ind} data-aos={even ? "flip-right":"flip-left"} data-aos-delay={ind * 100} className='bg-secondary rounded-lg'>
                    <div className='w-full h-auto'>
                      <Image src={image} width={350} alt='service_images' className='rounded-t-lg w-full h-auto' priority />
                    </div>
                    <div className="p-4">
                      <h1 className='mb-4 text-2xl font-semibold'>{title}</h1>
                      <p className="opacity-60 line-clamp-[11]">{description}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          {/* Slide Show for Mobile/Tab */}
          <div data-aos='fade-up' className="md:hidden">
            <Swiper slidesPerView={1} loop={true} modules={[Pagination, Autoplay]} className='sideSwiper bgDark rounded-md ' pagination={{ clickable: true, }} autoplay={{ delay: 10000, disableOnInteraction: false, }} spaceBetween={20} breakpoints={{ 480: { slidesPerView: 2 }, }}>
              {
                servicesData.map(({ title, description, image, }, ind) => {
                  return (
                    <SwiperSlide key={ind} >
                      <div className='bg-secondary rounded-lg'>
                        <div className='w-full h-auto'>
                          <Image src={image} width={350} alt='service_images' className='rounded-t-lg w-full h-auto' priority />
                        </div>
                        <div className="p-4">
                          <h1 className='mb-4 text-2xl font-semibold'>{title}</h1>
                          <p className="opacity-60 line-clamp-[11]">{description}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        </div>
      </section>


      {/* Solution */}
      <section className='w-full p-4 py-8 md:py-10 ' >
        <div className='max-w-900 mx-auto grid max-md:grid-rows-[1fr_300px] md:grid-cols-[1fr_300px] rounded-lg bg-grey p-4 md:p-6 text-black'>
          <div>
            <h2 data-aos='flip-up' className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-4 md:mb-8 max-w-[550px]'>Transform Your Business with Our Comprehensive Services</h2>
            <div className='grid grid-cols-1 w-full'>
              {
                serviceSolution.map((point, ind) => {
                  return (
                    <div key={ind} data-aos='flip-left' data-aos-delay={ind * 50} className='flex items-center mb-3 '>
                      <Image alt='right_arrow' src={require('../../assets/images/icons/right-arrow.svg')} className='w-4 h-4 mr-3' />
                      <p>{point}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='w-full h-full'>
            <Image data-aos='fade-in' alt='service_solution' src={solution} width={400} className='object-contain w-full h-full rounded-md ' />
          </div>
        </div>
      </section >

      <IndustryCtaWithDetails
        title='clients'
        heading='Optimizing Performance in Metal and Mining Operations and some more here to write '
        description='Our commitment to quality, innovation, and customer satisfaction sets us apart from the competition.'
        cta='/contact-us'
        industryData={industryDetailsData}
      />

      <CtaBanner />

      <ClientReviews
        message='We have been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences! and these positives lead to our growth xperiences! and these positives lead to our growth  and these positives lead to our growth'
        name='Jonhathan Wick'
        position='Director, Table.inc'
        image={clientImage}
      />
    </>
  )
}

export default Services
