import styles from "./Text.module.scss";
import parse from 'html-react-parser';

export default function Text(props) {
    const textSize = !props.size || props.size === 'medium' ?  styles.textMedium :
        props.size === 'big' ? styles.textBig : styles.textSmall;
    return (
        <div className={styles.text + ' ' + textSize}>
            {parse(props.text)}
        </div>
    )
}

