import yaml from 'js-yaml';

const parseFile = (fileContent, fileType) => {
  if (fileType === 'yaml' || fileType === 'yml') {
    return yaml.load(fileContent);
  }
  return JSON.parse(fileContent);
};

export default parseFile;
