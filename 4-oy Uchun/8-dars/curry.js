// 1. Infinite Currying bilan sonlarni to’plang va natijani chop qiling
// Foydalanuvchi istalgancha son kiritadi, kiritish tugagach, umumiy yig’indini chop etadi. Bunga erishish uchun currying va limitani qanday ishlatishni tushunib olishingiz kerak bo’ladi.
// Talablar:
// •	Foydalanuvchi sonlarni cheksiz kiritishi kerak.
// •	Agar argument berilmasa yoki undefined bo’lsa, yig’indini chop qiling.
// sum(1)(2)(3)(4)(); // 10
// sum(5)(10)(15)(20)(25)(); // 75
function curry(num) {
    let sum = num;
    return function calc(son) {
        if(son) {
            sum += son;
            return calc;
        } else {return sum};
    };
};
console.log(curry(1)(2)(3)(4)(5)(1)(1)(1)());

// =================================================================
// 2. Infinity Currying bilan argumentlar soniga qarab natija qaytarish
// Cheksiz ravishda argumentlarni qabul qiladigan funktsiyani yarating, va agar sonlar ro’yxati oxirida 0 bo’lsa, yig’indini qaytaring, agar 1 bo’lsa ko’paytmani qaytaring.
// Talablar:
// 	•	Foydalanuvchi sonlarni cheksiz kiritishi kerak.
// 	•	Oxirgi argument 0 bo’lsa, barcha kiritilgan sonlarning yig’indisini qaytarish kerak.
// 	•	Oxirgi argument 1 bo’lsa, barcha kiritilgan sonlarning ko’paytmasini qaytarish kerak.

// calc(2)(3)(4)(0); // 9 (yig'indisi)
// calc(2)(3)(4)(1); // 24 (ko'paytmasi)
function curry(num) {
    let sum = num;
    let p = num;
    return function calc(son) {
        if(typeof son == "number") {
            sum += son;
            p *= son;
            if(son === 0) {return sum;} else if(son === 1) {return p};
            return calc;
        } else {
            return son === 0 ? sum : p;
        };
    };
};
console.log(curry(1)(2)(3)(4)(5)(3)(5)(1));
// =================================================================
// 3. Infinity Currying va string concatenation
// Cheksiz bo’lib turadigan har xil turdagi qiymatlar kiritilganda, ularni string sifatida birlashtiradigan funktsiyani yozing. Argumentlar tugagach, stringni qaytarishingiz kerak.

// Talablar:
// 	•	Sonlar va stringlar birlashtirilishi kerak.
// 	•	Tugallanganda, umumiy birlashtirilgan string qaytarilishi kerak.
//  concat('Hello')(' ')('World')('!')(); // 'Hello World!'
//  concat('This')(' is')(' a')(' test')('!')(); // 'This is a test!'
function curry(ctr) {
    let str = ctr + '';
    return function calc(str2) {
        if(str2) {
            str += str2;
            return calc;
        } else {return str};
    };
};
console.log(curry('salom')(' dunyo ')(3)(' ')(' !')(' this ')(1)(1)());
// =================================================================
// 4. Infinity Currying bilan filter qoidasi
// Infinity currying yordamida sonlar ro’yxatini oluvchi va faqat oxirida kiritilgan filter shartiga mos keladigan sonlarni qaytaradigan funktsiyani yozing.

// Talablar:
// 	•	Foydalanuvchi sonlarni cheksiz kiritishi kerak.
// 	•	Oxirgi argument filter qoidasi bo’lishi kerak (masalan, juft sonlar, toq sonlar, 10 dan katta yoki kichik sonlar).
// filter(1)(2)(3)(4)(5)(6)('even'); // [2, 4, 6] (juft sonlar)
// filter(10)(25)(30)(45)(55)('odd'); // [25, 45, 55] (toq sonlar)
 function filter(num) {
    let arr = [];
    arr.push(num);
    return function calc(son) {
        if(typeof son == 'number' && son !== 'enen' && son !== 'odd') {
            arr.push(son);
            return calc;
        } else {
            if(son === 'even') {
                return arr.filter(item => item % 2 === 0);
            } else if(son === 'odd') {
                return arr.filter(item => item % 2 !== 0);
            } else if(son === '10') {
                return arr.filter(item => item > 10);
            } else if(son === '5') {
                return arr.filter(item => item < 5);
            } else {return arr};
        };
    };
}
console.log(filter(1)(2)(3)(4)(5)(6)('odd'));
// =================================================================
// 5. Infinity Currying va operatorga asoslangan hisoblash
// Funktsiyaga cheksiz sonlar va oxirida operator (+, -, *, /) kiritiladi. Shunga mos ravishda hisoblash amalga oshiriladi.

// Talablar:
// 	•	Foydalanuvchi cheksiz ravishda sonlar kiritishi kerak.
// 	•	Oxirgi argument operator bo’lib, kiritilgan sonlar o’sha operator asosida hisoblanishi kerak.

// calculate(2)(3)(4)('+'); // 9 (yig'indisi)
// calculate(10)(2)(5)('*'); // 100 (ko'paytmasi)
// calculate(10)(2)('/'); // 5 (bo'lish)
function calculate(num) {
    let sum = num;
    let  p = num;
    let dev = num;
    let min = num;
    return function calc(son) {
        if(typeof son == 'number') {
            sum += son;
            p *= son;
            dev /= son;
            min -= son;
            return calc;
        } else {
            if(son === '+') {
                return sum;
            } else if(son === '-') {
                return min;
            } else if(son === '*') {
                return p;
            } else if(son === '/') {
                return dev;
            } else {return sum};
        };
    };
}
console.log(calculate(10)(2)(5)('/'));