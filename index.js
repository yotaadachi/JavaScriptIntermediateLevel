console.log('%c[JavaScript]thisについて学ぼう'
  , 'color:red; font-size: 1.5em');

let myObj =  {
  id: 2,
  printId(){
    console.log(this.id);
  }
}

// myObj.printId();

const sayFoo = function(){
  console.log(this['foo']);
}

foo = 'foo';

const mySecondObj = {
  foo: "I'm in the obj",
  sayFoo
}

// グローバルオブジェクト(window Obj)に定義された『foo』が取得される。
sayFoo();

// 呼び出し元のオブジェクトが取得される。
mySecondObj.sayFoo();

function MyObj(id){
  this.id = id;
}
MyObj.prototype.printId = function(id) {
  console.log(this.id);
}


class MyClass {
  constructor() {
    this.id = id;
  }

  printId(id) {
    console.log(this.id);
  }
}

const newInstance = new MyObj(5);

const outer = {
  func1: function() {
    console.log(this);
    _this = this;

    const func2 = function() {
      console.log(_this);

      const func3 = function() {
        console.log(_this);
      }();
    }();
  }
}

outer.func1();