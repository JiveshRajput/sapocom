import React from 'react'
import SetHeaders from '@/layouts/SetHeaders'
import { HeaderBanner } from '@/components/banners/banners'
import { CtaBanner } from '@/components/banners/ctaBanners';
import WhyChooseSapocom from '@/components/WhyChooseSapocom';
import AboutIndustry from '@/components/AboutIndustry';
import IndustryFuture from '@/components/IndustryFuture';
import IndustryFeatures from '@/components/IndustryFeatures';
import IndustrySolution from '@/components/IndustrySolution';
import IndustryClient from '@/components/IndustryClient';
import ClientReviews from '@/components/ClientReviews';

// Images
import bgBanner from "@/assets/images/bgImages/industryOilAndGas.png";
import industryAbout from '@/assets/images/industry/oilGas/industryAbout.png'
import industryFeatures from '@/assets/images/industry/oilGas/industryFeatures.png'
import industrySolution from '@/assets/images/industry/oilGas/industrySolution.png'
import clientImage from '@/assets/images/industry/clientImage.png'

// Configs
import { industryChemicalClients, industryChemicalFutureData, industryChemicalSuccessData, industryChemicalFeaturesData } from '@/configs/config';

function OilGasPage() {
  return (
    <>
      <SetHeaders title='Oil & Gas Industry | Sapocom' />
      <HeaderBanner heading='Oil & Gas Industry' para='Meet demand for a more sustainable energy mix – faster – with integrated oil, gas, and energy software from SAP.' bgImg={bgBanner} />

      <AboutIndustry
        title='Clients'
        heading='We make you ready for the future of the oil and gas industry'
        description='We study, test, and analyze the impact of artificial intelligence, augmented/virtual reality, machine learning, and NLP and measure their'
        image={industryAbout}
        keyPoints={['Emphasizing point to be added', 'Emphasizing point to be added', 'Emphasizing point to be added', 'Emphasizing point to be added']}
      />

      <IndustryFuture
        title='Future'
        heading='SAP Services Tailored to the Oil and Gas Industry'
        description='Here you can have a short description of some digital technologies '
        cardsData={industryChemicalFutureData}
      />


      <IndustryFeatures
        image={industryFeatures}
        featuresData={industryChemicalFeaturesData}
      />

      <IndustrySolution
        successPoints={industryChemicalSuccessData}
        imageIndustrySuccess={industrySolution}
      />

      <IndustryClient
        title='clients'
        heading='We have been serving companies all over the globe'
        description='Our commitment to quality, innovation, and customer satisfaction sets us apart from the competition.'
        clientData={industryChemicalClients}
      />

      <WhyChooseSapocom />

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

export default OilGasPage
