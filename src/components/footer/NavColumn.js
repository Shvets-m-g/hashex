import styles from "./Footer.module.scss";
import NavItem from './NavItem';

export default function NavColumn(props) {
    return (
        <ul className={styles.footerMenuSubmenu}>
            {props.menu.map((item) =>  {return <NavItem data={item} key={item.id} style='small'/> })}
        </ul>
    );
}

