import _ from 'lodash';

const formatValue = (value) => (typeof value === 'string' ? `'${value}'` : value);

const stringify = (value) => {
  if (_.isPlainObject(value) || Array.isArray(value)) {
    return '[complex value]';
  }
  return formatValue(value);
};

const handleRemoved = (key) => `Property '${key}' was removed`;

const handleAdded = (key, value) => {
  const formattedValue = stringify(value);
  return `Property '${key}' was added with value: ${formattedValue}`;
};

const handleChanged = (key, value1, value2) => {
  const formattedValue1 = stringify(value1);
  const formattedValue2 = stringify(value2);
  return `Property '${key}' was updated. From ${formattedValue1} to ${formattedValue2}`;
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
