//BEGIN
export const getTotalAmount = (massive, valuta) => {
    return massive.map(el => el.split(" ")).reduce((a, b) => b[0] == valuta ? a + Number(b[1]) : a, 0);
}
export default getTotalAmount;
//END