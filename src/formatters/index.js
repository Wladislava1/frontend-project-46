import findDifferences from '../diff.js';
import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const compare = (obj1, obj2, format = 'stylish') => {
  const diff = findDifferences(obj1, obj2);

  if (format === 'stylish') {
    return stylish(diff);
  } if (format === 'plain') {
    return plain(diff);
  } if (format === 'json') {
    return json(diff);
  }
  return `Unknown format: ${format}`;
};

export default compare;
