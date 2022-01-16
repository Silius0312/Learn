/* Функции - это действия в JS */
"use strict";

let num = 20; /* это глобальная переменная */
/* Function declaration */
function showFirstMessage(text) {
  /* имя функции - это глагол с припиской какого-то действия */
  console.log(text); /* аргументы функции записываются в круглых скобках */
  let num = 10; /* переменная созданная внутри функции - локальная переменная и доступна только внутри этой функции */
  console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);
/* Замыкание функции - это сама функция со всеми внешними 
переменными которые ей доступны  */
/* Как только функция видит return она прекращает свои действия */
/* любой код послу return не будет выполнятся */

// function calc(a, b) {
//     return (a+b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

function red() {
  let num = 50;
  return num;
}

const anotherNum = red();
console.log(anotherNum);

/* Function expression (функциональное выражение)  - эта функция создаётся тогда, 
когда до неё доходит поток кода. Её можно вызвать только после объявления */

const logger = function () {
  console.log("Hello");
};
logger();

/* Стрелочная функция - не имеет контекста вызова, 
чаще всего встречается в обработчиках событий */

const calc = (a, b) => {
  return a + b;
};

const calk = (a, b) => a + b;

const ca1k = (a) => a + "Привет";

const ca1c = (a, b) => {
  console.log("1");
  return a + b;
};
