// Условия.
"use strict";

// /*  Если 4 равна 9 то выводим в консоль 'ok!', если нет то выводим Error */
// if (4 == 9) {
//   console.log("ok!");
// } else {
//   console.log("Error");
// }

// const num = 50;

// if (num < 49) {
//   console.log("Error");
// } else if (num > 100) {
//   console.log("Много");
// } else {
//   console.log("Ok!");
// }
// /*  Ниже тернарный оператор
// ( Тернарный - потому что в нём участвуют три аргумента)
//  1-й: (num === 50)
//  2-й: console.log('ok!')
//  3-й: console.log('Error')
// */
// num === 50 ? console.log("ok!") : console.log("Error");

/* Бинарный аргумент 4 + 4 
Унарный аргумент +'4' */

/* switch - модификация 'if' которая 
поддерживает сразу несколько проверок и условий 
switch проверяет строгое сравнение (будь то строки или числа) */

const num = 50;

switch (num) {
  case 49:
    console.log("Неверно");
    break;
  case 100:
    console.log("Неверно");
    break;
  case 51:
    console.log("Верно!");
    break;
  default:
    console.log("Не в этот раз!");
    break;
}
