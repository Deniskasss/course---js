//BEGIN
export const getTotalAmount = (Array, currency) => {
    return Array.map(el => el.split(" ")).reduce((a, b) => b[0] == currency ? a + Number(b[1]) : a, 0);
}
export default getTotalAmount;
//END