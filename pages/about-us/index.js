import React from 'react'
import Image from 'next/image'
import SetHeaders from '@/layouts/SetHeaders'
import VideoBackgroundMessage from '@/components/VideoBackgroundMessage'

function AboutUs() {
  return (
    <>
      <SetHeaders title='About Us | Sapocom' />
      <VideoBackgroundMessage >
        <h1 className='text-white font-semibold text-2xl text-center max-w-[800px]'>We are helping business all overthe world with growth and efficient solutions and then they start their partnering with ther big clients </h1>
      </VideoBackgroundMessage>
    </>
  )
}

export default AboutUs
