const stylish = (diff) => {
  const buildResult = (acc, key, change) => {
    const {
      type, value, value1, value2, children,
    } = change;

    switch (type) {
      case 'added':
        acc[`+ ${key}`] = value === null ? 'null' : value;
        break;
      case 'removed':
        acc[`- ${key}`] = value === null ? 'null' : value;
        break;
      case 'unchanged':
        acc[key] = value === null ? 'null' : value;
        break;
      case 'changed':
        acc[`- ${key}`] = value1 === null ? 'null' : value1;
        acc[`+ ${key}`] = value2 === null ? 'null' : value2;
        break;
      case 'nested':
        acc[key] = { type: 'nested', children: {} };
        Object.entries(children).forEach(([childKey, childChange]) => {
          buildResult(acc[key].children, childKey, childChange);
        });
        break;
      default:
        break;
    }
  };

  const result = {};
  Object.entries(diff).forEach(([key, change]) => {
    buildResult(result, key, change);
  });

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
