console.log('%c[JavaScript]非同期操作について学ぼう1(コールバック関数)'
  , 'color:red; font-size: 1.5em');

function wait(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(num);
      if(num === 1002) {
        reject(num);
      } else {
        resolve(num);
      }
    }, num);
  });
}
wait(1000).then(num => {
  num++;
  return wait(num);
}).then(num => {
  num++
  return wait(num);
}).then(num => {
  num++
  return wait(num);
}).then(num => {
  num++
  return wait(num);
}).catch(num => {
  console.error(num, 'error');
})
// wait(num => {
//   num++;
//   wait(num => {
//     num++
//     wait(num => {
//       num++

//     }, num);
//   }, num);
// }, 0);