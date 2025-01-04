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
