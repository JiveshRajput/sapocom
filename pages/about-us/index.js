import React from 'react'
import Image from 'next/image'
import SetHeaders from '@/layouts/SetHeaders'
import VideoBackgroundMessage from '@/components/VideoBackgroundMessage'

// SVG
import rocketSvg from '@/assets/images/icons/rocket.svg'
import airplaneSvg from '@/assets/images/icons/airplane.svg'
import horseSvg from '@/assets/images/icons/horse.svg'
import mountainSvg from '@/assets/images/icons/mountain.svg'
import targetSvg from '@/assets/images/icons/target.svg'
import growthSvg from '@/assets/images/icons/growth.svg'

// Images
import aboutBanner from "@/assets/images/bgImages/aboutUsBanner.png";
import headerImage from '@/assets/images/about/headerImage.png';
import founderImage from '@/assets/images/about/founder.png';
import companyImage from '@/assets/images/about/company.png';
import missionImage from '@/assets/images/about/mission.png';
import { BannerWithImage } from '@/components/banners/banners';

// Configs
import { teamsList } from '@/configs/config'



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
          <div className='max-md:hidden' data-aos='flip-right'>
            <Image src={rocketSvg} alt='rocket_svg' className='w-[200px] h-[200px] object-contain' />
          </div>
        </div>
        {/* image */}
        <div className="w-full h-full" data-aos='flip-up'>
          <Image src={missionImage} alt='company_mission_image' width={1200} className='w-full h-full rounded-lg' />
        </div>
      </section>

      {/* Founder Message */}
      <section data-aos='flip-left' className='w-full p-4 py-10 border-t border-primary/20' >
        <div className="max-w-900 mx-auto rounded-lg p-8 bg-gradient-to-r from-primary to-secondary">
          <p className="text-white uppercase mb-2 font-medium">Company</p>
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 mb-8 max-w-[550px]">Founder&apos;s Message</h2>
          <div className="grid md:grid-cols-[250px_1fr] gap-8 text-white">
            {/* Image side */}
            <div>
              <Image alt='founder_image' src={founderImage} className='mb-8 rounded-md w-[250px]' />
              <p className='mb-2 text-xl font-semibold'>Founder Name</p>
              <p className='text-base opacity-70'>Founder & CEO, Sapocom Global</p>
            </div>
            {/* Message side */}
            <div className='text-base'>
              <p>{`This isn’t business as usual, and it’s a time of great stress and uncertainty. It’s also a moment in time when the work we’re doing is its most critical. We’ve changed our logistics, transportation, supply chain, purchasing, and third party seller processes to prioritize stocking and delivering essential items like household staples, sanitizers, baby formula, and medical supplies. We’re providing a vital service to people everywhere, especially to those, like the elderly, who are most vulnerable. People are depending on us. I’m not alone in being grateful for the work you are doing. I’ve received hundreds of emails from customers and seen posts on social media thanking you all. Your efforts are being noticed at the highest levels of government, and President Trump earlier this week thanked this team profusely. Across the world, people are feeling the economic effects of this crisis, and I’m sad to tell you I predict things are going to get worse before they get better.`}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Team */}
      <section className='w-full p-4 py-8 md:py-16 max-w-1000 mx-auto ' >
        <div className='flex items-center flex-col mb-10 max-md:mb-5 text-center'>
          <p data-aos='flip-left' data-aos-delay='100' className='text-black uppercase mb-2 font-medium'>team</p>
          <h2 data-aos='flip-right' data-aos-delay='100' className='max-w-[800px] md:text-4xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30% to-secondary to-90% mb-4'>We believe that the team is the one which leads a company to new greater heights</h2>
          <p data-aos='flip-left' data-aos-delay='100' className='text-black opacity-70'>Our team of SAP professionals is the driving force behind our success. With their expertise, dedication, and unwavering commitment to delivering top-notch services, we can help businesses thrive and reach new heights with our innovative SAP solutions.</p>
        </div>
        {/* Teams Card */}
        <div data-aos='zoom-in' className="grid max-review:grid-cols-2 grid-cols-auto-4">
          {
            teamsList.map((team, ind) => {
              return (
                <div key={ind} className='aspect-square relative group'>
                  <div className="w-full h-full absolute bg-primary/60 z-10 p-4 text-white flex flex-col justify-center transition-all opacity-0 group-hover:opacity-100 ">
                    <p className='text-2xl font-bold'>{team.name}</p>
                    <p className='opacity-60'>{team.designation}</p>
                  </div>
                  <Image src={team.image} alt='teamImage' width={280} className='w-full h-full object-cover' />
                </div>
              )
            })
          }
        </div>
      </section>

      {/* Company's Timeline */}
      <section className='w-full p-4 py-8 md:py-16 max-w-1000 mx-auto ' >
        <div className='flex items-center flex-col mb-10 max-md:mb-5 text-center'>
          <p data-aos='flip-left' data-aos-delay='100' className='text-black uppercase mb-2 font-medium'>Timeline</p>
          <h2 data-aos='flip-right' data-aos-delay='100' className='max-w-[800px] md:text-4xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30% to-secondary to-90% mb-4'>From nothing to a big name in industry</h2>
          <p data-aos='flip-left' data-aos-delay='100' className='text-black opacity-70'>Check our yearly achievemnts here</p>
        </div>
        {/* Teams Card */}
        <div data-aos='flip-up' className="md:py-8 max-md:px-2 rounded-md border border-black/25">
          <div className='grid md:grid-cols-5 max-md:grid-rows-5'>
            {/* first */}
            <div className="bg-red w-full grid md:grid-rows-[1fr_1px_1fr] max-md:grid-cols-[1fr_1px_1fr]">
              {/* Achievement and Year */}
              <div className="p-4 px-2 text-center flex flex-col justify-center items-center">
                <p className='mb-3 font-semibold leading-tight'>Why the company was started by foundersn and the initial </p>
                <p className='rounded-md p-2 bg-primary mx-auto text-white w-[100px]'>2019</p>
              </div>
              {/* Center Border Line */}
              <div className="bg-secondary md:w-full md:h-[1px] max-md:w-[1px] max-md:h-full"></div>
              {/* Icon Circle */}
              <div className="w-full grid md:grid-rows-[1fr_100px] max-md:grid-cols-[1fr_100px] md:justify-center max-md:items-center">
                <div className="md:w-[1px] md:h-full max-md:h-[1px] max-md:w-full mx-auto bg-secondary"></div>
                <div className="w-[100px] h-[100px] rounded-full border border-secondary p-6 grid place-items-center">
                  <Image src={airplaneSvg} alt='airplane_svg' className='w-[50px] h-[50px] object-contain' />
                </div>
              </div>
            </div>
            {/* second */}
            <div className="bg-red w-full grid md:grid-rows-[1fr_1px_1fr] max-md:grid-cols-[1fr_1px_1fr]">
              {/* Icon Circle */}
              <div className="w-full grid md:grid-rows-[100px_1fr] max-md:grid-cols-[100px_1fr] md:justify-center max-md:items-center">
                <div className="w-[100px] h-[100px] rounded-full border border-secondary p-6 grid place-items-center object-contain">
                  <Image src={horseSvg} alt='horse_svg' className='w-[50px] h-[50px] object-contain' />
                </div>
                <div className="md:w-[1px] md:h-full max-md:h-[1px] max-md:w-full mx-auto bg-secondary"></div>
              </div>
              {/* Center Border Line */}
              <div className="bg-secondary md:w-full md:h-[1px] max-md:w-[1px] max-md:h-full"></div>
              {/* Achievement and Year */}
              <div className="p-4 px-2 text-center flex flex-col justify-center items-center">
                <p className='mb-3 font-semibold leading-tight'>Why the company was started by foundersn and the initial and here more details come</p>
                <p className='rounded-md p-2 bg-primary mx-auto text-white w-[100px]'>2019</p>
              </div>
            </div>
            {/* third */}
            <div className="bg-red w-full grid md:grid-rows-[1fr_1px_1fr] max-md:grid-cols-[1fr_1px_1fr]">
              {/* Achievement and Year */}
              <div className="p-4 px-2 text-center flex flex-col justify-center items-center">
                <p className='mb-3 font-semibold leading-tight'>Why the company was started by foundersn and the initial </p>
                <p className='rounded-md p-2 bg-primary mx-auto text-white w-[100px]'>2019</p>
              </div>
              {/* Center Border Line */}
              <div className="bg-secondary md:w-full md:h-[1px] max-md:w-[1px] max-md:h-full"></div>
              {/* Icon Circle */}
              <div className="w-full grid md:grid-rows-[1fr_100px] max-md:grid-cols-[1fr_100px] md:justify-center max-md:items-center">
                <div className="md:w-[1px] md:h-full max-md:h-[1px] max-md:w-full mx-auto bg-secondary"></div>
                <div className="w-[100px] h-[100px] rounded-full border border-secondary p-6 grid place-items-center">
                  <Image src={mountainSvg} alt='airplane_svg' className='w-[50px] h-[50px] object-contain' />
                </div>
              </div>
            </div>
            {/* forth */}
            <div className="bg-red w-full grid md:grid-rows-[1fr_1px_1fr] max-md:grid-cols-[1fr_1px_1fr]">
              {/* Icon Circle */}
              <div className="w-full grid md:grid-rows-[100px_1fr] max-md:grid-cols-[100px_1fr] md:justify-center max-md:items-center">
                <div className="w-[100px] h-[100px] rounded-full border border-secondary p-6 grid place-items-center object-contain">
                  <Image src={targetSvg} alt='horse_svg' className='w-[50px] h-[50px] object-contain' />
                </div>
                <div className="md:w-[1px] md:h-full max-md:h-[1px] max-md:w-full mx-auto bg-secondary"></div>
              </div>
              {/* Center Border Line */}
              <div className="bg-secondary md:w-full md:h-[1px] max-md:w-[1px] max-md:h-full"></div>
              {/* Achievement and Year */}
              <div className="p-4 px-2 text-center flex flex-col justify-center items-center">
                <p className='mb-3 font-semibold leading-tight'>Why the company was started by foundersn and the initial and here more details come</p>
                <p className='rounded-md p-2 bg-primary mx-auto text-white w-[100px]'>2019</p>
              </div>
            </div>
            {/* fifth */}
            <div className="bg-red w-full grid md:grid-rows-[1fr_1px_1fr] max-md:grid-cols-[1fr_1px_1fr]">
              {/* Achievement and Year */}
              <div className="p-4 px-2 text-center flex flex-col justify-center items-center">
                <p className='mb-3 font-semibold leading-tight'>Why the company was started by foundersn and the initial </p>
                <p className='rounded-md p-2 bg-primary mx-auto text-white w-[100px]'>2019</p>
              </div>
              {/* Center Border Line */}
              <div className="bg-secondary md:w-full md:h-[1px] max-md:w-[1px] max-md:h-full"></div>
              {/* Icon Circle */}
              <div className="w-full grid md:grid-rows-[1fr_100px] max-md:grid-cols-[1fr_100px] md:justify-center max-md:items-center">
                <div className="md:w-[1px] md:h-full max-md:h-[1px] max-md:w-full mx-auto bg-secondary"></div>
                <div className="w-[100px] h-[100px] rounded-full border border-secondary p-6 grid place-items-center">
                  <Image src={growthSvg} alt='airplane_svg' className='w-[50px] h-[50px] object-contain' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sapocom Stats and Details */}
      <section className='w-full p-4 py-8 md:py-16 bg-grey' >
        <div className='max-w-1000 mx-auto flex gap-4 flex-wrap items-center '>
          <div className="md:flex-1">
            <p data-aos='fade-up' data-aos-delay='100' className='text-secondary uppercase mb-4 font-medium'>Worldwide</p>
            <h2 data-aos='fade-up' data-aos-delay='200' className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-4 max-w-[550px]'>Trusted Global SAP Partners</h2>
            <p data-aos='fade-up' data-aos-delay='300' className='text-black mb-6 opacity-70 max-w-[500px]'>We call ourselves the pioneers of customized SAP solutions for businesses of all sizes worldwide. With decades of experience in the field, we ensure to provide the best services to our clients.</p>
          </div>
          <div data-aos='zoom-in' data-aos-delay={200} className="flex md:flex-1 max-md:text-center max-md:w-full justify-center">
            <div className="p-6 px-8 rounded-lg bg-white grid grid-cols-2 gap-8 text-black border-primary/40 border">
              <div>
                <h3 className='text-3xl font-semibold'>500+</h3>
                <p>Clients</p>
              </div>
              <div>
                <h3 className='text-3xl font-semibold'>7+</h3>
                <p>Offices</p>
              </div>
              <div>
                <h3 className='text-3xl font-semibold'>70+</h3>
                <p>Professions</p>
              </div>
              <div>
                <h3 className='text-3xl font-semibold'>200+</h3>
                <p>Clients Worldwide</p>
              </div>
            </div>
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
