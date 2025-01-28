import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const compare = (diff, format = 'stylish') => {
  switch (format) {
    case 'stylish':
      return stylish(diff);
    case 'plain':
      return plain(diff);
    case 'json':
      return json(diff);
    default:
      return `Unknow format ${format}`;
  }
};
export default compare;
