import _ from 'lodash';

const stylish = (objDiff, depth = 1) => {
  const formarter = [];
  Object.keys(objDiff).forEach((key) => {
    const value = objDiff[key];
    if (_.isPlainObject(value)) {
      if (value.type === 'removed') {
        if (_.isPlainObject(value.value)) {
          formarter.push(`${' '.repeat(4 * depth - 2)}- ${key}: {`);
          formarter.push(...stylish(value.value, depth + 1));
          formarter.push(`${' '.repeat(4 * depth)}}`);
        } else {
          formarter.push(`${' '.repeat(4 * depth - 2)}- ${key}: ${value.value}`);
        }
      } else if (value.type === 'added') {
        if (_.isPlainObject(value.value)) {
          formarter.push(`${' '.repeat(4 * depth - 2)}+ ${key}: {`);
          formarter.push(...stylish(value.value, depth + 1));
          formarter.push(`${' '.repeat(4 * depth)}}`);
        } else {
          formarter.push(`${' '.repeat(4 * depth - 2)}+ ${key}: ${value.value}`);
        }
      } else if (value.type === 'changed') {
        if (_.isPlainObject(value.value1)) {
          formarter.push(`${' '.repeat(4 * depth - 2)}- ${key}: {`);
          formarter.push(...stylish(value.value1, depth + 1));
          formarter.push(`${' '.repeat(4 * depth)}}`);
        } else {
          formarter.push(`${' '.repeat(4 * depth - 2)}- ${key}: ${value.value1}`);
        }
        if (_.isPlainObject(value.value2)) {
          formarter.push(`${' '.repeat(4 * depth - 2)}+ ${key}: {`);
          formarter.push(...stylish(value.value2, depth + 1));
          formarter.push(`${' '.repeat(4 * depth)}}`);
        } else {
          formarter.push(`${' '.repeat(4 * depth - 2)}+ ${key}: ${value.value2}`);
        }
      } else if (value.type === 'unchanged') {
        if (_.isPlainObject(value.value)) {
          formarter.push(`${' '.repeat(4 * depth)}${key}: {`);
          formarter.push(...stylish(value.value, depth + 1));
          formarter.push(`${' '.repeat(4 * depth)}}`);
        } else {
          formarter.push(`${' '.repeat(4 * depth)}${key}: ${value.value}`);
        }
      } else if (value.type === undefined) {
        formarter.push(`${' '.repeat(4 * depth)}${key}: {`);
        formarter.push(...stylish(value, depth + 1));
        formarter.push(`${' '.repeat(4 * depth)}}`);
      }
    } else {
      formarter.push(`${' '.repeat(4 * depth)}${key}: ${value}`);
    }
  });
  return formarter;
};
export default stylish;
