import styles from "./Header.module.scss";

export default function NavItem(props) {
    return (
        <li className={styles.navItem}>
            <a href={props.data.link}>
                {props.data.name}
            </a>
        </li>
);
}

