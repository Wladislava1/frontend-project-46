const json = (diff) => {
  const buildJson = (change) => {
    switch (change.type) {
      case 'added':
        return { status: 'added', value: change.value };
      case 'removed':
        return { status: 'removed', value: change.value };
      case 'changed':
        return {
          status: 'changed',
          oldValue: change.value1,
          newValue: change.value2,
        };
      case 'unchanged':
        return { status: 'unchanged', value: change.value };
      case 'nested': {
        const children = Object.entries(change.children)
          .reduce((acc, [key, childChange]) => {
            acc[key] = buildJson(childChange);
            return acc;
          }, {});
        return { children };
      }
      default:
        return {};
    }
  };
  const result = Object.entries(diff)
    .reduce((acc, [key, change]) => ({ ...acc, [key]: buildJson(change) }), {});

  return JSON.stringify(result, null, 2);
};

export default json;
