import styles from './InfoBlock.module.scss';
import Title from '../typography/Title'
import ColumnsInfo from "../infoPresentation/ColumnsInfo";

export default function InfoBlock(props)  {
    return (
        <div className={styles.infoBlock} >
            <div className="container">
                <div>
                    <Title data={props.data.title}/>
                    <ColumnsInfo data={props.data.infoBoxes}/>
                </div>
            </div>
        </div>
    )
}
