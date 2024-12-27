import sortAlphabet from "./sortAlphabet.js";

const compare = (obj1, obj2) => {

    const sortObj1 = sortAlphabet(obj1);
    const sortObj2 = sortAlphabet(obj2);
    const resultObj = {};
    for (const variable in sortObj1){
      if (sortObj2[variable] !== undefined && sortObj1[variable] === sortObj2[variable]){
        resultObj[variable] = sortObj1[variable]
      } 
      if (sortObj2[variable] === undefined) {
        resultObj[`- ${variable}`] = sortObj1[variable]
      }
      if (sortObj2[variable] !== undefined && sortObj1[variable] !== sortObj2[variable]){
        resultObj[`- ${variable}`] = sortObj1[variable]
        resultObj[`+ ${variable}`] = sortObj2[variable]
      }
    }
    for (const variable in sortObj2){
      if (sortObj1[variable] === undefined) {
        resultObj[`+ ${variable}`] = sortObj2[variable]
      }
      if (sortObj1[variable] !== undefined && sortObj1[variable] !== sortObj2[variable]){
        resultObj[`- ${variable}`] = sortObj1[variable]
        resultObj[`+ ${variable}`]  = sortObj2[variable]
      }
    }
    return resultObj;
 }

export default compare;
