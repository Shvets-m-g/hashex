import React, { useState } from "react";
import styles from './Input.module.scss';
import UseInput from './helpers/UseInput';

export default function Textarea(props) {
    const [isValid, setValidation] = useState(true);
    const {  bind: bindName} = UseInput(props.name, props.value, props.setData, setValidation, props.validationPattern);
    return (
        <textarea type="text" {...bindName}
               placeholder={props.placeholder}
               className={`${styles.formTextarea} ${isValid ? styles.formInputValid : styles.formInputInvalid}`}/>
    );
}
