// Циклы

"use strict";

/* Цикл while - пока что это условие выполняется 
мы будем делать какие-то действия */
let num = 50;

// while(num < 55) {
//     console.log(num);
//     num++;
// }

/* Цикл do {}...while()  - Сначало что-то делаем 
потом проверяем условие и если необходимо выйти из цикла */

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

/* Цикл  for  */

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }
/*  Досрочно останавливаем цикл  */

for (let i = 1; i < 10; i++) {
  if (i === 6) {
    // break;   /* Оператор break прекращает цикл когда условие выполнено    */
    continue; /* Оператор continue позволяет пропустить тот шаг который не нужен, но при этом не прерывает полностью цикл   */
  }
  console.log(i);
}