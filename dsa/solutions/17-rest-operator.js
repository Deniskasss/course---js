//BEGIN
export const getMax = (massive) => {
    if (massive.length == 0) {
        return null;
    }
    let [max, ...rest] = massive;
    return rest.reduce((a, b) => b > a ? a = b : a, max)
}
export default getMax;
//END