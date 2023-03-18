//BEGIN
export const makeCensored = (message, stopwords) => {
    return message.split(" ").map(el => stopwords.includes(el) ? el = "$#%!" : el).join(" ");
}
export default makeCensored;
//END