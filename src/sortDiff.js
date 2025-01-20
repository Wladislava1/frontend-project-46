import _ from 'lodash';

const sortObj = (obj) => {
  const sortedKeys = _.sortBy(Object.keys(obj));

  return sortedKeys.reduce((acc, key) => ({
    ...acc,
    [key]: typeof obj[key] === 'object' && obj[key] !== null
      ? sortObj(obj[key])
      : obj[key],
  }), {});
};

export default sortObj;
