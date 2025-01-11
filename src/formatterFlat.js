const formarter = (obj1, obj2) => {
  const resultObj = [];
  Object.keys(obj1 || {}).forEach((variable) => {
    if (obj2[variable] !== undefined && obj1[variable] === obj2[variable]) {
      resultObj.push(`    ${variable}: ${obj1[variable]}`);
    }
    if (obj2[variable] === undefined) {
      resultObj.push(`  - ${variable}: ${obj1[variable]}`);
    }
    if (obj2[variable] !== undefined && obj1[variable] !== obj2[variable]) {
      resultObj.push(`  - ${variable}: ${obj1[variable]}`);
      resultObj.push(`  + ${variable}: ${obj2[variable]}`);
    }
  });

  Object.keys(obj2 || {}).forEach((variable) => {
    if (obj1[variable] === undefined) {
      resultObj.push(`  + ${variable}: ${obj2[variable]}`);
    }
  });
  return `{\n${resultObj.join('\n')}\n}`;
};
export default formarter;
