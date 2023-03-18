//BEGIN
export const reverse = (massive) => {
    let i, len = massive.length - 1;
    let len_h = len / 2;
    for (i = 0; i <= len_h; i++) {
        [massive[i], massive[len - i]] = [massive[len - i], massive[i]];
    }
    return massive;
}
export default reverse;
//END