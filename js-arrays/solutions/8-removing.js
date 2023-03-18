//BEGIN
export const getSameParity = (Array) => {
    let Parity = Array[0] % 2 ? [-1, 1] : [0];
    return Array.filter(el => Parity.includes(el % 2));
}
export default getSameParity;
//END