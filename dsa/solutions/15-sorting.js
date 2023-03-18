//BEGIN
export const bubbleSort = (massive) => {
    let i, j;
    for (i = 0; i != massive.length; i++) {
        for (j = i; j != massive.length; j++) {
            if (massive[i] > massive[j]) {
                [massive[j], massive[i]] = [massive[i], massive[j]];
            }
        }
    }
    return massive;
}
export default bubbleSort;
//END