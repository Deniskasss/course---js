//BEGIN
export const getWeekends = (word = "long") => {
    switch (word) {
        case "long":
            return ["saturday", "sunday"];
        case "short":
            return ["sat", "sun"];
        default:
            return;
    }
}
export default getWeekends;
//END