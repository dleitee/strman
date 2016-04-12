export const _isArray = value => {
    return (value !== null &&
           value.length >= 0 &&
           Object.prototype.toString.call(value) === '[object Array]');
}
