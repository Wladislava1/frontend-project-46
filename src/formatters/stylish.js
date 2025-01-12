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
            current[`+ ${k}`] = change.value;
            break;
          case 'removed':
            current[`- ${k}`] = change.value;
            break;
          case 'unchanged':
            current[`${k}`] = change.value;
            break;
          case 'changed':
            current[`- ${k}`] = change.value1;
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

  (function cleanEmpty(obj) {
    if (obj && typeof obj === 'object') {
      Object.keys(obj).forEach((key) => {
        cleanEmpty(obj[key]);
        if (typeof obj[key] === 'object' && obj[key] === null) {
          delete obj[key];
        }
      });
    }
  }(result));

  const formatResult = (obj, depth = 1) => Object.entries(obj).map(([key, value]) => {
    const indent = key.startsWith('+') || key.startsWith('-')
      ? ' '.repeat(depth * 4 - 2)
      : ' '.repeat(depth * 4);
    if (typeof value === 'object' && !Array.isArray(value)) {
      return `${indent}${key}: {\n${formatResult(value, depth + 1)}\n${' '.repeat(depth * 4)}}`;
    }
    return `${indent}${key}: ${value}`;
  }).join('\n');

  return formatResult(result);
};

export default stylish;
