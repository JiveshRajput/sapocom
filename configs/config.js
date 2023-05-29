// SVGs
import techSvg from '../assets/images/icons/tech.svg'
import handshakeSvg from '../assets/images/icons/handshake.svg'
import alertSvg from '../assets/images/icons/alert.svg'
import moneySvg from '../assets/images/icons/money.svg'
import socialPeopleSvg from '../assets/images/icons/social-people.svg'
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
import homeBanner2 from "@/assets/images/bgImages/homeBanner2.png";
import homeBanner3 from "@/assets/images/bgImages/homeBanner3.png";
import industryOil from '@/assets/images/home/industry-oil.png'
import industryMining from '@/assets/images/home/industry-mining.png'
import industryChemical from '@/assets/images/home/industry-chemical.png'
import industryAgriculture from '@/assets/images/home/industry-agriculture.png'
import sapSupport from '@/assets/images/home/sap-support.png'
import sapRollout from '@/assets/images/home/sap-rollout.png'
import sapImplementation from '@/assets/images/home/sap-implementation.png'
import sapDataMigration from '@/assets/images/home/sap-data-migration.png'
import sapDataUpgrade from '@/assets/images/home/sap-data-upgrade.png'
import sapAdvisory from '@/assets/images/home/sap-advisory.png'
import reviewPerson1 from '@/assets/images/home/review-person1.png'
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
        heading: 'Enhance Your Supply Chain Visibility with SAP',
        para: "Make data-driven decisions, improve collaboration, and achieve supply chain excellence. Discover the power of SAP now!",
        image: homeBanner1,
        link: '/about-us',
        cta: '/contact-us',
        id: '1'
    },
    {
        heading: 'Streamline Your Operations with SAP',
        para: "Unlock the full potential of your supply chain by leveraging SAP solutions. Transform your processes, increase efficiency, and drive business growth. Explore SAP today!",
        image: homeBanner2,
        link: '/about-us',
        cta: '/contact-us',
        id: '2'
    },
    {
        heading: 'Optimize Your Supply Chain with SAP Solutions',
        para: "Our supply chain solutions provide the necessary control and agility to optimize all production explorations and operations.",
        image: homeBanner3,
        link: '/about-us',
        cta: '/contact-us',
        id: '3'
    },
]

export const industryDetails = [
    {
        name: 'Oil and Gas',
        description: 'Our specialized SAP services for the oil and gas industry optimize operational processes',
        link: '/industries/oil-and-gas',
        image: industryOil,
    },
    {
        name: 'Metal & Mining',
        description: 'We help mining companies improve resource planning, optimize production, and enhance safety measures.',
        link: '/industries/metal-and-mining',
        image: industryMining,
    },
    {
        name: 'Agriculture',
        description: 'Our tailored SAP services for the agriculture sector enable effective farm management and streamlined procurement.',
        link: '/industries/agriculture',
        image: industryAgriculture,
    },
    {
        name: 'Chemicals',
        description: 'Our SAP solutions for the chemicals industry, enabling better demand forecasting and enhanced regulatory compliance',
        link: '/industries/chemical',
        image: industryChemical,
    },
]

export const sapServicesDetails = [

    {
        name: 'SAP Support',
        description: 'We offer comprehensive SAP support services and system maintenance to ensure the smooth operation of your SAP environment.',
        image: sapSupport,
    },
    {
        name: 'SAP Rollout',
        description: 'Our experienced consultants facilitate SAP rollout projects and ensure consistent processes to enable efficient collaboration across your organization.',
        image: sapRollout,
    },
    {
        name: 'SAP Implementation',
        description: "Our expert team ensures a seamless SAP implementation process and enable you to unlock the full potential of SAP's capabilities.",
        image: sapImplementation,
    },
    {
        name: 'Data Migration',
        description: 'We specialize in secure and efficient data migration services to minimize downtime and ensure data integrity throughout the process.',
        image: sapDataMigration,
    },
    {
        name: 'Data Upgrade',
        description: 'Our experts assist with SAP data upgrades, optimizing system performance, and leveraging the latest features and enhancements.',
        image: sapDataUpgrade,
    },
    {
        name: 'Advisory',
        description: 'Our advisory services provide strategic guidance and help you align your SAP strategy with your business goals for long-term success.',
        image: sapAdvisory,
    },
]

