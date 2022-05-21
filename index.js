console.log('%c[JavaScript]thisについて学ぼう'
  , 'color:red; font-size: 1.5em');

let myObj =  {
  id: 2,
  printId(){
    console.log(this.id);
  }
}

myObj.printId();