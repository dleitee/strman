export const _pop = array => {
    let newarray = [];
    for(let i = 0; i < array.length-1; i++){
        newarray[i] = array[i];
    }
    return newarray;
};
