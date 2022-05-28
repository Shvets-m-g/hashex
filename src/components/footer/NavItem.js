import styles from "./Footer.module.scss";

export default function NavItem(props) {
    return (
        <li className={`${styles.navItem} ${props.style ? styles[props.style] : ''} ` }>
            <a href={props.data.link}>
                {props.data.name}
            </a>
        </li>
);
}

