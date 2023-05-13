import React from 'react'
import SetHeaders from '@/components/SetHeaders'
import { HeaderBanner } from '@/components/banners/banners'
import bgBanner from "@/assets/images/bgImages/industryOilAndGas.png";

function OilGasPage() {
  return (
    <>
      <SetHeaders title='Oil & Gas Industry | Sapocom' />
      <HeaderBanner heading='Oil & Gas Industry' para='Meet demand for a more sustainable energy mix – faster – with integrated oil, gas, and energy software from SAP.' bgImg={bgBanner} />
    </>
  )
}

export default OilGasPage
