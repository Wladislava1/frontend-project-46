const stylish = (diff) => {
  const buildResult = (acc, key, change) => {
    const {
      type, value, value1, value2, children,
    } = change;

    switch (type) {
      case 'added':
        return { ...acc, [`+ ${key}`]: value === null ? 'null' : value };
      case 'removed':
        return { ...acc, [`- ${key}`]: value === null ? 'null' : value };
      case 'unchanged':
        return { ...acc, [key]: value === null ? 'null' : value };
      case 'changed':
        return {
          ...acc,
          [`- ${key}`]: value1 === null ? 'null' : value1,
          [`+ ${key}`]: value2 === null ? 'null' : value2,
        };
      case 'nested': {
        const nestedChildren = Object.entries(children).reduce(
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

  const formatResult = (obj, depth = 1) => Object.entries(obj)
    .map(([key, value]) => {
      const indent = key.startsWith('+') || key.startsWith('-')
        ? ' '.repeat(depth * 4 - 2)
        : ' '.repeat(depth * 4);

      if (typeof value === 'object' && value !== null) {
        if (value.type === 'nested') {
          return `${indent}${key}: {\n${formatResult(value.children, depth + 1)}\n${' '.repeat(depth * 4)}}`;
        }
        return `${indent}${key}: {\n${formatResult(value, depth + 1)}\n${' '.repeat(depth * 4)}}`;
      }

      return `${indent}${key}: ${value}`;
    })
    .join('\n');

  return `{\n${formatResult(result)}\n}`;
};

export default stylish;
