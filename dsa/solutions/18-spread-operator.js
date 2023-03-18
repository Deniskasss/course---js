//BEGIN
export const flatten = (massive) => {
    let newarr = [];
    for (let el of massive) {
        if (Array.isArray(el))
            newarr.push(...el);
        else
            newarr.push(el);
    }
    return newarr;
}
export default flatten;
//END