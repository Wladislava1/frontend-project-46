import _ from 'lodash';
import sortObj from './sortDiff.js';

const findDifferences = (obj1, obj2, path = '') => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2));
  const sortedKeys = _.sortBy(keys);
  const differences = sortedKeys.reduce((acc, key) => {
    const currentPath = path ? `${path}.${key}` : key;

    if (!Object.prototype.hasOwnProperty.call(obj2, key)) {
      return {
        ...acc,
        [currentPath]: { value: obj1[key], type: 'removed' },
      };
    }

    if (obj1[key] !== obj2[key]) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        return {
          ...acc,
          [currentPath]: {
            value1: obj1[key],
            value2: obj2[key],
            type: 'changed',
          },
        };
      }

      if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
        const nestedDifferences = findDifferences(obj1[key], obj2[key], currentPath);
        return { ...acc, ...nestedDifferences };
      }

      return {
        ...acc,
        [currentPath]: { value1: obj1[key], value2: obj2[key], type: 'changed' },
      };
    }

    return {
      ...acc,
      [currentPath]: { value: obj1[key], type: 'unchanged' },
    };
  }, {});

  const addedKeys = Object.keys(obj2).reduce((acc, key) => {
    const currentPath = path ? `${path}.${key}` : key;
    if (!Object.prototype.hasOwnProperty.call(obj1, key)) {
      return {
        ...acc,
        [currentPath]: { value: obj2[key], type: 'added' },
      };
    }
    return acc;
  }, {});
  return sortObj({ ...differences, ...addedKeys });
};

export default findDifferences;
