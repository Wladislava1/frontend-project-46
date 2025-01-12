const json = (diff) => {
  const result = {};
  Object.entries(diff).forEach(([key, change]) => {
    switch (change.type) {
      case 'added':
        result[key] = { status: 'added', value: change.value };
        break;
      case 'removed':
        result[key] = { status: 'removed', value: change.value };
        break;
      case 'changed':
        result[key] = {
          status: 'changed',
          oldValue: change.value1,
          newValue: change.value2,
        };
        break;
      case 'unchanged':
        result[key] = { status: 'unchanged', value: change.value };
        break;
      default:
        break;
    }
  });

  return JSON.stringify(result, null, 2);
};
export default json;
