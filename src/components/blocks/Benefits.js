import styles from './Benefits.module.scss';
import colors from '../../styles/colors.module.css'
import Title from '../typography/Title'
import ColumnsInfo from "../infoPresentation/ColumnsInfo";


export default function InfoBlock(props)  {
    return (
        <div className={styles.infoBlock} style={{backgroundImage: `url(${props.data.bgImage})`, color: colors.whiteDefault}}>
            <div className="container">
                <div className={styles.infoBlockContainer}>
                    <Title data={props.data.title}/>
                    <ColumnsInfo data={props.data.infoBoxes} style='columnBorder'/>
                </div>
            </div>
        </div>
    )
}
