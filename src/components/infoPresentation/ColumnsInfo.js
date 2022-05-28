import styles from './ColumnsInfo.module.scss';
import Title from '../typography/Title'
import Text from '../typography/Text'

function ColumnInfo(props)  {
    return (
        <div className={styles.infoBox}  >
            <div className={props.style}  >
                <Title data={props.data.titleData}/>
                <Text text={props.data.textData.text}/>
            </div>
        </div>
    )
}

export default function ColumnsInfo(props)  {
    const columnStyle = props.style === 'columnBorder' ? styles.border : '';
    const crossBetweenColumns = props.style === 'columnBorder' ? styles.infoBoxesCross : '';
    return (
        <div className={styles.infoBoxes + ' ' +  crossBetweenColumns}>
            <div className={styles.infoBoxesContainer}  >
                {props.data.map((item, i) =>  {return <ColumnInfo data={item} key={item.id} style={columnStyle}/> })}
            </div>
        </div>
    )
}

