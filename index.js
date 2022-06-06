console.log('%c[JavaScript]プロトタイプと継承について'
  , 'color:red; font-size: 1.5em');

class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  introduce() {
    console.log('My name is ' + this.first + ' ' + this.last);
  };

}

class Japanese extends Person {
  constructor(first, last) {
    super(first, last);
    this.lang = 'ja';
    this._age = 0;
  }

  introduce() {
    console.log('こんにちは ' + this.first + ' ' + this.last);
  };

  static sayHello(val) {
    console.log('こんにちは ' + val);
  }

  set setAge(value) {
    this._age = value;
  }

  get getAge() {
    return this._age;
  }
}
let me = new Japanese('First', 'Last');
me.introduce();
console.log(me.getAge);
me.setAge = 10;
console.log(me.getAge);
Japanese.sayHello('First');