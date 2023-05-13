import React from 'react'
import SetHeaders from '@/components/SetHeaders'
import { HeaderBanner } from '@/components/banners/banners'
import bgBanner from "@/assets/images/bgImages/industryAgriculture.png";

export default function Agriculture() {
  return (
    <>
      <SetHeaders title='Agriculture Industry | Sapocom' />
      <HeaderBanner heading='Agriculture Industry' para='Meet demand for a more sustainable energy mix – faster – with integrated oil, gas, and energy software from SAP.' bgImg={bgBanner} />
    </>
  )
}


