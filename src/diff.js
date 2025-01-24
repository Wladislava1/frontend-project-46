import _ from 'lodash';

const findDifferences = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2));
  const sortedKeys = _.sortBy(keys);

  const differences = sortedKeys.reduce((acc, key) => {
    if (!Object.prototype.hasOwnProperty.call(obj2, key)) {
      acc[key] = { type: 'removed', value: obj1[key] };
    } else if (!Object.prototype.hasOwnProperty.call(obj1, key)) {
      acc[key] = { type: 'added', value: obj2[key] };
    } else if (obj1[key] !== obj2[key]) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        acc[key] = {
          type: 'changed',
          value1: obj1[key],
          value2: obj2[key],
        };
      } else if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
        acc[key] = { type: 'nested', children: findDifferences(obj1[key], obj2[key]) };
      } else {
        acc[key] = { type: 'changed', value1: obj1[key], value2: obj2[key] };
      }
    } else {
      acc[key] = { type: 'unchanged', value: obj1[key] };
    }
    return acc;
  }, {});
  return differences;
};

export default findDifferences;
