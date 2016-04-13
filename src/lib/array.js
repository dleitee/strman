export const _isArray = value => {
    return (value !== null &&
           value.length >= 0 &&
           Object.prototype.toString.call(value) === '[object Array]');
}

export const _pop = array => {
    let newarray = [];
    for(let i = 0; i < array.length-1; i++){
        newarray[i] = array[i];
    }
    return newarray;
}
