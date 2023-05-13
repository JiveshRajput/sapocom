import React from 'react'
import Image from 'next/image'
import SetHeaders from '@/components/SetHeaders'
import { HeaderBanner } from '@/components/banners/banners'
import serviceBanner from "@/assets/images/bgImages/serviceBanner.png";

function Services() {
  return (
    <>
      <SetHeaders title='Services | Sapocom' />
      <HeaderBanner heading='Empowering Global SAP Projects - SAPOCOM Consulting & Talent Solutions' para='Integrated software for oil, gas, and energy to facilitate the adoption of a sustainable energy mix with cutting-edge solutions.' bgImg={serviceBanner} />
    </>
  )
}

export default Services
