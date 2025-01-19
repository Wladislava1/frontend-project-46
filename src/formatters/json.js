const json = (diff) => {
  const result = Object.entries(diff).reduce((acc, [key, change]) => {
    const newEntry = {};

    switch (change.type) {
      case 'added':
        newEntry[key] = { status: 'added', value: change.value };
        break;
      case 'removed':
        newEntry[key] = { status: 'removed', value: change.value };
        break;
      case 'changed':
        newEntry[key] = {
          status: 'changed',
          oldValue: change.value1,
          newValue: change.value2,
        };
        break;
      case 'unchanged':
        newEntry[key] = { status: 'unchanged', value: change.value };
        break;
      default:
        break;
    }

    return { ...acc, ...newEntry };
  }, {});

  return JSON.stringify(result, null, 2);
};

export default json;
