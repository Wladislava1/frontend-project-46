const json = (diff) => JSON.stringify(
  Object.entries(diff).reduce((acc, [key, change]) => {
    const newEntry = {
      [key]: (() => {
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
          default:
            return {};
        }
      })(),
    };

    return { ...acc, ...newEntry };
  }, {}),
  null,
  2,
);

export default json;
