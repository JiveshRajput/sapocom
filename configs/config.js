// SVGs
import techSvg from '../assets/images/icons/tech.svg'
import cloudNetworkingSvg from '../assets/images/icons/cloud-networking.svg'
import heartInHandSvg from '../assets/images/icons/heart-in-hand.svg'
import shieldSvg from '../assets/images/icons/shield.svg'
import sapImplementationSvg from '../assets/images/icons/sap-implementation.svg'
import sapAdvisorySvg from '../assets/images/icons/sap-advisory.svg'
import sapDataMigrationSvg from '../assets/images/icons/sap-data-migration.svg'
import sapDataUpgradeSvg from '../assets/images/icons/sap-data-upgrade.svg'
import sapRolloutSvg from '../assets/images/icons/sap-rollout.svg'
import sapSupportSvg from '../assets/images/icons/sap-support.svg'

// PNGs
import homeBanner1 from "@/assets/images/bgImages/homeBanner1.png";
import industryOil from '@/assets/images/home/industry-oil.png'
import industryMining from '@/assets/images/home/industry-mining.png'
import sapImplementation from '@/assets/images/home/sap-implementation.png'
import reviewPerson from '@/assets/images/home/review-person.png'
import partner1 from '@/assets/images/partners/1.png'
import partner2 from '@/assets/images/partners/2.png'
import partner3 from '@/assets/images/partners/3.png'
import partner4 from '@/assets/images/partners/4.png'
import partner5 from '@/assets/images/partners/5.png'
import partner6 from '@/assets/images/partners/6.png'
import partner7 from '@/assets/images/partners/7.png'
import partner8 from '@/assets/images/partners/8.png'
import partner9 from '@/assets/images/partners/9.png'
import partner10 from '@/assets/images/partners/10.png'
import partner11 from '@/assets/images/partners/11.png'
import partner12 from '@/assets/images/partners/12.png'
import partner13 from '@/assets/images/partners/13.png'
import partner14 from '@/assets/images/partners/14.png'
import industryFutureChemical1 from '@/assets/images/industry/chemical/industryFuture1.png'
import industrySolutionProviding1 from '@/assets/images/industry/metalMining/industrySolutionProviding1.png'
import service1 from '@/assets/images/service/service1.png'
import service2 from '@/assets/images/service/service2.png'
import service3 from '@/assets/images/service/service3.png'
import service4 from '@/assets/images/service/service4.png'
import service5 from '@/assets/images/service/service5.png'
import service6 from '@/assets/images/service/service6.png'
import serviceBenefit1 from '@/assets/images/service/serviceBenefit1.png'

import team1 from '@/assets/images/about/team1.png'
import team2 from '@/assets/images/about/team2.png'
import team3 from '@/assets/images/about/team3.png'
import team4 from '@/assets/images/about/team4.png'
import team5 from '@/assets/images/about/team5.png'
import team6 from '@/assets/images/about/team6.png'
import team7 from '@/assets/images/about/team7.png'
import team8 from '@/assets/images/about/team1.png'


// Home page
export const navTabs = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About Us',
        link: '/about-us'
    },
    {
        name: 'Services',
        link: '/services'
    },
    {
        name: 'Industries',
        link: '/industries',
        subTabs: [
            {
                name: 'Oil and Gas',
                link: '/oil-and-gas'
            },
            {
                name: 'Metal and Mining',
                link: '/metal-and-mining'
            },
            {
                name: 'Agriculture',
                link: '/agriculture'
            },
            {
                name: 'Chemical',
                link: '/chemical'
            },
        ]
    },
]

export const slidesData = [
    {
        heading: 'Upstream to Downstream, our SAP supply chain solutions for you',
        para: "Whether it's optimizing exploration and production operations , our SAP-powered supply chain solutions delivercontrol, and agility.",
        image: homeBanner1,
        link: '/about-us',
        cta: '/contact-us',
        id: '1'
    },
    {
        heading: 'Upstream to Downstream, our SAP supply chain solutions for you',
        para: "Whether it's optimizing exploration and production operations , our SAP-powered supply chain solutions delivercontrol, and agility.",
        image: homeBanner1,
        link: '/about-us',
        cta: '/contact-us',
        id: '2'
    },
    {
        heading: 'Upstream to Downstream, our SAP supply chain solutions for you',
        para: "Whether it's optimizing exploration and production operations , our SAP-powered supply chain solutions delivercontrol, and agility.",
        image: homeBanner1,
        link: '/about-us',
        cta: '/contact-us',
        id: '3'
    },
]

