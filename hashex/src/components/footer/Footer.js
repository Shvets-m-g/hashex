import styles from "./Footer.module.scss";
import NavItem from './NavItem';
import NavColumn from "./NavColumn";
import SocialFactory from "../socials/SocialFactory";
import colors from "../../styles/colors.module.css"


const footerInfoMenu = [
    {
        id: 1,
        name: "© All rights reserved",
        link: "#"
    },
    {
        id: 2   ,
        name: "Privacy Policy",
        link: "#"
    },
    {
        id: 3,
        name: "Cookie Policy",
        link: "#"
    }

]

const footerMenu = [
    {
        id: 0,
        link: "#",
        name: "Audits",
        submenu: [
            {
                id: 1,
                link: "#",
                name: "Smart Contracts Audit"
            },
            {
                id: 2,
                link: "#",
                name: "Conducted audits"
            }
        ]
    },
    {
        id: 1,
        link: "#",
        name: "Chains",
        submenu: [
            {
                id: 1,
                link: "#",
                name: "BSC"
            },
            {
                id: 2,
                link: "#",
                name: "Fantom"
            },
            {
                id: 3,
                link: "#",
                name: "Solana"
            },
            {
                id: 4,
                link: "#",
                name: "Avalanche"
            },
            {
                id: 5,
                link: "#",
                name: "Avrora"
            },
            {
                id: 6,
                link: "#",
                name: "Polygon"
            },
            {
                id: 7,
                link: "#",
                name: "Gnosis Chain"
            }
        ]
    },
    {
        id: 2,
        link: "#",
        name: "TYPES OF AUDITS",
        submenu: [
            {
                id: 1,
                link: "#",
                name: "NFT"
            },
            {
                id: 2,
                link: "#",
                name: "Staking"
            },
            {
                id: 3,
                link: "#",
                name: "Stablecoin audit"
            },
            {
                id: 4,
                link: "#",
                name: "DApp audit"
            },
            {
                id: 5,
                link: "#",
                name: "DEX audit"
            },
            {
                id: 6,
                link: "#",
                name: "RFI token audit"
            },
            {
                id: 7,
                link: "#",
                name: "BabyToken audit"
            },
            {
                id: 8,
                link: "#",
                name: "Farms audit"
            },
            {
                id: 9,
                link: "#",
                name: "DAO audit"
            },
            {
                id: 10,
                link: "#",
                name: "erc20, erc721, erc1155"
            },
            {
                id: 11,
                link: "#",
                name: "Marketplaces, auctions, games"
            }
        ]
    },
    {
        id: 3,
        link: "#",
        name: "Products",
        submenu: [
            {
                id: 1,
                link: "#",
                name: "AnalytEx"
            },
            {
                id: 2,
                link: "#",
                name: "CryptEx"
            },
            {
                id: 3,
                link: "#",
                name: "Online ABI Encoder"
            },
            {
                id: 4,
                link: "#",
                name: "Paper Wallet"
            },
            {
                id: 5,
                link: "#",
                name: "AMM plugin for margin trading"
            },
            {
                id: 6,
                link: "#",
                name: "Multi-convertor"
            }
        ]
    },
    {
        id: 4,
        link: "#",
        name: "Company",
        submenu: [
            {
                id: 1,
                link: "#",
                name: "About us"
            },
            {
                id: 2,
                link: "#",
                name: "Media"
            },
            {
                id: 3,
                link: "#",
                name: "Careers"
            },
            {
                id: 4,
                link: "#",
                name: "Customers"
            },
            {
                id: 5,
                link: "#",
                name: "Partners"
            },
            {
                id: 6,
                link: "#",
                name: "Blog"
            },
            {
                id: 7,
                link: "#",
                name: "FAQ"
            },
            {
                id: 8,
                link: "#",
                name: "Contact us"
            }
        ]
    }
];

const socialsList = [
    {
        id: 0,
        name: 'medium',
        link: '#'
    },
    {
        id: 1,
        name: 'twitter',
        link: '#'
    },
    {
        id: 2,
        name: 'linkedin',
        link: '#'
    },
    {
        id: 3,
        name: 'github',
        link: '#'
    },
    {
        id: 4,
        name: 'email',
        link: '#'
    },
    {
        id: 5,
        name: 'telegram',
        link: '#'
    },
]

//colors.lightGrey

export default function Footer(props) {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.footerContainer}>
                   <div className={styles.footerMainInfo}>
                       <div className={styles.footerLogo} >
                           <img src={props.logo} alt=""/>
                       </div>
                       <menu className={styles.footerSocials}>
                           {socialsList.map((social, i) =>  {
                               const socialProps = Object.assign(social, {color: colors.lightGrey})
                               return (
                                   <li key={social.id}>
                                       <a href={social.link} className={styles.footerSocialLink}>
                                           {SocialFactory(socialProps)}
                                       </a>
                                   </li>
                               )
                           })}


                       </menu>
                       <menu className={styles.footerInfoMenu}>
                           {footerInfoMenu.map((item, i) =>  {return <NavItem data={item} key={item.id}/> })}
                       </menu>
                   </div>
                    <menu className={styles.footerFullMenu}>
                        {footerMenu.map((item, i) =>  {
                            const navItemData = {name: item.name, link: item.link};
                            return (
                               <div className={styles.footerMenuColumn} key={item.id}>
                                   <NavItem data={navItemData} />
                                   <NavColumn menu={item.submenu} />
                               </div>
                        )
                        })}
                    </menu>
                </div>
            </div>
        </div>
    );
}
