// Masala 1: Matnni o'zgartirish va tahlil qilish Input: "hello world"
function toUpper(str) {
    return str.toUpperCase(); // Birinchi Bosh harif qilamiz 
}
function space(str) {
    return str.split(" ").join("")  // toUpper() funcsiyasidan qaytgan natijani space() funcsiyasiga beramiz
}
function leng(str) {
    return str.length  // space() funcsiyasidan qaytgan natijani leng() funcsiyasiga beramiz 
}
// function pipe(funcs, value) {
//     return funcs.reduce( (res, item, index,arr ) => { 
//         return item(res)  
//     }, value)
// }
// console.log(pipe([toUpper, space, leng], "hello world"));

const pipe = (...funcs) => (value) => funcs.reduce( (res, func ) => func(res), value) // yuqoridagidan ko'ra qisqa

console.log(pipe(toUpper, space, leng)("hello world"));

// Masala 2: Sonlar bilan ishlash Input:[2, 4, 6, 8]
const kvadrat = (num) => num.map( item => item ** 2);  // kvadrat qilib yangi arr qaytadi
const calc = (num) => num.reduce( (res, item) => (res += item), 0); // hammasini qoshib beradi
const sqrt = (num) => Math.sqrt(num);  // ildiz olib beradi

const pipe2 = (...funcs) => (value) => funcs.reduce( (res, fnc) => fnc(res), value); // bir biriga natijasini olib oxirgi natija qaytadi.

console.log(pipe2(kvadrat, calc, sqrt)([2, 4, 6, 8]));  // 10.954451150103322

// Masala 3: Foydalanuvchi ma'lumotlarini tahlil qilish Input: { name: "John", age: 25, salary: 5000 }
const ageUp = (obj) => {obj.age += 5; return obj};  // yoshga 5 qoshadi va qaytaradi
const salaryUp = (obj) => {obj.salary += obj.salary * 0.1; return obj}; //  10% ni qoshib qaytaradi
const strRev = (obj) => `${obj.name}:${obj.age},Salary:${obj.salary}` // aytilgan narsalarni str qilib qaytaradi 

const pipe3 = (...funcs) => (value) => funcs.reduce( (res, fnc) => fnc(res), value); // pipe func 

console.log(pipe3(ageUp, salaryUp, strRev)({ name: "John", age: 25, salary: 5000 }));

// Masala 4: Raqamli bo'lmagan belgilarni olib tashlash Input: "a1b2c3d4e5"
const getNum = (str) => {   // raqam va harfni ajratish soralgandi lekin bizga faqat raqam kerak ekan harflar kerak emas. 
    let nums = '';
    for (let num of str) {
        if(num / 2) {nums += num}
    }
    return nums.split('') // arr qilib qaytaradi raqamlarni 
}
  // Tartibli yig'indisi degan narsani tushunmadim lekin natija bir xil chiqdi.
const calc2 = (nums) => nums.reduce( (res, num) => (res + Number(num)), 0); // hamma raqatmni qoshib qaytaradi.

const pipe4 = (funcs) => (value) => funcs.reduce( (res, fnc) => fnc(res), value);

console.log(pipe4([getNum, calc2])("a1b2c3d4e5"));

// Masala 5: Tarqatilgan sonlar massivini to'plamga aylantirish  Input: [1, 2, 2, 3, 4, 4, 5]
const remuveDupl = (arr) => [...new Set(arr)];
const toqNum = (nums) => nums.filter( num => num % 2 == 1); 
const maxNum = (nums) => Math.max(...nums);

const pipe5 = (...funcs) => (value) => funcs.reduce( (res, fnc) => fnc(res), value);

console.log(pipe5(remuveDupl, toqNum, maxNum)([1, 2, 2, 3, 4, 4, 5]));

// Masala 6: Massivda qiymatlarni ketma-ket o'zgartirish Input: [1, 2, 3, 4, 5]
const kopay2 = (arr) => arr.map( item => item * 2);
const calc3 = (nums) => nums.reduce( (res, el) => (res + el), 0);
const kvadrat2 = (num) => num ** 2;

const pipe6 = (...funcs) => (value) => funcs.reduce( (res, el) => el(res), value);

console.log(pipe6(kopay2, calc3, kvadrat2)([1, 2, 3, 4, 5]));


  // Darsda +998(xx)-yyy-yy-yy ushbu formatni tekshiradigan kod
// const regEx = /^\+998\(\d{2}\)-\d{3}-\d{2}-\d{2}$/;
// let PhoneNomer = '+998(93)-442-66-33'

function checkPhoneNumber(phone) {
    if (!phone.startsWith("+998")) return false;

    let nomer = phone.split("-");
    nomer[0] = nomer[0].slice(4);
    
    if (nomer.length !== 4) return false;

    if (!nomer[0].startsWith("(") || !nomer[0].endsWith(")")) return false;

    let isNum = nomer.slice(1, 4);

    for (let num of isNum) {
        if (isNaN(num)) return false;
    }

    if (isNum[0].length !== 3 || isNum[1].length !== 2 || isNum[2].length !== 2) {
        return false;
    }

    return true;
}
console.log(checkPhoneNumber('+998(93)-443-66-33'));

  // Infinity curryingga multiply degan funksiya yozing.

  function first(a) {
    function second(b) {
        return b !== undefined ? first(a * b) : a;
    }
    second.valueOf = () => a;
    return second;
}

console.log(first(1)(2)(2)(2));

  
