//BEGIN
export const getMax = (Array) => {
    if (Array.length == 0) {
        return null;
    }
    let [max, ...rest] = Array;
    return rest.reduce((a, b) => b > a ? a = b : a, max)
}
export default getMax;
//END