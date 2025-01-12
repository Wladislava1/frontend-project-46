# Вычислитель отличий

### Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

## Возможности утилиты:

- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json

### Вывод справочной информации выглядит так:

gendiff -h

  Usage: gendiff [options] <filepath1> <filepath2>

  Compares two configuration files and shows a difference.

  Options:
    -V, --version        output the version number
    -f, --format [type]  output format
    -h, --help           output usage information

## Запуск программы:
1. npm install - установка зависимостей
2. 
- gendiff -h - вывод справочной информации об утилите
- gendiff <filepath1> <filepath2> утилита модет работать как с относительными путями до файла так и с абсолютными

### Следует учитывать, что если абсолютный путь до файла начинается как C://..., то С: следует заменить на /mnt/c
### Например: C:/Git/Hexlet/frontend-project-46/__fixtures__/file2.json => /mnt/c/Git/Hexlet/frontend-project-46/__fixtures__/file2.json

### Пример вывода справочной информации можете посмотреть, перейдя по ссылке: https://asciinema.org/a/JUSWghMADSUKPZX5V2EdKkx2D
### Пример сравнения двух плоских файлов json форматтером по умолчанию: https://asciinema.org/a/9eR1vw7YZpj7JTlR9sUwVFdwG
### Аналогично для двух плоских файлов yaml: https://asciinema.org/a/BoyVKJT74wQUojJsgMOpopAPl

### Логика сравнения файлов .json от файлов .yaml почти ничем не отличается => резульатом парсинга .yaml явялется объект, аналогично с .json
```
parseFile(yamlFile): {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false
}
parseFile(jsonFile): {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false
}
```
### Hexlet tests and linter status:
[![Actions Status](https://github.com/Wladislava1/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Wladislava1/frontend-project-46/actions)

### Test Coverage Badge:
[![Test Coverage](https://api.codeclimate.com/v1/badges/ad63740bf79023bffc15/test_coverage)](https://codeclimate.com/github/Wladislava1/frontend-project-46/test_coverage)

### Для сравнения неплоских файлов была использована похожая логика с добавлением рекруссии для каждого значения-объекта
### Вывод результата сравнения двух неплоских файлов форматтером по умолчанию: https://asciinema.org/a/kSMXFF44qSQRUYqswnYbUbzcE
- Здесь по умолчанию используется форматер вывода информации _stylish.js_;

## Если в файлах присутствуют массивы, то при использовании форматтера по умолчанию можно наблюдать следующее:
```
const obj1 = {
  nest: ['str']
};

const obj2 = {
  nest: ['value', 'dog']
};
```
### Вывод:
```
 nest: {
      - 0: str  // отсутствует в массиве второго файла под индексом 0
      + 0: value  // отсутствует в массиве первого файла под индесом 1
      + 1: dog 
 }
 ```
## Форматтер plain:
```
const json1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};
const json2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};
```
- Результат сравнения - строка с полными путями до значений, которые так или иначе отличаются:
```
Property 'follow' was removed
Property 'proxy' was removed
Property 'timeout' was updated. From 50 to 20
Property 'verbose' was added with value: true
```
### Пример использования форматтера plain для сравнения двух неплоских файлов: https://asciinema.org/a/IJGd1cJW0H8rX8M0zXo3HNjtI
## Форматтер json:
- На примере файлов выше (json1, json2):
```
{
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
}
```
- Результат - json формат, удобный для машинной обработки
### Пример использования форматтера json для сравнения двух неплоских файлов: https://asciinema.org/a/CEs9574wMEOslRD7elFTqT7p7
