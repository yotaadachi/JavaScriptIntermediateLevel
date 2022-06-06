console.log('%c[JavaScript]プロトタイプチェーンについて'
  , 'color:red; font-size: 1.5em');

function Person(first, last) {
  this.first = first;
  this.last = last;
  // this.introduce = function() {
  //   console.log('My name is ' + first + ' ' + last);
  // }
}

// 下記がコメントアウトされると、Objectのprototypeが参照される。
// Person.prototype.introduce = function() {
//   console.log('My name is ' + this.first + ' ' + this.last);
// }

Object.prototype.introduce = function() {
  console.log('Object My name is ' + this.first + ' ' + this.last);
}

let me0 = new Person('First', 'Last');
// me0.__proto__.introduce = function() {
//   console.log("I don't want to introduce myself");
// }

// 下記がコメントアウトされると、Personのコンストラクタのprototypeを参照しにいく。
// me0.introduce = function() {
//   console.log('Heeeeeello! My name is ' + this.first + ' ' + this.last);
// }
me0.introduce();
// let me1 = new Person('Me1', 'Desu');
// me1.introduce();