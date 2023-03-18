//BEGIN
export const getSuperSeriesWinner = (matrix) => {
    let game = matrix.reduce((a, b) => b[0] > b[1] ? a + 1 : b[0] == b[1] ? a : a - 1, 0);
    if (!game) {
        return null;
    }
    return game > 0 ? "canada" : "ussr";
}
export default getSuperSeriesWinner;
//END