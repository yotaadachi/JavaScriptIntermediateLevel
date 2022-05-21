console.log('%c[JavaScript]call, apply, bindの使い方'
  , 'color:red; font-size: 1.5em');

// 関数が定義された時点でthisの参照先は決まっていない。
function greet() {
  console.log(arguments);
  let slicedArray = [].slice.call(arguments, 0, 1);
  console.log(slicedArray);

  //let hi = `Hi, ${this.name}`;
  //console.log(hi);
}

let obj = {name: "Tom"};

// callは第一引数でthisの参照先を定義できる。
greet.call(obj, 1,2,3);