export const industryDetails = [
    {
        name: 'Oil and Gas',
        description: 'Complete development and implementation of IS-Oil & Gas module.',
        link: '/industries/oil-and-gas',
        image: industryOil,
    },
    {
        name: 'Mining',
        description: 'Complete development and implementation of IS-Oil & Gas module.',
        link: '/industries/metal-and-mining',
        image: industryMining,
    },
    {
        name: 'Agriculture',
        description: 'Complete development and implementation of IS-Oil & Gas module.',
        link: '/industries/agriculture',
        image: industryOil,
    },
    {
        name: 'Chemicals',
        description: 'Complete development and implementation of IS-Oil & Gas module.',
        link: '/industries/chemical',
        image: industryMining,
    },
]

export const sapServicesDetails = [
    {
        name: 'SAP Implementation',
        description: 'Complete development and implementation of IS-Oil & Gas module.',
        image: sapImplementation,
    },
    {
        name: 'SAP Support',
        description: 'Complete development and implementation of IS-Oil & Gas module.',
        image: sapImplementation,
    },
    {
        name: 'SAP Rollout',
        description: 'Complete development and implementation of IS-Oil & Gas module.',
        image: sapImplementation,
    },
    {
        name: 'Data Migration',
        description: 'Complete development and implementation of IS-Oil & Gas module.',
        image: sapImplementation,
    },
    {
        name: 'Data Upgrade',
        description: 'Complete development and implementation of IS-Oil & Gas module.',
        image: sapImplementation,
    },
    {
        name: 'Advisory',
        description: 'Complete development and implementation of IS-Oil & Gas module.',
        image: sapImplementation,
    },
]

export const whyChooseUsData = [
    {
        name: 'Cloud Driven Tech',
        description: 'Our teams create native and cross-platform IoT-driven applications that open up space for smart access and analysis of data generated by in this way providing businesses with the ability to get a better understanding of their custome.',
        image: cloudNetworkingSvg,
    },
    {
        name: 'HiTech Service',
        description: 'Our teams create native and cross-platform IoT-driven applications that open up space for smart access and analysis of data generated by in this way providing businesses with the ability to get a better understanding of their custome.',
        image: techSvg,
    },
    {
        name: 'Certified Force',
        description: 'Our teams create native and cross-platform IoT-driven applications that open up space for smart access and analysis of data generated by in this way providing businesses with the ability to get a better understanding of their custome.',
        image: cloudNetworkingSvg,
    },
    {
        name: 'Cloud Driven Tech',
        description: 'Our teams create native and cross-platform IoT-driven applications that open up space for smart access and analysis of data generated by in this way providing businesses with the ability to get a better understanding of their custome.',
        image: techSvg,
    },
    {
        name: 'Cloud Driven Tech',
        description: 'Our teams create native and cross-platform IoT-driven applications that open up space for smart access and analysis of data generated by in this way providing businesses with the ability to get a better understanding of their custome.',
        image: cloudNetworkingSvg,
    },
    {
        name: 'Cloud Driven Tech',
        description: 'Our teams create native and cross-platform IoT-driven applications that open up space for smart access and analysis of data generated by in this way providing businesses with the ability to get a better understanding of their custome.',
        image: techSvg,
    },
]

export const partnersDetails = [
    {
        name: 'partner1',
        image: partner1,
    },
    {
        name: 'partner2',
        image: partner2,
    },
    {
        name: 'partner3',
        image: partner3,
    },
    {
        name: 'partner4',
        image: partner4,
    },
    {
        name: 'partner5',
        image: partner5,
    },
    {
        name: 'partner6',
        image: partner6,
    },
    {
        name: 'partner7',
        image: partner7,
    },
    {
        name: 'partner8',
        image: partner8,
    },
    {
        name: 'partner9',
        image: partner9,
    },
    {
        name: 'partner10',
        image: partner10,
    },
    {
        name: 'partner11',
        image: partner11,
    },
    {
        name: 'partner12',
        image: partner12,
    },
    {
        name: 'partner13',
        image: partner13,
    },
    {
        name: 'partner14',
        image: partner14,
    },
]

export const reviewData = [
    {
        name: 'Jonhathan Wick',
        position: 'Director, Table.inc',
        review: "Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences! and these positives lead to our growth  but positive experiences! and these positives lead to our growth but positive experiences! and these positives lead to our growth",
        image: reviewPerson,
    },
    {
        name: 'Jonhathan Wick',
        position: 'Director, Table.inc',
        review: "Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences! and these positives lead to our growth  but positive experiences! and these positives lead to our growth but positive experiences! and these positives lead to our growth",
        image: reviewPerson,
    },
    {
        name: 'Jonhathan Wick',
        position: 'Director, Table.inc',
        review: "Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences! and these positives lead to our growth  but positive experiences! and these positives lead to our growth but positive experiences! and these positives lead to our growth",
        image: reviewPerson,
    },
]