export const whyChooseUsData = [
    {
        name: 'Commitment to SAP',
        description: 'With over 6 years of experience, we are a dedicated pure-play SAP firm providing exceptional services to our clients. Our commitment and consistency have earned us the reputation as the premier Consulting Partner for leading big four consulting firms.',
        image: handshakeSvg,
    },
    {
        name: 'Industry Solutions',
        description: "We understand the importance of delivering tailored solutions to our clients. That's why we have dedicated industry teams for both pre-sales and value engineering. Our pre-sales team possesses in-depth knowledge of various industries and works closely with clients.",
        image: techSvg,
    },
    {
        name: 'Risk Mitigation',
        description: 'Our teams create native and cross-platform IoT-driven applications that open up space for smart access and analysis of data generated by in this way providing businesses with the ability to get a better understanding of their custome.',
        image: alertSvg,
    },
    {
        name: 'Flexibility',
        description: 'Our teams create native and cross-platform IoT-driven applications that open up space for smart access and analysis of data generated by in this way providing businesses with the ability to get a better understanding of their custome.',
        image: cloudNetworkingSvg,
    },
    {
        name: 'Competetive Cost',
        description: 'We are committed to providing our clients with an aggressive implementation pricing model that effectively reduces the cost of ownership. As a dedicated offshore SAP Solutions Center, we have optimized our operations',
        image: moneySvg,
    },
    {
        name: 'Breadth & Depth',
        description: 'Our team at Sapocom possesses extensive industry experience in the Metal & Mining and Oil & Gas sectors. We have deep knowledge and understanding of the specific challenges, requirements, and best practices within these industries.',
        image: socialPeopleSvg,
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
        review: "SAPOCOM experts played a key role in implementation and launch of functionality of new commodity price engine CPE/ CPF in one of the biggest mining projects starting from configuration and supporting developments, testing and defect resolution. From the outset, the team demonstrated an impressive level of professionalism and expertise. Their attention to detail and willingness to work closely with us to ensure that our needs were met were truly appreciated. The team's communication was excellent, and we always felt informed and involved throughout the project. We are grateful for contribution of SAPOCOM colleagues and hope for future perspective cooperation.",
        image: reviewPerson1,
    },
    {
        name: 'Jonhathan Wick',
        position: 'Director, Table.inc',
        review: "SAPOCOM experts played a key role in implementation and launch of functionality of new commodity price engine CPE/ CPF in one of the biggest mining projects starting from configuration and supporting developments, testing and defect resolution. From the outset, the team demonstrated an impressive level of professionalism and expertise. Their attention to detail and willingness to work closely with us to ensure that our needs were met were truly appreciated. The team's communication was excellent, and we always felt informed and involved throughout the project. We are grateful for contribution of SAPOCOM colleagues and hope for future perspective cooperation.",
        image: reviewPerson1,
    },

]


// About Us

export const teamsList = [
    {
        name: 'Dr. Tribhuvan Raj',
        designation: 'Director',
        image: team1
    },
    {
        name: 'Anchit Aggarwal',
        designation: 'SAP Senior Consultant',
        image: team2
    },
    {
        name: 'Ramesh Marriappa',
        designation: 'Senior Manager',
        image: team3
    },
    {
        name: 'Raghavendra Reddy',
        designation: 'SAP Senior Consultant',
        image: team4
    },
    {
        name: 'Anurag Singh',
        designation: 'SAP Senior Consultant',
        image: team5
    },
    {
        name: 'Shiba Pattnaik',
        designation: 'SAP Senior Consultant',
        image: team6
    },
    {
        name: 'Kritika Mohan',
        designation: 'Administration & Finance Head',
        image: team7
    },
    {
        name: 'Shrey Kanherkar',
        designation: 'SAP Senior Consultant',
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