import React from 'react'
import Image from 'next/image'
import SetHeaders from '@/layouts/SetHeaders'
import VideoBackgroundMessage from '@/components/VideoBackgroundMessage'

// SVG
import rocketSvg from '@/assets/images/icons/rocket.svg'

// images
import aboutBanner from "@/assets/images/bgImages/aboutUsBanner.png";
import headerImage from '@/assets/images/about/headerImage.png'
import founderImage from '@/assets/images/about/founder.png'
import companyImage from '@/assets/images/about/company.png'
import missionImage from '@/assets/images/about/mission.png'
import { BannerWithImage } from '@/components/banners/banners'

function AboutUs() {
  return (
    <>
      <SetHeaders title='About Us | Sapocom' />
      {/* Header Banner */}
      <BannerWithImage title='about' heading='Welcome to Sapocom Global - Your Trusted SAP Partner' para="We are committed to helping businesses thrive with our innovative solutions and expert guidance. Our team of SAP professionals is dedicated to delivering top-notch services that drive growth and success for our clients." img={headerImage} bgImg={aboutBanner} />

      {/* About Company */}
      <section className='w-full p-4 pb-10 pt-24 md:pt-32  bg-gradient-to-r from-primary to-secondary' >
        <div className='max-w-1200 mx-auto flex gap-10 flex-wrap text-white'>
          <div className="flex-1">
            <p data-aos='fade-up' data-aos-delay='100' className='uppercase mb-4 font-medium'>Company</p>
            <h2 data-aos='fade-up' data-aos-delay='200' className='text-3xl font-semibold mb-2'>SAPOCOM Global</h2>
            <p data-aos='fade-up' data-aos-delay='300' className='mb-6 opacity-70'>SAPOCOM acknowledges the potency of SAP technology and its impact on businesses. We are enthusiastic about delivering bespoke solutions that meet our client&apos;s requirements. Our team of professionals is available to provide unwavering support throughout your journey.</p>
            <p data-aos='fade-up' className='mb-6'>Customized SAP solutions that meet the requirements and specifications of its clients.</p>
            <div className='grid grid-cols-2 max-[600px]:grid-cols-1 w-full gap-4 max-w-[600px]'>
              <div data-aos='flip-left' className='flex items-center'>
                <Image alt='check_with_circle_svg' src={require('../../assets/images/icons/check-with-circle-white.svg')} className='w-5 h-5 mr-3' />
                <p>Important Statment One</p>
              </div>
              <div data-aos='flip-left' className='flex items-center'>
                <Image alt='check_with_circle_svg' src={require('../../assets/images/icons/check-with-circle-white.svg')} className='w-5 h-5 mr-3' />
                <p>Important Statment One</p>
              </div>
              <div data-aos='flip-left' className='flex items-center'>
                <Image alt='check_with_circle_svg' src={require('../../assets/images/icons/check-with-circle-white.svg')} className='w-5 h-5 mr-3' />
                <p>Important Statment One</p>
              </div>
              <div data-aos='flip-left' className='flex items-center'>
                <Image alt='check_with_circle_svg' src={require('../../assets/images/icons/check-with-circle-white.svg')} className='w-5 h-5 mr-3' />
                <p>Important Statment One</p>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-delay='200' className="max-md:flex max-md:text-center max-md:w-full max-md:justify-center">
            <Image src={companyImage} width={300} alt='about_sacopom_image' />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className='w-full p-4 py-10 max-w-1200 mx-auto' >
        {/* heading */}
        <div className='grid md:grid-cols-[1fr_200px] gap-8 mb-4'>
          <div className='flex flex-col justify-center'>
            <p data-aos='fade-up' data-aos-delay='100' className='text-secondary uppercase mb-4 font-medium'>Mission</p>
            <h2 data-aos='fade-up' data-aos-delay='200' className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-2'>Our mission is to empower businesses with cutting-edge SAP solutions and services that drive growth and success.</h2>
          </div>
          <div className='max-md:hidden'>
            <Image src={rocketSvg} alt='rocket_svg' className='w-[200px] h-[200px] object-contain' />
          </div>
        </div>
        {/* image */}
        <div className="w-full h-full">
          <Image src={missionImage} alt='company_mission_image' width={1200} className='w-full h-full rounded-lg' />
        </div>
      </section>

      {/* Founder Message */}
      <section className='w-full p-4 py-10 border-t border-primary/20' >
        <div className="max-w-900 mx-auto rounded-lg p-8 bg-gradient-to-r from-primary to-secondary">
          <p className="text-white uppercase mb-2 font-medium">Company</p>
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 mb-8 max-w-[550px]">Founder&apos;s Message</h2>
          <div className="grid grid-cols-[250px_1fr] gap-8 text-white">
            <div>
              <Image alt='founder_image' src={founderImage} className='mb-8 rounded-md' />
              <p className='mb-2 text-xl font-semibold'>Founder Name</p>
              <p className='text-base opacity-70'>Founder & CEO, Sapocom Global</p>
            </div>
            <div className='text-base'>{`This isn’t business as usual, and it’s a time of great stress and uncertainty. It’s also a moment in time when the work we’re doing is its most critical. We’ve changed our logistics, transportation, supply chain, purchasing, and third party seller processes to prioritize stocking and delivering essential items like household staples, sanitizers, baby formula, and medical supplies. We’re providing a vital service to people everywhere, especially to those, like the elderly, who are most vulnerable. People are depending on us. I’m not alone in being grateful for the work you are doing. I’ve received hundreds of emails from customers and seen posts on social media thanking you all. Your efforts are being noticed at the highest levels of government, and President Trump earlier this week thanked this team profusely. Across the world, people are feeling the economic effects of this crisis, and I’m sad to tell you I predict things are going to get worse before they get better.`}</div>
          </div>
        </div>
      </section>
      {/* Video BG Section */}
      <VideoBackgroundMessage >
        <h1 className='text-white font-semibold text-2xl text-center max-w-[800px]'>We are helping business all overthe world with growth and efficient solutions and then they start their partnering with ther big clients </h1>
      </VideoBackgroundMessage>
    </>
  )
}

export default AboutUs
