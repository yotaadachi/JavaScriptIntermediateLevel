console.log('%c[JavaScript]プロトタイプと継承について'
  , 'color:red; font-size: 1.5em');

function Person(first, last, age) {
  this.first = first;
  this.last = last;
}

function Japanese(first, last) {
  Person.call(this, first, last);
  this.lang = 'ja';
}

// prototypeの継承
Object.setPrototypeOf(Japanese.prototype, Person.prototype);

Person.prototype.introduce = function() {
  console.log('My name is ' + this.first + ' ' + this.last);
};

Japanese.prototype.sayJapanese = function() {
  console.log('こんにちは ' + this.first + ' ' + this.last);
}

let me = new Japanese('First', 'Last');
me.introduce();
me.sayJapanese();