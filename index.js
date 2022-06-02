console.log('%c[JavaScript]非同期操作について学ぼう2(Await/Async関数)'
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

async function init() {
  let num = 0;
  try {
    num = await wait(1000);
    num++;
    num = await wait(num);
    num++;
    num = await wait(num);
    num++;
    num = await wait(num);
    num++;
    num = await wait(num);
    num++;
  } catch(e) {
    throw new Error('Error is occured', e);
  }
  return num;
}

init();