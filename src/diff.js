import _ from 'lodash';
import sortObj from './sortDiff.js';

const findDifferences = (obj1, obj2) => {
  const differences = {};
  Object.keys(obj1).forEach((key) => {
    if (obj2[key] === undefined) {
      differences[key] = { value: obj1[key], type: 'removed' };
    } else if (obj1[key] !== obj2[key]) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        differences[key] = {
          value1: obj1[key],
          value2: obj2[key],
          type: 'changed',
        };
      } else if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
        differences[key] = findDifferences(obj1[key], obj2[key]);
      } else {
        differences[key] = { value1: obj1[key], value2: obj2[key], type: 'changed' };
      }
    } else {
      differences[key] = { value: obj1[key], type: 'unchanged' };
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
