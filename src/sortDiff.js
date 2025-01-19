const sortObj = (obj) => {
  const sortedKeys = Object.keys(obj).slice().sort();
  return sortedKeys.reduce((acc, key) => {
    acc[key] = typeof obj[key] === 'object' && obj[key] !== null
      ? sortObj(obj[key])
      : obj[key];
    return acc;
  }, {});
};

export default sortObj;
