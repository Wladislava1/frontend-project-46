import _ from "lodash" 

const sortAlphabet = (obj) => {
    const cloneObj = _.cloneDeep(obj)
    const sortStr = Object.keys(cloneObj).sort()
    const sortCloneObj = {};
    sortStr.forEach(key => {
        sortCloneObj[key] = cloneObj[key];
    });
    return sortCloneObj;
}
export default sortAlphabet;