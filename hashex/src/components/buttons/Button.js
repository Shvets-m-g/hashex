import styles from './Button.module.scss';
import SocialFactory from "../socials/SocialFactory";

export default function Button(props) {
    const buttonStyle = props.style === 'primary' ? styles.buttonPrimary : styles.buttonDefault;
    let socialIcon;
    if (props.socialIcon) {
         socialIcon = SocialFactory(props.socialIcon);
    }
    const action = props && props.action ? props.action : function() {console.log('click on button')};
    if (props && props.tag === 'link') {
        return (
            <a
                href={props.link}
                className={`${styles.button} ${buttonStyle}`}>
                {socialIcon ? <i className={styles.buttonIcon}> {socialIcon} </i> : ''}

                {props.name}
            </a>
        )
    } else {
        return (
            <button
                className={`${styles.button} ${buttonStyle}`}
                onClick={action}
            >
                {props.name}
            </button>
        );
    }

}
