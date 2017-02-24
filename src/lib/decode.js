export const decode = (value, length, base) =>
    value.match(new RegExp(`.{1,${length}}`,'g'))
        .map((string)=>String.fromCharCode(parseInt(string, base))).join('');
