import React from 'react'
import parse from 'html-react-parser';
import styles from "./Title.module.scss";

const H1 = (props) => {
    return <h1 className={styles.titleBig}> {parse(props.name)} </h1>
}

const H2 = (props) => {
    return <h2 className={styles.titleMedium}> {parse(props.name)} </h2>
}


const H3 = (props) => {
    return <h3 className={styles.titleSmall}> {parse(props.name)} </h3>
}

function TitleFactory(data) {
    switch (data.size) {
        case 1:
            return H1(data);
        case 2:
            return H2(data);
        case 3:
            return H3(data);

    }
}

function Title(props) {
    return (
        TitleFactory(props.data)
    )
}

export default Title