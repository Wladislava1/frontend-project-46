import _ from 'lodash';

const findDifferences = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2));
  const sortedKeys = _.sortBy(keys);

  return sortedKeys.reduce((acc, key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (!Object.prototype.hasOwnProperty.call(obj2, key)) {
      return { ...acc, [key]: { type: 'removed', value: value1 } };
    }
    if (!Object.prototype.hasOwnProperty.call(obj1, key)) {
      return { ...acc, [key]: { type: 'added', value: value2 } };
    }
    if (value1 !== value2) {
      if (Array.isArray(value1) && Array.isArray(value2)) {
        return { ...acc, [key]: { type: 'changed', value1, value2 } };
      }
      if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
        return { ...acc, [key]: { type: 'nested', children: findDifferences(value1, value2) } };
      }
      return { ...acc, [key]: { type: 'changed', value1, value2 } };
    }
    return { ...acc, [key]: { type: 'unchanged', value: value1 } };
  }, {});
};

export default findDifferences;
