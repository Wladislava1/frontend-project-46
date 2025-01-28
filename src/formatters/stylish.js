const stylish = (diff) => {
  const buildResult = (acc, key, change) => {
    switch (change.type) {
      case 'added':
        return {
          ...acc,
          [`+ ${key}`]: change.value,
        };

      case 'removed':
        return {
          ...acc,
          [`- ${key}`]: change.value,
        };

      case 'unchanged':
        return {
          ...acc,
          [key]: change.value,
        };

      case 'changed':
        return {
          ...acc,
          [`- ${key}`]: change.value1,
          [`+ ${key}`]: change.value2,
        };

      case 'nested': {
        const nestedChildren = Object.entries(change.children).reduce(
          (nestedAcc, [childKey, childChange]) => buildResult(nestedAcc, childKey, childChange),
          {},
        );
        return { ...acc, [key]: { type: 'nested', children: nestedChildren } };
      }

      default:
        return acc;
    }
  };
  const result = Object.entries(diff)
    .reduce((acc, [key, change]) => buildResult(acc, key, change), {});
  const getIndentation = (depth, isSpecialKey = false) => ' '.repeat(depth * 4 - (isSpecialKey ? 2 : 0));
  const formatValue = (value) => (value === null ? 'null' : value);
  const stringify = (obj, depth = 1) => Object.entries(obj)
    .map(([key, value]) => {
      const indent = getIndentation(depth, key.startsWith('+') || key.startsWith('-'));
      if (typeof value === 'object' && value !== null) {
        if (value.type === 'nested') {
          return `${indent}${key}: {\n${stringify(value.children, depth + 1)}\n${getIndentation(depth)}}`;
        }
        return `${indent}${key}: {\n${stringify(value, depth + 1)}\n${getIndentation(depth)}}`;
      }

      return `${indent}${key}: ${formatValue(value)}`;
    })
    .join('\n');

  return `{\n${stringify(result)}\n}`;
};

export default stylish;
