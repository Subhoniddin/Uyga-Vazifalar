function curry(num) {
    let sum = num;
  return function calc(num2) {
    if(num2 !== undefined) {
        sum += num2;
        return calc;
    } else {return sum};
  };
}
console.log(curry(1)(2)(3)()); // 6

function curryWithDefaults(...arr) {
  let sum = 0;
  if (arr.length > 0) {
    sum += arr.reduce((total, num) => total + num, 0);
  }
  
  return function calc(...args) {
    if (args.length > 0) {
      sum += args.reduce((total, num) => total + num, 0);
    }
    calc.res = sum;
    return calc;
  };
}

console.log(curryWithDefaults(3)()(7, 2)().res); // 12

function currySum(...initialArgs) {
  let total = initialArgs.reduce((sum, n) => sum + n, 0);
  
  function chain(...args) {
    if (args.length === 0) {
      return total;
    }
    
    total += args.reduce((sum, n) => sum + n, 0);
    return chain;
  }
  
  return chain;
}
console.log(currySum(10)(-5)(3, 7)());
