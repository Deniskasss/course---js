//BEGIN
export const buildDefinitionList = (Array) => {
    return Array.length ? "<dl>" + Array.reduce((a, b) => a + `<dt>${b[0]}</dt><dd>${b[1]}</dd>`, "") + "</dl>" : "";
}
export default buildDefinitionList;
//END