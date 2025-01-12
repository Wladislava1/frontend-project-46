import _ from 'lodash';

const formatValue = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};
const plain = (objDiff) => {
  const differences = [];

  Object.keys(objDiff).forEach((key) => {
    const value = objDiff[key];
    if (value.type === 'removed') {
      differences.push(`Property '${key}' was removed`);
    } else if (value.type === 'added') {
      if (_.isPlainObject(value.value)) {
        differences.push(`Property '${key}' was added with value: [complex value]`);
      } else {
        differences.push(`Property '${key}' was added with value: ${formatValue(value.value)}`);
      }
    } else if (value.type === 'changed') {
      if (_.isPlainObject(value.value1) && _.isPlainObject(value.value2)) {
        differences.push(`Property '${key}' was updated. From [complex value] to [complex value]`);
      } else if (!_.isPlainObject(value.value1) && _.isPlainObject(value.value2)) {
        differences.push(`Property '${key}' was updated. From ${formatValue(value.value1)} to [complex value]`);
      } else if (_.isPlainObject(value.value1) && !_.isPlainObject(value.value2)) {
        differences.push(`Property '${key}' was updated. From [complex value] to ${formatValue(value.value2)}`);
      } else {
        differences.push(`Property '${key}' was updated. From ${formatValue(value.value1)} to ${formatValue(value.value2)}`);
      }
    }
  });

  return differences;
};
export default plain;
