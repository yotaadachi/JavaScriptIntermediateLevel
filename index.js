console.log('%c[JavaScript]クロージャーについて学ぼう'
  , 'color:red; font-size: 1.5em');

/**
 * クロージャーの定義
 * クロージャーとは、関数と、その関数が宣言された
 * レキシカルスコープの組み合わせ。
 */

// let counter = 0;
// increment(); // 1
// increment(); // 2
// counter = 0;
// increment(); // 『3』と出力したいが、途中で変数の値が操作されてしまい、出力されない。

// function increment() {
//   counter++;
//   console.log(counter);
// }

// let increment = (function () {

//   let counter = 0; // Lexical Scope

//   return function() {
//     counter += 1;
//     console.log(counter);
//   }
// })();

// increment();
// increment();
// increment();

function addStringFactory(tail) {
  function concat(str) {
    return str + tail;
  }
  return concat;
}

let addAs = addStringFactory(' AAAAA');
let addBs = addStringFactory(' BBBBB');

let str = 'Tom';
str = addAs(str);
console.log(str);