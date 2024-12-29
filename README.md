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
### Пример сравнения двух плоских файлов json: https://asciinema.org/a/9eR1vw7YZpj7JTlR9sUwVFdwG

### Hexlet tests and linter status:
[![Actions Status](https://github.com/Wladislava1/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Wladislava1/frontend-project-46/actions)

