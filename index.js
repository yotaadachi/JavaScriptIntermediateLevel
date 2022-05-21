// console.log('%c[JavaScript]call, apply, bindの使い方'
//   , 'color:red; font-size: 1.5em');

// // 関数が定義された時点でthisの参照先は決まっていない。
// function greet() {
//   console.log(arguments);
//   let slicedArray = [].slice.call(arguments, 0, 1);
//   console.log(slicedArray);

//   //let hi = `Hi, ${this.name}`;
//   //console.log(hi);
// }

// let obj = {name: "Tom"};

// // callは第一引数でthisの参照先を定義できる。
// greet.apply(obj, [1,2,3]);

// const arry = [1,2,3,4];
// console.log(Math.min.apply(null, arry));

let myObj = {
  id: 42,
  print() {
    console.log(this);

    setTimeout(() => {
      console.log(this.id);
    }, 1000);
  }
}

myObj.print();
