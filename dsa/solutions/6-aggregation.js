//BEGIN
export const calculateSum = (massive) => {
    return massive.reduce((a, b) => !(b % 3) ? a + b : a, 0);
}
export default calculateSum;
//END