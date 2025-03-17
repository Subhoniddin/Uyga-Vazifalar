  // pipe funcsiya
const pipe = ( value,...funcs) => {
    return funcs.reduce((value, func) => func(value), value)
};

  // ketma ket funksiyalar
const trimmer = (str) => str.trim();
const toUpper = (str) => str.replace(/\b\w/g, match => match.toUpperCase());
const noSpace = str => str.replace(/\s+/g, " ");
const plus = str => str += "!"; 
 
    // natijani chiqarish
console.log(pipe("   hello    world   ", trimmer, toUpper, noSpace, plus));


  // pipe funcsiya
  const pipe2 = ( value,...funcs) => {
    return funcs.reduce((value, func) => func(value), value)
  };
   // tepadagi bilan bir xil shunga qisqaroq yozishga harakat qildim.
console.log(pipe2([1,2,33,4,5,6,77,], arr => arr.map( item => item * 2), arr => arr.filter( item => item > 0), arr => arr.filter(item => item % 3 == 0), arr => arr.reduce( (sum, item) => sum + item, 0)));


 // pipe funcsiya
 const pipe3 = ( value,...funcs) => {
    return funcs.reduce((acc, func) => func(acc), value)
 };

 const firstUpper = arr => arr.map( item => item.replace(/\b\w/g, match => match.toUpperCase())); 
 const filterJs = arr => arr.filter( item => item.includes(".Js"));
 const catJs = arr => arr.map( item => item.replace(/.Js/g, '')); 
 
 console.log(pipe3(["app.js", "index.html", "style.css", "script.js"], firstUpper, filterJs, catJs));
