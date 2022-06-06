console.log('%c[JavaScript]プロトタイプと継承について'
  , 'color:red; font-size: 1.5em');

class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  introduce() {
    console.log('My name is ' + this.first + ' ' + this.last);
  }
}

class Japanese extends Person {
  constructor(first, last) {
    super(first, last);
    this.lang = 'ja';
  }
  introduce() {
    console.log('こんにちは ' + this.first + ' ' + this.last);
  }
}
let me = new Japanese('First', 'Last');
me.introduce();