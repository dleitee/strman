export const _pop = array => array.reduce((previous, current, index) => {
    if(index < array.length-1) {
        previous.push(current);
        return previous;
    }
    return previous;
}, []);
