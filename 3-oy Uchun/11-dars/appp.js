// 1. Berilgan butun sonning barcha raqamlarini qo‘shib natijani qaytaruvchi funksiya yozing.
const calcNum = son => {
   if(Number.isInteger(son) && son > 0) {
        let sum = 0;
        while (son >= 1) {
            sum += son % 10;
            son = Math.trunc(son / 10);
        }
        return sum;
   } else {
    return "Butun musbat son kiriting"
   }
}
console.log(calcNum(4513));  // 13

// 2. Berilgan butun sonning barcha raqamlarini ko‘paytirib natijani qaytaruvchi funksiya yozing.
const calcNum2 = son => {
    if(Number.isInteger(son) && son > 0) {
         let p = 1;
         while (son >= 1) {
             p *= son % 10;
             son = Math.trunc(son / 10);
         }
         return p;
    } else {
     return "Butun musbat son kiriting"
    }
 }
 console.log(calcNum2(4513));  // 60

// 3. Berilgan butun sonning ichidagi eng katta raqamni topuvchi funksiya yozing.
const findMax = son => {
    if(Number.isInteger(son) && son > 0) {
         let max = son % 10;
         while (son >= 1) {
             if(max < son % 10) {
                max = son % 10
             }
             son = Math.trunc(son / 10);
         }
         return max;
    } else {
     return "Butun musbat son kiriting"
    }
 }
 console.log(findMax(4513));  // 5

// 4. Berilgan butun sonning raqamlarini teskari tartibda yozib, yangi son hosil qiluvchi funksiya yozing.
const reverseNum = son => {
    if(Number.isInteger(son) && son > 0) {
         let reverse = '';
         while (son >= 1) {
             reverse += son % 10
             son = Math.trunc(son / 10);
         }
         return reverse;
    } else {
     return "Butun musbat son kiriting"
    }
 }
 console.log(reverseNum(4513));  // 3154

// 5. Berilgan son tub son ekanligini aniqlovchi funksiya yozing.
const tubNum = son => {
    if (son < 2) {
        return "tub emas"
    }
    if(son % 2 == 0) {
        return "tub emas"
    }
    if(son == 2) {
        return "tub son"
    }
    for (let i = 3; i < Math.sqrt(son); i += 2) {
        if(son % i == 0) {
            return "tub emas"
        }
    }
    return "tub son"
}
console.log(tubNum(29));  // tub son 

// 6. Berilgan son mukammal son (o‘zidan tashqari bo‘luvchilarining yig‘indisi o‘ziga teng bo‘lgan son) ekanligini tekshiruvchi funksiya yozing.
const mukamNum = son => {
    let mukam = 0
    for (let i = 1; i < son; i++) {
        if(son % i == 0) {
            mukam += i
        }        
    }
    if(son == mukam) {
        return "Mukammal son"
    } else {
        return "Mukammal emas"
    }
}
console.log(mukamNum(28));
// for (let i = 1; i < 100; i++) {
//     mukamNum(i)                  //  6 va 28
// }

// 7. Berilgan n sonining faktorialini qaytaruvchi funksiya yozing.
const faktorial = n => {
    let p = 1;
    for (let i = 2; i <= n; i++) {
        p *= i
    }
    return p;
}
console.log(faktorial(5)); // 120

// 8. Berilgan son Armstrong soni (har bir raqamining darajasi yig‘indisi o‘ziga teng bo‘lgan son) ekanligini aniqlovchi funksiya yozing.
let num = 153;
const nums = (son) => {
    let counter = 0;
    while (son >= 1) {
        son = Math.trunc(son / 10)
        counter++
    }
    return counter;
}
const Armstrong = (num) => {
    let res = num;
    let sum = 0;
    let len = nums(res)
    while (num >= 1) {
        let lastNum = num % 10
        num = Math.trunc(num / 10)
        sum += lastNum ** len
    }
    if(sum == res) {
        return "Armstrong son"
    } else {
        return "odiiy son"
    }
}
console.log(Armstrong(num));




// 9. Berilgan butun sonning raqamlari o‘sish tartibida joylashgan yoki yo‘qligini aniqlovchi funksiya yozing.
const isOrder = son => {
   if(son > 9 && Number.isInteger(son)) {
        let max = son % 10
        while (son >= 1) {
            if(max < son % 10) {
                return "Osish tartibida emas"   
            } else {
                max = son % 10
            }
            son = Math.trunc(son / 10)
        }
        if(son < 1) {
            return "o'sish tartibida "
        }
   } else {
     return "Kattaroq, Butun son kiritish"
   }
}
console.log(isOrder(123456789));  // o'sish tartibida 

// 10. Berilgan butun sonning barcha bo‘luvchilarini hisoblovchi funksiya yozing.
const determDivisor = son => {
    for (let i = 1; i <= son; i++) {
        if(son % i == 0) {
            console.log(i);
        }         
    }
}
determDivisor(48)

// 11. Berilgan n songacha bo‘lgan barcha 3 va 5 ga karrali sonlarning yig‘indisini hisoblovchi funksiya yozing.
const calc = n => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            sum += i
        }        
    }
    return sum;
}
console.log(calc(28));
 
// 12. Berilgan butun sonning barcha raqamlari bir xil ekanligini aniqlovchi funksiya yozing.
const sameNum = son => {
  if(son > 9 && Number.isInteger(son)) {
    let lastNum = son % 10;
    while (son >= 1) {
        if(lastNum !== son % 10) {
            return "Bir xil emas"
        }
        son = Math.trunc(son / 10)
    }
    if(son < 1) {
        return "Bir xil raqam"
    }
  } else {
    return "kattaroq Butun son kiriting"
  }
}
console.log(sameNum(555));  // Bir xil raqam
