import React from 'react'
import Image from 'next/image'
import SetHeaders from '@/layouts/SetHeaders'
import { HeaderBanner } from '@/components/banners/banners'
import serviceBanner from "@/assets/images/bgImages/serviceBanner.png";
import { CtaBanner } from '@/components/banners/ctaBanners';

function Services() {
  return (
    <>
      <SetHeaders title='Services | Sapocom' />
      <HeaderBanner heading='Empowering Global SAP Projects - SAPOCOM Consulting & Talent Solutions' para='Integrated software for oil, gas, and energy to facilitate the adoption of a sustainable energy mix with cutting-edge solutions.' bgImg={serviceBanner} />
      <CtaBanner />
    </>
  )
}

export default Services
