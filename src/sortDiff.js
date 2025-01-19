import _ from 'lodash';

const sortObj = (obj) => {
  const cloneObj = _.cloneDeep(obj);
  const sortedKeys = [...Object.keys(cloneObj)].sort();
  return sortedKeys.reduce((acc, key) => ({
    ...acc,
    [key]: typeof obj[key] === 'object' && obj[key] !== null
      ? sortObj(obj[key])
      : obj[key],
  }), {});
};

export default sortObj;
