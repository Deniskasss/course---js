//BEGIN
export const swap = (massive) => {
    let len = massive.length;
    len > 1 ? [massive[0], massive[len - 1]] = [massive[len - 1], massive[0]] : null;
    return massive;
}
export default swap;
//END