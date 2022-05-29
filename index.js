console.log('%c[JavaScript]タグ付きテンプレートリレラルを使ってみよう'
  , 'color:red; font-size: 1.5em');

function b(strings, ...values) {
  console.log(strings);
  console.log(values);
  return strings.reduce((accu, str, i) => {
    let val = values[i] ? `<b>${values[i]}</b>` : "";
    console.log(`${accu}${str}${val}`);
    return `${accu}${str}${val}`;
  }, '');
}

const str1 = "Bob";
const str2 = "Tom";
const result = b`${str1} and ${str2}`;
console.log(result);