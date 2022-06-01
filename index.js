console.log('%c[JavaScript]ループを使いこなそう2'
  , 'color:red; font-size: 1.5em');

const data = [1 ,4, 2, 5, 3];
const fruits = {
  banana: 2,
  apple: 3,
  orange: 1
}

// const newData = data.map((value, index, array) => {
//   return value * 2;
// });

// const newData = Object.keys(fruits).map((value, index, array) => {
//   return value + ' aaaa';
// });

// filter: returnの条件式がtrueになったもののみ、newDataに加える。
// const newData = data.filter((value, index, array) => {
//   return value === 1;
// });

// reduce: accuが蓄積、currが現在の値。
// const newData = data.reduce((accu, curr) => {
//   console.log(accu, curr);
//   return accu + curr;
// });

/**
 * sort: 配列自体の並び替えを行う
 * a-b: 昇順
 * b-a: 降順
 */
const newData = data
.map(v => v + 1)
.sort((a, b) => {
  // return a - b;
  return b - a;
});

console.log('data', data);
console.log('newData', newData);

