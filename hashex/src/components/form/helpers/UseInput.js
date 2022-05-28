import {useState} from "react";
import ValidateInput from './ValidateInput';

export default function UseInput(name, initialValue, setFormData, setValidation, validationPattern) {
    const [value, setValue] = useState(initialValue);
    return {
        value,
        setValue,
        bind: {
            value,
            onChange: event => {
                const isValid =  validationPattern ? ValidateInput(event.target.value, validationPattern) : true;
                setValue(event.target.value);
                setValidation(isValid)
                setFormData(event.target.value, name, isValid);
            }
        }
    };
};
