import React from 'react'
import SetHeaders from '@/components/SetHeaders'
import { HeaderBanner } from '@/components/banners/banners'
import bgBanner from "@/assets/images/bgImages/industryChemical.png";

export default function Chemical() {
  return (
    <>
      <SetHeaders title='Chemical Industry | Sapocom' />
      <HeaderBanner heading='Chemical Industry' para='Meet demand for a more sustainable energy mix – faster – with integrated oil, gas, and energy software from SAP.' bgImg={bgBanner} />
    </>
  )
}


