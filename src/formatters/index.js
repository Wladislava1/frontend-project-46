import findDifferences from '../diff.js';
import sortObj from '../sortDiff.js';
import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const compare = (obj1, obj2, format = stylish) => {
  const sortObj1 = sortObj(obj1);
  const sortObj2 = sortObj(obj2);
  const diff = findDifferences(sortObj1, sortObj2);

  if (format === stylish) {
    return `{\n${stylish(diff)}\n}`;
  } if (format === plain) {
    return `${plain(diff).join('\n')}`;
  } if (format === json) {
    return json(diff);
  }
  return `Unknown format: ${format}`;
};

export default compare;
