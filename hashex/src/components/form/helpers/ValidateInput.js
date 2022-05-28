const MIN_INPUT_LENGTH = 3;

export default function ValidateInput(value, validationPattern) {
    if (validationPattern) {
        return value.match(validationPattern) && value.length > MIN_INPUT_LENGTH;
    } else {
        return true
    }
}