import React from 'react'
import SetHeaders from '@/components/SetHeaders'
import { HeaderBanner } from '@/components/banners/banners'
import bgBanner from "@/assets/images/bgImages/industryMining.png";

export default function MetalMining() {
  return (
    <>
      <SetHeaders title='Metal & Mining Industry | Sapocom' />
      <HeaderBanner heading='Metal & Mining Industry' para='Meet demand for a more sustainable energy mix – faster – with integrated oil, gas, and energy software from SAP.' bgImg={bgBanner} />
    </>
  )
}


