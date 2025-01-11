const sortObj = (obj) => {
  const resSortedObj = {};
  Object.keys(obj).sort().forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      resSortedObj[key] = sortObj(obj[key]);
    } else {
      resSortedObj[key] = obj[key];
    }
  });

  return resSortedObj;
};
export default sortObj;
