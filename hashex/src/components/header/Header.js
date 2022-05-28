import styles from "./Header.module.scss";
import NavItem from './NavItem';
import Button from '../buttons/Button';
import {useState} from "react";
import colors from "../../styles/colors.module.css";

const headerMenu = [
    {
        id: 1,
        link: "#",
        name: "Audits"
    },
    {
        id: 2,
        link: "#",
        name: "Services"
    },
    {
        id: 3,
        link: "#",
        name: "Products"
    },
    {
        id: 4,
        link: "#",
        name: "Company"
    }
];

const button = {
    data: {
        name: "Let’s Talk",
        type: "Secondary",
        socialIcon: {
            name: 'telegram',
        }
    }
}

export default function Header(props) {


    const [isShowingMenu, setShowingMenu] = useState(0);

    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.headerContainer}>
                    <div className={styles.headerLogo}>
                        <img src={props.logo} alt=""/>
                    </div>
                    <div className={styles.headerMenuButton + ' ' +  (isShowingMenu ? styles['headerMenuButtonActive'] : '')} onClick={() => setShowingMenu(!isShowingMenu)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={styles.headerInfo + ' ' +  (isShowingMenu ? styles['headerInfoShow'] : styles['headerInfoHidden'])}>

                        <menu className={styles.headerMenu}>
                            {headerMenu.map((item, i) =>  {return <NavItem data={item} key={item.id}/> })}
                        </menu>
                        <Button name={button.data.name}
                                link={button.data.link}
                                socialIcon={Object.assign(button.data.socialIcon, {color: colors.lightGrey})}
                                tag='link'
                                style='primary' />
                    </div>
                </div>
            </div>
        </div>
    );
}

