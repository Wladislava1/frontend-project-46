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
      + setting3: null
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
export const diffrentJsons = {
  common: {
    setting1: { value: 'Value 1', type: 'unchanged' },
    setting2: { value: 200, type: 'removed' },
    setting3: { value1: true, value2: null, type: 'changed' },
    setting6: { key: {}, doge: {}, ops: {} },
    follow: { value: false, type: 'added' },
    setting4: { value: 'blah blah', type: 'added' },
    setting5: { value: {}, type: 'added' }
  },
  group1: {
    baz: { value1: 'bas', value2: 'bars', type: 'changed' },
    foo: { value: 'bar', type: 'unchanged' },
    nest: { value1: {}, value2: 'str', type: 'changed' }
  },
  group2: { value: { abc: 12345, deep: {} }, type: 'removed' },
  group3: { value: { deep: {}, fee: 100500 }, type: 'added' }
};
export const diffrentJsonsSort = {
  common: {
    follow: { type: 'added', value: false },
    setting1: { type: 'unchanged', value: 'Value 1' },
    setting2: { type: 'removed', value: 200 },
    setting3: { type: 'changed', value1: true, value2: null },
    setting4: { type: 'added', value: 'blah blah' },
    setting5: { type: 'added', value: {} },
    setting6: { doge: {}, key: {}, ops: {} }
  },
  group1: {
    baz: { type: 'changed', value1: 'bas', value2: 'bars' },
    foo: { type: 'unchanged', value: 'bar' },
    nest: { type: 'changed', value1: {}, value2: 'str' }
  },
  group2: { type: 'removed', value: { abc: 12345, deep: {} } },
  group3: { type: 'added', value: { deep: {}, fee: 100500 } }
};
