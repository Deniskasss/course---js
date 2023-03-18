//BEGIN
export const bubbleSort = (Array) => {
    let i, j;
    for (i = 0; i != Array.length; i++) {
        for (j = i; j != Array.length; j++) {
            if (Array[i] > Array[j]) {
                [Array[j], Array[i]] = [Array[i], Array[j]];
            }
        }
    }
    return Array;
}
export default bubbleSort;
//END