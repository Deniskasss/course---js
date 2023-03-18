//BEGIN
export const calculateSum = (Array) => {
    return Array.reduce((a, b) => !(b % 3) ? a + b : a, 0);
}
export default calculateSum;
//END