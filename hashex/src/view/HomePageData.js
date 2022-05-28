import logoApeswap from "../images/partners/apeswap.svg";
import logoLiquid from "../images/partners/logo-liquid.svg";
import logoYourLogo from "../images/partners/your-logo.svg";
import logoForta from "../images/partners/forta_white.png";
import logoGnosisChain from "../images/partners/gnosis_chain.svg";
import logoPolygon from "../images/partners/polygon.svg";
import logoAnalytex from "../images/partners/logo_analytex.svg";
import logoCryptEx from "../images/partners/logo_crypt_ex.svg";
import BenefitsBgImage from '../images/benefits_bg.jpg';
import IntroBgImage from '../images/intro_bg.jpg';
import ContactsBgImage from '../images/contacts_bg.jpg';


const introBlock = {
    bgImage: IntroBgImage,
    title: {
        name: 'HashEx affiliate program',
        size: 1
    },
    text: 'Support the HashEx mission of making the DeFi market <br> a safe space while taking advantage of HashEx offers.',
    button: {
        name: 'Apply for partnership',
        type: 'default',
        link: '#'
    },
    logosPartners: [
        {
            id: 0,
            src: logoApeswap
        },
        {
            id: 1,
            src: logoLiquid
        },
        {
            id: 2,
            src: logoYourLogo
        },
        {
            id: 3,
            src: logoForta
        },
        {
            id: 4,
            src: logoGnosisChain
        },
        {
            id: 5,
            src: logoPolygon
        },
        {
            id: 6,
            src: logoAnalytex
        },
        {
            id: 7,
            src: logoCryptEx
        }
    ]
};
const infoBlock = {
    title: {
        name: 'HashEx is an expert in DeFi <br/> intelligence and blockchain security',
        size: 2
    },
    infoBoxes: [
        {
            id: 0,
            titleData: {
                name: 'HashEx affiliate program',
                size: 3
            },
            textData: {
                text:  'Providing factual and relevant homePageData regarding new and existing DeFi projects as well as the latest activities on the market.'
            }
        },
        {
            id: 1,
            titleData: {
                name: 'Recommendations',
                size: 3
            },
            textData: {
                text:  'One of the leading smart contract auditors, we deliver in-depth audit reports, providing not only a list of detected issues but also recommendations on how to fix them.'
            }
        },
        {
            id: 2,
            titleData: {
                name: 'Influential name',
                size: 3
            },
            textData: {
                text:  'Over the years, HashEx has grown to become one of the most impactful tech advisories in the world and the auditor of choice for many big names and ecosystems in the DeFi space.'
            }
        }
    ],
};
const benefitsBlock = {
    bgImage: BenefitsBgImage,
    title: {
        name: 'The partnership formula',
        size: 2
    },
    infoBoxes: [
        {
            id: 0,
            titleData: {
                name: 'Referral bonus',
                size: 3
            },
            textData: {
                text:  'For our referral partners we have prepared a bonus reward. If you know someone who needs our services, let us know about it.'
            }
        },
        {
            id: 1,
            titleData: {
                name: 'Discounts',
                size: 3
            },
            textData: {
                text:  'For our partners we provide discounts on our services.'
            }
        },
        {
            id: 2,
            titleData: {
                name: 'Brand avernes',
                size: 3
            },
            textData: {
                text:  'We provide marketing support in our communities for our partners.'
            }
        }
    ]
};
const contactBlock = {
    bgImage: ContactsBgImage,
    title: {
        name: 'Become part of the DeFi intelligence alliance',
        size: 2
    },
    text: 'Fill out this form and we will choose the best partnership offer for you',
    socialsList: [
        {
            id: 0,
            name: 'telegram',
            link: '#',
            title: 'telegram'
        },
        {
            id: 1,
            name: 'email',
            link: '#',
            title: 'contact@hashex.org'
        }
    ],
    form: {
        inputs: [
            {
                id: 0,
                required: false,
                type: 'input',
                name: "name",
                placeholder: 'Name / Company Name',
                value: ''
            },
            {
                id: 1,
                required: true,
                type: 'input',
                name: "email",
                placeholder: 'Email*',
                value: ''
            },
            {
                id: 2,
                required: true,
                type: 'input',
                name: "link",
                placeholder: 'Project link*',
                value: ''
            },
            {
                id: 3,
                required: false,
                type: 'textarea',
                name: "about",
                placeholder: 'Tell us about yourself',
                value: ''
            }
        ],
        button: {
            name: "Apply for partnership",
            type: "default",
        },
        text: 'This site is protected by the&nbsp;<a href="#"> Privacy Policy</a>&nbsp;and&nbsp;<a href="#"> Cookie Policy apply </a> '

}
};
const homePageData = {
    introBlock: introBlock,
    infoBlock: infoBlock,
    benefitsBlock: benefitsBlock,
    contactBlock: contactBlock
};


export default homePageData;