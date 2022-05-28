console.log('%c[JavaScript]アロー関数について学ぼう'
  , 'color:red; font-size: 1.5em');

const timesTwo = i => i * 2;

const res = timesTwo(2);
// console.log(res)

/**
 * 書き方(syntax)について
 */
let arrowFn;

// 引数がない場合、必ずカッコを記載する必要がある。
arrowFn = () => 42;

// 引数が1つの場合は、カッコが省略することができる。(カッコありでも問題なし)
arrowFn = x => 42;
arrowFn = (x) => 42;

// 引数が2つ以上の場合は、カッコを記載する必要がある。
arrowFn = (x, y) => 42;

// return行以外の処理がある場合、波カッコを記載する必要がある。
arrowFn = (x, y) => {
  console.log(x + y);
  return x + y;
}
// arrowFn(1, 2);

/**
 * thisのバインドについて
 */
let normalFn;
normalFn = {
  id: 43,
  counter: function() {
    console.log(this.id);

    window.setTimeout(() => {
      console.log(this.id);
    }, 1000);
  }
};
normalFn.counter();

window.me = 'global';
const outer = function() {
  let me = 'outer' // lexical scope

  return {
    me: 'inner',
    say: () => {
      console.log(this.me);
    }
  }
}
outer().say();