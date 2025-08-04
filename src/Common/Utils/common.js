//TODO : check string
export const isString = (text) => {
    return typeof text === 'string' && text.length > 0;
};

//TODO : check number
export const isNum = (text) => {
    return !isNaN(text.toString());
};