// About Us

export const teamsList = [
    {
        name: 'Jivesh',
        designation: 'Developer',
        image: team1
    },
    {
        name: 'Jivesh',
        designation: 'Developer',
        image: team2
    },
    {
        name: 'Jivesh',
        designation: 'Developer',
        image: team3
    },
    {
        name: 'Jivesh',
        designation: 'Developer',
        image: team4
    },
    {
        name: 'Jivesh',
        designation: 'Developer',
        image: team5
    },
    {
        name: 'Jivesh',
        designation: 'Developer',
        image: team6
    },
    {
        name: 'Jivesh',
        designation: 'Developer',
        image: team7
    },
    {
        name: 'Jivesh',
        designation: 'Developer',
        image: team8 
    },
    
]


// Services

export const serviceSolution = [
    'Empowering Your Success Through Expert Services',
    'Empowering Your Success Through Expert Services',
    'Empowering Your Success Through Expert Services',
    'Empowering Your Success Through Expert Services',
    'Empowering Your Success Through Expert Services',
    'Empowering Your Success Through Expert Services',
]


export const servicesData = [
    {
        title: 'SAP Implementation',
        description: 'Implementing SAP involves setting up the software to meet the unique needs of the business. This involves customizing the software to match the business processes, integrating SAP with other software and applications, and configuring the system to meet the needs of the users. SAP implementation services can also include data migration and training services to ensure a smooth transition to the new system.',
        image: service1,
    },
    {
        title: 'SAP Rollout',
        description: 'Implementing SAP involves setting up the software to meet the unique needs of the business. This involves customizing the software to match the business processes, integrating SAP with other software and applications, and configuring the system to meet the needs of the users. SAP implementation services can also include data migration and training services to ensure a smooth transition to the new system.',
        image: service2,
    },
    {
        title: 'Data Migration',
        description: 'Implementing SAP involves setting up the software to meet the unique needs of the business. This involves customizing the software to match the business processes, integrating SAP with other software and applications, and configuring the system to meet the needs of the users. SAP implementation services can also include data migration and training services to ensure a smooth transition to the new system.',
        image: service3,
    },
    {
        title: 'Data Upgrade',
        description: 'Implementing SAP involves setting up the software to meet the unique needs of the business. This involves customizing the software to match the business processes, integrating SAP with other software and applications, and configuring the system to meet the needs of the users. SAP implementation services can also include data migration and training services to ensure a smooth transition to the new system.',
        image: service4,
    },
    {
        title: 'Advisory',
        description: 'Implementing SAP involves setting up the software to meet the unique needs of the business. This involves customizing the software to match the business processes, integrating SAP with other software and applications, and configuring the system to meet the needs of the users. SAP implementation services can also include data migration and training services to ensure a smooth transition to the new system.',
        image: service5,
    },
    {
        title: 'Support',
        description: 'Implementing SAP involves setting up the software to meet the unique needs of the business. This involves customizing the software to match the business processes, integrating SAP with other software and applications, and configuring the system to meet the needs of the users. SAP implementation services can also include data migration and training services to ensure a smooth transition to the new system.',
        image: service6,
    },
]

export const serviceBenefits = [
    {
        title: 'Expert Workforce to expert solution',
        description: 'Write here ag good description about something to wxcel yto your usomerss s tat hey hgeyf thewf fhere best thng in their minf aboiuh your comoany',
        image: serviceBenefit1,
    },
    {
        title: 'Expert Workforce to expert solution',
        description: 'Write here ag good description about something to wxcel yto your usomerss s tat hey hgeyf thewf fhere best thng in their minf aboiuh your comoany',
        image: serviceBenefit1,
    },
    {
        title: 'Expert Workforce to expert solution',
        description: 'Write here ag good description about something to wxcel yto your usomerss s tat hey hgeyf thewf fhere best thng in their minf aboiuh your comoany',
        image: serviceBenefit1,
    },
]

