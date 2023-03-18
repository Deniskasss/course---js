//BEGIN
export const get = (massive, index, value = null) => {
    return 0 <= index && index < massive.length ? massive[index] : value;
}
export default get;
//END