import styles from './IntroBlock.module.scss';
import colors from '../../styles/colors.module.css'
import Title from '../typography/Title'
import Text from '../typography/Text'
import arrowBgIcon from '../../images/intro-icon-arrow.svg';
import Button from "../buttons/Button";


const text = 'Support the HashEx mission of making the DeFi market <br> a safe space while taking advantage of HashEx offers.';

export default function IntroBlock(props)  {
    return (
        <div className={styles.introBlock}  style={{backgroundImage: `url(${props.data.bgImage})`, color: colors.whiteDefault}}>
            <div className="container">
                <div className={styles.introBlockContainer}  >
                    <Title data={props.data.title}/>
                    <div className={styles.introText}>
                        <Text text={props.data.text} size="big"/>
                    </div>
                    <div className={styles.introButtonContainer}>
                        <Button name={props.data.button.name}
                                link={props.data.button.link}
                                tag='link'
                                style='default' />
                        <div className={styles.introArrow}>
                            <img src={arrowBgIcon} alt=""/>
                        </div>
                    </div>
                    <ul className={styles.introPartners}>
                        {props.data.logosPartners.map((logo, i) =>  {
                            return (
                                <li key={logo.id}>
                                    <img src={logo.src} key={logo.id}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
