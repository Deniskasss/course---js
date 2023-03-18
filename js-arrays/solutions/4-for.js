//BEGIN
export const addPrefix = (array, prefix) => {
    let newArray = [];
    let i;
    for (i = 0; i != array.length; i++) { newArray.push(`${prefix} ${array[i]}`); }
    return newArray;
}
export default addPrefix;
//END