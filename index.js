console.log('%c[JavaScript]非同期操作について学ぼう1(コールバック関数)'
  , 'color:red; font-size: 1.5em');

function wait(callback, num) {
  setTimeout(() => {
    console.log(num);
    callback(num);
  }, 1000);
}

wait(num => {
  num++;
  wait(num => {
    num++
    wait(num => {
      num++

    }, num);
  }, num);
}, 0);