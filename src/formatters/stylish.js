/* eslint-disable no-lonely-if */
/* eslint-disable no-param-reassign */
const stylish = (diff) => {
  const result = {};

  Object.entries(diff).forEach(([key, change]) => {
    const keys = key.split('.');
    keys.reduce((current, k, i) => {
      if (i === keys.length - 1) {
        switch (change.type) {
          case 'added':
            current[`+ ${k}`] = change.value === null ? 'null' : change.value;
            break;
          case 'removed':
            current[`- ${k}`] = change.value === null ? 'null' : change.value;
            break;
          case 'unchanged':
            current[`${k}`] = change.value === null ? 'null' : change.value;
            break;
          case 'changed':
            current[`- ${k}`] = change.value1 === null ? 'null' : change.value1;
            current[`+ ${k}`] = change.value2 === null ? 'null' : change.value2;
            break;
          default:
            break;
        }
      } else {
        if (!current[k]) {
          current[k] = {};
        }
      }
      return current[k];
    }, result);
  });

  const cleanEmpty = (obj) => {
    if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
      const cleaned = Object.keys(obj).reduce((acc, key) => {
        const cleanedValue = cleanEmpty(obj[key]);
        if (cleanedValue !== null && (typeof cleanedValue !== 'object' || Object.keys(cleanedValue).length > 0)) {
          acc[key] = cleanedValue;
        }
        return acc;
      }, {});
      return Object.keys(cleaned).length > 0 ? cleaned : null;
    }
    return obj;
  };

  const cleanedResult = cleanEmpty(result);
  const finalResult = cleanedResult || {};

  const formatResult = (obj, depth = 1) => Object.entries(obj).map(([key, value]) => {
    const indent = key.startsWith('+') || key.startsWith('-')
      ? ' '.repeat(depth * 4 - 2)
      : ' '.repeat(depth * 4);
    if (typeof value === 'object' && !Array.isArray(value)) {
      return `${indent}${key}: {\n${formatResult(value, depth + 1)}\n${' '.repeat(depth * 4)}}`;
    }
    return `${indent}${key}: ${value}`;
  }).join('\n');

  return formatResult(finalResult);
};

export default stylish;
