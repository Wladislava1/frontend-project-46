import findDifferences from './diff.js';
import sortDiff from './sortDiff.js';
import stylish from './stylish.js';

const compare = (obj1, obj2, format = stylish) => {
  const sortObj1 = sortDiff(obj1);
  const sortObj2 = sortDiff(obj2);
  if (format === undefined || format === stylish) {
    const diffStylish = findDifferences(sortObj1, sortObj2);
    return `{\n${format(diffStylish).join('\n')}\n}`;
  }
  return `Unsupported format: ${format}`;
};
export default compare;
