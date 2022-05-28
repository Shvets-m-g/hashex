import React, { useState } from "react";
import styles from './Input.module.scss';
import UseInput from './helpers/UseInput';

export default function Input(props) {
    const [isValid, setValidation] = useState(true);
    const {  bind: bindName} = UseInput(props.name, props.value, props.setData, setValidation, props.validationPattern);
    return (
        <input type="text" {...bindName}
                  placeholder={props.placeholder}
                  className={`${styles.formInput} ${isValid ? styles.formInputValid : styles.formInputInvalid}`}/>
    );
}
