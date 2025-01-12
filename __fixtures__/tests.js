/* eslint-disable comma-dangle */
export const json1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};
export const json2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};
export const plainFormatter = `
Property 'follow' was removed
Property 'proxy' was removed
Property 'timeout' was updated. From 50 to 20
Property 'verbose' was added with value: true
`;
export const jsonFormatter = `{
  "follow": {
    "status": "removed",
    "value": false
  },
  "host": {
    "status": "unchanged",
    "value": "hexlet.io"
  },
  "proxy": {
    "status": "removed",
    "value": "123.234.53.22"
  },
  "timeout": {
    "status": "changed",
    "oldValue": 50,
    "newValue": 20
  },
  "verbose": {
    "status": "added",
    "value": true
  }
}`;
export const jsonNotFlat1 = {
  common: {
    setting1: 'Value 1',
    setting2: 200,
    setting3: true,
    setting6: {
      key: 'value',
      doge: {
        wow: '',
      },
    },
  },
  group1: {
    baz: 'bas',
    foo: 'bar',
    nest: {
      key: 'value',
    },
  },
  group2: {
    abc: 12345,
    deep: {
      id: 45,
    },
  },
};
export const jsonNotFlat2 = {
  common: {
    follow: false,
    setting1: 'Value 1',
    setting3: null,
    setting4: 'blah blah',
    setting5: {
      key5: 'value5',
    },
    setting6: {
      key: 'value',
      ops: 'vops',
      doge: {
        wow: 'so much',
      },
    },
  },
  group1: {
    foo: 'bar',
    baz: 'bars',
    nest: 'str',
  },
  group3: {
    deep: {
      id: {
        number: 45,
      },
    },
    fee: 100500,
  },
};
export const resultNotFlat = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;
export const json1Sort = {
  follow: false,
  host: 'hexlet.io',
  proxy: '123.234.53.22',
  timeout: 50,
};
export const json2Sort = {
  host: 'hexlet.io',
  timeout: 20,
  verbose: true,
};
export const result = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
export const result1 = `{

}`;
export const differentjsonsNotFlat = {
  follow: { type: 'removed', value: false },
  host: { type: 'unchanged', value: 'hexlet.io' },
  proxy: { type: 'removed', value: '123.234.53.22' },
  timeout: { type: 'changed', value1: 50, value2: 20 },
  verbose: { type: 'added', value: true }
};
export const diffrentJsons = {
  'common.setting1': { value: 'Value 1', type: 'unchanged' },
  'common.setting2': { value: 200, type: 'removed' },
  'common.setting3': { value1: true, value2: null, type: 'changed' },
  'common.setting6.key': { value: 'value', type: 'unchanged' },
  'common.setting6.doge.wow': { value1: '', value2: 'so much', type: 'changed' },
  'common.setting6.ops': { value: 'vops', type: 'added' },
  'common.follow': { value: false, type: 'added' },
  'common.setting4': { value: 'blah blah', type: 'added' },
  'common.setting5': { value: { key5: 'value5' }, type: 'added' },
  'group1.baz': { value1: 'bas', value2: 'bars', type: 'changed' },
  'group1.foo': { value: 'bar', type: 'unchanged' },
  'group1.nest': { value1: { key: 'value' }, value2: 'str', type: 'changed' },
  group2: { value: { abc: 12345, deep: [Object] }, type: 'removed' },
  group3: { value: { deep: [Object], fee: 100500 }, type: 'added' }
};
export const diffrentJsonsSort = {
  'common.follow': { type: 'added', value: false },
  'common.setting1': { type: 'unchanged', value: 'Value 1' },
  'common.setting2': { type: 'removed', value: 200 },
  'common.setting3': { type: 'changed', value1: true, value2: null },
  'common.setting4': { type: 'added', value: 'blah blah' },
  'common.setting5': { type: 'added', value: { key5: 'value5' } },
  'common.setting6.doge.wow': { type: 'changed', value1: '', value2: 'so much' },
  'common.setting6.key': { type: 'unchanged', value: 'value' },
  'common.setting6.ops': { type: 'added', value: 'vops' },
  'group1.baz': { type: 'changed', value1: 'bas', value2: 'bars' },
  'group1.foo': { type: 'unchanged', value: 'bar' },
  'group1.nest': { type: 'changed', value1: { key: 'value' }, value2: 'str' },
  group2: { type: 'removed', value: { abc: 12345, deep: { 0: Object } } },
  group3: { type: 'added', value: { deep: { 0: Object }, fee: 100500 } }
};
export const plainResult = [
  "Property 'common.follow' was added with value: false",
  "Property 'common.setting2' was removed",
  "Property 'common.setting3' was updated. From true to null",
  "Property 'common.setting4' was added with value: 'blah blah'",
  "Property 'common.setting5' was added with value: [Complex value]",
  "Property 'common.setting6.doge.wow' was updated. From '' to 'so much'",
  "Property 'common.setting6.ops' was added with value: 'vops'",
  "Property 'group1.baz' was updated. From 'bas' to 'bars'",
  "Property 'group1.nest' was updated. From [Complex value] to 'str'",
  "Property 'group2' was removed",
  "Property 'group3' was added with value: [Complex value]"
];
export const plainResultJson = `
Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [Complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [Complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [Complex value]
`;
export const jsonNotFlatFormatter = `{
  "common.follow": {
    "status": "added",
    "value": false
  },
  "common.setting1": {
    "status": "unchanged",
    "value": "Value 1"
  },
  "common.setting2": {
    "status": "removed",
    "value": 200
  },
  "common.setting3": {
    "status": "changed",
    "oldValue": true,
    "newValue": null
  },
  "common.setting4": {
    "status": "added",
    "value": "blah blah"
  },
  "common.setting5": {
    "status": "added",
    "value": {
      "key5": "value5"
    }
  },
  "common.setting6.doge.wow": {
    "status": "changed",
    "oldValue": "",
    "newValue": "so much"
  },
  "common.setting6.key": {
    "status": "unchanged",
    "value": "value"
  },
  "common.setting6.ops": {
    "status": "added",
    "value": "vops"
  },
  "group1.baz": {
    "status": "changed",
    "oldValue": "bas",
    "newValue": "bars"
  },
  "group1.foo": {
    "status": "unchanged",
    "value": "bar"
  },
  "group1.nest": {
    "status": "changed",
    "oldValue": {
      "key": "value"
    },
    "newValue": "str"
  },
  "group2": {
    "status": "removed",
    "value": {
      "abc": 12345,
      "deep": {
        "id": 45
      }
    }
  },
  "group3": {
    "status": "added",
    "value": {
      "deep": {
        "id": {
          "number": 45
        }
      },
      "fee": 100500
    }
  }
}`;
