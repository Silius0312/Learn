/* Методы и свойства у строк и чисел */
/* Методы - это вспомогательные функции */
/* Свойства - это вспомогательные значения */

"use strict";

const str = "приветствую";
console.log(str.length); // .length  - это свойство и пишется через точку

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.length);

const strin = "приветствую";
console.log(strin[2]);

const string = "приветствую";
console.log((string[2] = "е")); // так не правильно
console.log(string);

/* Метод изменения регистра  */

const apr = "априори";
console.log(apr.toUpperCase()); // возвращает новое значение ('АПРИОРИ'), а не изменяет его
console.log(apr);

const april = "апРИори";
console.log(april.toLowerCase()); // возвращает новое значение ('априори'), а не изменяет его
console.log(april);

/* Метод который находит кусочек строки и показывает 
с каого индекса он начинается */

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const apple = "Some fruit";
console.log(apple.indexOf("q")); // определяем есть ли такая буква в строке выше

/* Методы которые взаимодействуют со строками */

const logg = "Hello World";
console.log(logg.slice(6, 11)); // c 6 до 11 т.е. (6-W, 7-o, 8-r, 9-l, 10-d)

const logger = "Hello World";
console.log(logger.slice(6)); // так мы вырезаем с 6 до конца

const loger = "Hello World"; // при '-' начинаем с конца. т.е.
console.log(loger.slice(-5, -1)); //  W=-5, o=-4, r=-3, l=-2, d=-1 но его мы не включаем т.к. до -1

/* Метод .substring */

const logan = "Hello World";
console.log(logan.substring(6, 11)); // не поддерживает отрицательные значения

/* Метод .substr */

const logn = "Hello World";
console.log(logn.substr(6, 5)); // 2-й аргумент указывает сколько символов надо вырезать

// МЕТОДЫ которые взаимодействуют с числами Math.

const num = 12.2;
console.log(Math.round(num)); // округляем переменную num

const test = "12.2px";
console.log(parseInt(test)); // Переводит число в другую систему исчисления округляя

const test1 = "12.2px";
console.log(parseFloat(test1)); // Переводит число в другую систему исчисления не округляя