export const serviceProvidedData = [
    {
        title: 'SAP Implementation',
        icon: sapImplementationSvg,
        points: [
            "Point 1 you provide under",
            "Point 1 you provide under",
            "Point 1 you provide under",
            "Point 1 you provide under",
        ]
    },
    {
        title: 'SAP Rollout',
        icon: sapRolloutSvg,
        points: [
            "Point 1 you provide under",
            "Point 1 you provide under",
            "Point 1 you provide under",
            "Point 1 you provide under",
        ]
    },
    {
        title: 'SAP Support',
        icon: sapSupportSvg,
        points: [
            "Point 1 you provide under",
            "Point 1 you provide under",
            "Point 1 you provide under",
            "Point 1 you provide under",
        ]
    },
    {
        title: 'Data Migration',
        icon: sapDataMigrationSvg,
        points: [
            "Point 1 you provide under",
            "Point 1 you provide under",
            "Point 1 you provide under",
            "Point 1 you provide under",
        ]
    },
    {
        title: 'Advisory',
        icon: sapAdvisorySvg,
        points: [
            "Point 1 you provide under",
            "Point 1 you provide under",
            "Point 1 you provide under",
            "Point 1 you provide under",
        ]
    },
    {
        title: 'Data Upgrade',
        icon: sapDataUpgradeSvg,
        points: [
            "Point 1 you provide under",
            "Point 1 you provide under",
            "Point 1 you provide under",
            "Point 1 you provide under",
        ]
    },
]


// Industry Data

// 1. Chemical
export const industryChemicalFutureData = [
    {
        title: 'Chemical',
        description: 'Complete development and implementation of IS-Oil & Gas module.',
        image: industryFutureChemical1,
    },
    {
        title: 'Chemical',
        description: 'Complete development and implementation of IS-Oil & Gas module.',
        image: industryFutureChemical1,
    },
    {
        title: 'Chemical',
        description: 'Complete development and implementation of IS-Oil & Gas module.',
        image: industryFutureChemical1,
    },
]

export const industryChemicalFeaturesData = [
    {
        title: 'Cloud Solutions',
        description: 'They can help oil and gas companies leverage the benefits of cloud computing to increase agility, scalability, and efficiency. This could include implementing solutions for'
    },
    {
        title: 'Digital transformation',
        description: 'They can help oil and gas companies leverage the benefits of cloud computing to increase agility, scalability, and efficiency. This could include implementing solutions for'
    },
    {
        title: 'Optimization',
        description: 'They can help oil and gas companies leverage the benefits of cloud computing to increase agility, scalability, and efficiency. This could include implementing solutions for'
    },
]

export const industryDetailsData = [
    {
        image: heartInHandSvg,
        title: 'Cloud Solutions',
        description: 'They can develop custom applications and solutions that are tailored to meet the specific needs of the oil and'
    },
    {
        image: heartInHandSvg,
        title: 'Digital',
        description: 'They can develop custom applications and solutions that are tailored to meet the specific needs of the oil and'
    },
    {
        image: shieldSvg,
        title: 'Optimization',
        description: 'They can develop custom applications and solutions that are tailored to meet the specific needs of the oil and'
    },
    {
        image: shieldSvg,
        title: 'Optimization',
        description: 'They can develop custom applications and solutions that are tailored to meet the specific needs of the oil and'
    },
]

export const industryChemicalSuccessData = [
    'Intelligent Asset Management',
    'Supply Chain Optimization',
    'Digital Transformation and Innovation',
    'Enterprise Resource Planning (ERP)',
    'Customer Experience Management',
    'Environmental Health and Safety Management',
]

export const industryChemicalClients = [
    {
        name: 'reliance',
        image: partner10,
    },
    {
        name: 'PAR',
        image: partner1,
    },
    {
        name: 'Nornickel',
        image: partner3,
    },
    {
        name: 'Talisman',
        image: partner4,
    },
    {
        name: 'Viterra',
        image: partner5,
    },
    {
        name: 'Baker Hughes',
        image: partner6,
    },
]

// 1. Metal and Mining
export const industryMetalSolutionProviding = [
    {
        title: 'Commodity Pricing Engine (CPE)',
        heading: 'Commodity Pricing Engine (CPE)',
        description: 'Commodity Pricing Engine (CPE) provides a robust pricing framework that takes into account various quality parameters, assay percentages, and other relevant factors. This helps metal and mining companies to accurately price their products and minimize the impact of pricing fluctuations on their business.', 
        image: industrySolutionProviding1, 
    }, 
    {
        title: 'Production Solutions',
        heading: 'Integrated Mine Operations and Production solutions (IS Mine)',
        description: '(IS Mine) helps mining companies plan, schedule, and optimize their operations more effectively. This solution integrates all mining processes into a single system, enabling real-time data analysis and decision-making. By providing comprehensive planning and scheduling capabilities, IS Mine can help mining companies to improve productivity, reduce costs, and increase profitability.', 
        image: industrySolutionProviding1, 
    }, 
    {
        title: 'SAP Solutions',
        heading: 'SAP solutions such as SAP Environment, Health, and Safety Management',
        description: 'It can help mining companies to ensure compliance with regulatory requirements. This solution provides a comprehensive set of tools for managing environmental, health, and safety risks, ensuring compliance with regulations, and reducing operational risks.', 
        image: industrySolutionProviding1, 
    }, 
]