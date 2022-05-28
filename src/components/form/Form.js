import styles from "./Form.module.scss";
import Button from '../buttons/Button'
import InputFactory from './InputFactory';
import parse from 'html-react-parser';
import {useReducer} from "react";

export default function Form(props) {
    const formValidationInitState = {};
    props.data.inputs.forEach(input => {
        formValidationInitState[input.name] = {
                value: input.value,
                isValid: false
        }
    })
    const [state, updateFormState] = useReducer(
        (state, updates) => ({
            ...state,
            ...updates,
        }), formValidationInitState
    );


    function setFormData(value, name, isValid) {
        updateFormState({[name]: { value: value, isValid: isValid}})
    }


    function postData() {
        console.log('postData', state);
    }
    return (
        <div className={styles.form}>
            {props.data.inputs.map((input, i) =>  {
                const inputProps = Object.assign(input, {setData: setFormData })
                return (
                    <div className={styles.formInput} key={input.id}>
                        {InputFactory(inputProps)}
                    </div>
                )})}
            <div className={styles.formButtonContainer}>
                <Button name={props.data.button.name}
                        link={props.data.button.link}
                        action={postData}
                        tag='button'
                        style='default' />
            </div>
            <div className={styles.formInfoText}>
                {parse(props.data.text)}
            </div>
        </div>
    );
}
