const stylish = (diff) => {
  const buildResult = (acc, keys, change) => {
    if (keys.length === 0) {
      return acc;
    }
    const firstKey = keys[0];
    const restKeys = keys.slice(1);
    if (restKeys.length === 0) {
      const newEntry = (() => {
        switch (change.type) {
          case 'added':
            return { [`+ ${firstKey}`]: change.value === null ? 'null' : change.value };
          case 'removed':
            return { [`- ${firstKey}`]: change.value === null ? 'null' : change.value };
          case 'unchanged':
            return { [firstKey]: change.value === null ? 'null' : change.value };
          case 'changed':
            return {
              [`- ${firstKey}`]: change.value1 === null ? 'null' : change.value1,
              [`+ ${firstKey}`]: change.value2 === null ? 'null' : change.value2,
            };
          default:
            return {};
        }
      })();

      return { ...acc, ...newEntry };
    }
    return {
      ...acc,
      [firstKey]: buildResult(acc[firstKey] || {}, restKeys, change),
    };
  };

  const result = Object.entries(diff).reduce((acc, [key, change]) => {
    const keys = key.split('.');
    return buildResult(acc, keys, change);
  }, {});

  const formatResult = (obj, depth = 1) => Object.entries(obj)
    .map(([key, value]) => {
      const indent = key.startsWith('+') || key.startsWith('-')
        ? ' '.repeat(depth * 4 - 2)
        : ' '.repeat(depth * 4);

      if (typeof value === 'object' && value !== null) {
        return `${indent}${key}: {\n${formatResult(value, depth + 1)}\n${' '.repeat(depth * 4)}}`;
      }

      return `${indent}${key}: ${value}`;
    })
    .join('\n');

  return formatResult(result);
};

export default stylish;
