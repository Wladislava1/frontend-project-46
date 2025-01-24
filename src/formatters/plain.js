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

const processDiff = (objDiff, parentKey = '') => Object.keys(objDiff).flatMap((key) => {
  const fullKey = parentKey ? `${parentKey}.${key}` : key;
  const value = objDiff[key];

  switch (value.type) {
    case 'removed':
      return handleRemoved(fullKey);
    case 'added':
      return handleAdded(fullKey, value.value);
    case 'changed':
      return handleChanged(fullKey, value.value1, value.value2);
    case 'nested':
      return processDiff(value.children, fullKey);
    default:
      return [];
  }
});

const plain = (objDiff) => processDiff(objDiff).join('\n');

export default plain;
