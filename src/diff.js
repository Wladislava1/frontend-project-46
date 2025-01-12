import _ from 'lodash';
import sortObj from './sortDiff.js';

const findDifferences = (obj1, obj2, path = '') => {
  const differences = {};

  Object.keys(obj1).forEach((key) => {
    const currentPath = path ? `${path}.${key}` : key;

    if (obj2[key] === undefined) {
      differences[currentPath] = { value: obj1[key], type: 'removed' };
    } else if (obj1[key] !== obj2[key]) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        differences[currentPath] = {
          value1: obj1[key],
          value2: obj2[key],
          type: 'changed',
        };
      } else if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
        Object.assign(differences, findDifferences(obj1[key], obj2[key], currentPath));
      } else {
        differences[currentPath] = { value1: obj1[key], value2: obj2[key], type: 'changed' };
      }
    } else {
      differences[currentPath] = { value: obj1[key], type: 'unchanged' };
    }
  });

  Object.keys(obj2).forEach((key) => {
    const currentPath = path ? `${path}.${key}` : key;
    if (obj1[key] === undefined) {
      differences[currentPath] = { value: obj2[key], type: 'added' };
    }
  });

  return sortObj(differences);
};

export default findDifferences;
