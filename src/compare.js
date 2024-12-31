import sortAlphabet from './sortAlphabet.js';

const compare = (obj1, obj2) => {
  const sortObj1 = sortAlphabet(obj1);
  const sortObj2 = sortAlphabet(obj2);
  const resultObj = [];
  Object.keys(sortObj1).forEach((variable) => {
    if (sortObj2[variable] !== undefined && sortObj1[variable] === sortObj2[variable]) {
      resultObj.push(`    ${variable}: ${sortObj1[variable]}`);
    }
    if (sortObj2[variable] === undefined) {
      resultObj.push(`  - ${variable}: ${sortObj1[variable]}`);
    }
    if (sortObj2[variable] !== undefined && sortObj1[variable] !== sortObj2[variable]) {
      resultObj.push(`  - ${variable}: ${sortObj1[variable]}`);
      resultObj.push(`  + ${variable}: ${sortObj2[variable]}`);
    }
  });

  Object.keys(sortObj2).forEach((variable) => {
    if (sortObj1[variable] === undefined) {
      resultObj.push(`  + ${variable}: ${sortObj2[variable]}`);
    }
  });
  return `{\n${resultObj.join('\n')}\n}`;
};

export default compare;
