export const required = (value) => {
    if (value) return undefined;
    return "Field is required";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

export const minLengthCreator = (minLength) => (value) => {
    if (value.length < minLength) return `Min length is ${minLength} symbols`;
    return undefined;
}

export const isPlusNumber = (value) => {
    if (!isNaN(Number(value)) && value > 0) return undefined;
        return "Field must be a plus number";
}

export const isPhoneNumber = (value) => {
    const reg = /^\+375(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
    if (value.match(reg) && value.match(reg)[0] === value) return undefined;
    return "Phone is uncorrect";
}

export const correctWorkSchedule = (value) => {
    const reg = /(\d{1,2})\/(\d{1,2})$/;
    if (value.match(reg) && value.match(reg)[0] === value) return undefined;
    return "Work schedule is uncorrect";
}

export const maxPercent = (value) => {
    if (value > 0 && value <= 100) return undefined;
    return "Percent must be between 0 and 100"
}