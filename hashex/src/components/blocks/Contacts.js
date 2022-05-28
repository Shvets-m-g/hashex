import styles from './Contacts.module.scss';
import colors from '../../styles/colors.module.css'
import Title from '../typography/Title'
import Text from '../typography/Text'
import SocialFactory from "../socials/SocialFactory";
import Form from "../form/Form";


export default function ContactsBlock(props)  {
    return (
        <div className={styles.contactsBlock}  style={{backgroundImage: `url(${props.data.bgImage})`, color: colors.blackDefault}}>
            <div className="container">
                <div className={styles.contactsBlockContainer}  >
                    <div className={styles.columnInfo} >
                        <Title data={props.data.title}/>
                        <div  style={{color: colors.lightBlack}}>
                            <Text text={props.data.text}  />
                        </div>
                        <div className={styles.contactsSocials}>
                            {props.data.socialsList.map((social, i) =>  {
                                return (
                                    <a className={styles.contactSocial} href={social.link} key={social.id}>
                                        <i>
                                            {SocialFactory(social)}
                                        </i>
                                        <span>
                                        <div>{social.title}</div>
                                      </span>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                    <div className={styles.columnForm} >
                        <Form data={props.data.form}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
