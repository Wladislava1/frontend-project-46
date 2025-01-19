import _ from 'lodash';

const formatValue = (value) => (typeof value === 'string' ? `'${value}'` : value);

const handleRemoved = (key) => `Property '${key}' was removed`;

const handleAdded = (key, value) => (_.isPlainObject(value)
  ? `Property '${key}' was added with value: [complex value]`
  : `Property '${key}' was added with value: ${formatValue(value)}`);

const handleChanged = (key, value1, value2) => {
  if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
    return `Property '${key}' was updated. From [complex value] to [complex value]`;
  }
  if (!_.isPlainObject(value1) && _.isPlainObject(value2)) {
    return `Property '${key}' was updated. From ${formatValue(value1)} to [complex value]`;
  }
  if (_.isPlainObject(value1) && !_.isPlainObject(value2)) {
    return `Property '${key}' was updated. From [complex value] to ${formatValue(value2)}`;
  }
  return `Property '${key}' was updated. From ${formatValue(value1)} to ${formatValue(value2)}`;
};

const plain = (objDiff) => Object.keys(objDiff).reduce((acc, key) => {
  const value = objDiff[key];

  if (value.type === 'removed') {
    return acc.concat(handleRemoved(key));
  }

  if (value.type === 'added') {
    return acc.concat(handleAdded(key, value.value));
  }

  if (value.type === 'changed') {
    return acc.concat(handleChanged(key, value.value1, value.value2));
  }

  return acc;
}, []);

export default plain;
