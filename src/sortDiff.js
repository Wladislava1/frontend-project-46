const sortObj = (obj) => {
  const sortedKeys = Object.keys(obj).map((key) => key).sort();

  return sortedKeys.reduce((acc, key) => ({
    ...acc,
    [key]: typeof obj[key] === 'object' && obj[key] !== null
      ? sortObj(obj[key])
      : obj[key],
  }), {});
};

export default sortObj;
