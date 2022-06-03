console.log('%c[JavaScript]コンストラクタとプロパティ'
  , 'color:red; font-size: 1.5em');

function Person(first, last) {
  this.first = first;
  this.last = last;
  // this.introduce = function() {
  //   console.log('My name is ' + first + ' ' + last);
  // }
}

// prototypeの中で関数を作成する場合には、変数にthisをつける。
Person.prototype.introduce = function() {
  console.log('My name is ' + this.first + ' ' + this.last);
}

let me0 = new Person('First', 'Last');
// me0.__proto__.introduce = function() {
//   console.log("I don't want to introduce myself");
// }
me0.introduce();

let me1 = new Person('Me1', 'Desu');
me1.introduce();