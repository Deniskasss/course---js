//BEGIN
export const buildDefinitionList = (massive) => {
    return massive.length ? "<dl>" + massive.reduce((a, b) => a + `<dt>${b[0]}</dt><dd>${b[1]}</dd>`, "") + "</dl>" : "";
}
export default buildDefinitionList;
//END