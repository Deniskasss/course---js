//BEGIN
export const getSameCount = (Array1, Array2) => {
    let answer = 0,
        past = [];

    function notincludes(el, Array) {
        for (let element of Array) {
            if (el == element) {
                return false;
            }
        }
        Array.push(el);
        return true;
    }

    for (let el1 of Array1) {
        if (notincludes(el1, past)) {
            for (let el2 of Array2) {
                if (el1 == el2) {
                    answer += 1;
                    break;
                }
            }
        }
    }
    return answer;
}
export default getSameCount;
//END