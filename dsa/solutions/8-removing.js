//BEGIN
export const getSameParity = (massive) => {
    let chetnost = massive[0] % 2 ? [-1, 1] : [0];
    return massive.filter(el => chetnost.includes(el % 2));
}
export default getSameParity;
//END