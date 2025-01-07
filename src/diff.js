import sortObj from './sortDiff.js';

const findDifferences = (obj1, obj2) => {
  const differences = {};

  Object.keys(obj1).forEach((key) => {
    if (obj2[key] === undefined) {
      differences[key] = { value: obj1[key], type: 'removed' };
    } else if (obj1[key] !== obj2[key]) {
      if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        const nestedDiffs = findDifferences(obj1[key], obj2[key]);
        if (Object.keys(nestedDiffs).length > 0) {
          differences[key] = nestedDiffs;
        }
      } else {
        differences[key] = { value1: obj1[key], value2: obj2[key], type: 'changed' };
      }
    }
  });

  Object.keys(obj2).forEach((key) => {
    if (obj1[key] === undefined) {
      differences[key] = { value: obj2[key], type: 'added' };
    }
  });
  return sortObj(differences);
};
export default findDifferences;
