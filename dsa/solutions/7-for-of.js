//BEGIN
export const calculateAverage = (massive) => {
    if (massive.length == 0) {
        return null;
    }
    let sum = 0;
    for (let el of massive) {
        sum += el;
    }
    return sum / massive.length;
}
export default calculateAverage;
//END