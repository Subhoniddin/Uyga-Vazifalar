// 1. Berilgan ikkita sonning yig‘indisini hisoblovchi funksiya yozing.
const toCalc = (son1, son2) => {
    return son1 + son2
}
console.log(toCalc(5,8)); // 13

// 2. Berilgan sonning kvadratini hisoblovchi funksiya yozing.
const calcSquare = (num) => {
    return num ** 2
}
console.log(calcSquare(5)); // 25

// 2. Berilgan ikkita sondan kattasini aniqlovchi funksiya yozing.
const determLarge = (son1, son2) => {
    if(son1 > son2) {
        return son1
    } else if (son1 == son2) console.log("ikkala son teng");
     else {
        return son2
    }
}
console.log(determLarge(12,46)); // 46

// 3. Berilgan ikkita sondan kichigini aniqlovchi funksiya yozing.
const determSmall = (son1, son2) => {
    if(son1 < son2) return son1
    else if (son1 == son2) return "teng son"
    else  return son2
}
console.log(determSmall(5,55));  // 5

// 4. Berilgan sonning faktorialini hisoblovchi funksiya yozing.
const factorial = (son) => {
    if (son <= 2) return `${son} dan Kattaroq musbat son kiriting!`  // maydalab tekshirmadi 2 va undan pastini hisoblash shart mas ekan;

    let res = 1;
    for (let i = 1; i <= son; i++) {
        res *= i
    }
    return res;
}
console.log(factorial(8));  // 40320

// 5. Berilgan sonning juft yoki toq ekanligini aniqlovchi funksiya yozing.
const determEverOdd = (son) => {
    if(son % 2 == 0) return "juft"
    else return "Toq"
}
console.log(determEverOdd(43));  // toq

// 6. Berilgan son musbat, manfiy yoki nol ekanligini aniqlovchi funksiya yozing.
const determNolManMus = (son) => {
    if(son > 0) return "musbat son"
    else if (son === 0) return "no'lga teng"
    else return "manfiy son"
}
console.log(determNolManMus(-1));  // manfiy son

// 7. Uchta son berilgan. Eng kattasini aniqlovchi funksiya yozing.
const determMax = (son1,son2, son3) => {
    let max = son1;
    if (max < son2) return max = son2
    else if(max < son3) return max = son3
}
console.log(determMax(12,2,45));

// 8. Berilgan sonning bo‘luvchilarini topuvchi funksiya yozing.
const findDivisors = (son) => {
    for (let i = 1; i < son; i++) {
        if (son % i == 0) console.log(i);
    }
    return "consolga chiqarildi" // massiv qilib return qilish kere lekin massivga yetib kelganimizcha yoq.
}
console.log(findDivisors(26)); // 1, 2, 13, consolga chiqarildi

// 9. Berilgan son tub yoki tub emasligini aniqlovchi funksiya yozing.
function calcNum22(son) {
    let counter = 0;
    for (let i = 1; i < son; i++) {
        if(son % i === 0) {
            // if( son == i && i == 1) {
            //     console.log("Tub son");
            // } else console.log("Tub emas");
            counter++
        }        
    }
    if(counter <= 2) {
        return "tub son";
    } else return "tub emas";
}
console.log(calcNum22(13));  // tub son

// 10. Berilgan ikkita son orasidagi barcha sonlarni ekranga chiqaruvchi funksiya yozing.
const numberBetween = (son1, son2) => {
    [son1, son2] = son1 < son2 ? [son1, son2] : [son2, son1];
    for (let i = son1; i < son2; i++) {
        console.log(i);
    }
}
numberBetween(12,32)

// 11. Berilgan ikkita son orasidagi barcha juft sonlarni ekranga chiqaruvchi funksiya yozing.
const numbersBetween = (son1, son2) => {
    [son1, son2] = son1 < son2 ? [son1, son2] : [son2, son1];
    for (let i = son1; i < son2; i++) {
        if(i % 2 == 0) console.log(i);
    }
}
numbersBetween(12,32)

// 12. Berilgan sonning raqamlari yig‘indisini hisoblovchi funksiya yozing.
const findSum = (son) => {
    if(son < 10) return son;
    let sum = 0;
    while(son >= 1) {
        sum += son % 10;
        son = Math.trunc(son / 10);
    }
    return sum;
}
console.log(findSum(456));

// 13. Berilgan sonning birinchi va oxirgi raqamini aniqlovchi funksiya yozing.
const findFrstLastNum = (son) => {
    let last = son % 10
    while (son > 9) {
        son = Math.trunc(son / 10)
    }
    return `Birinchi son: ${son} Oxirgi son: ${last}`
}
console.log(findFrstLastNum(65431285));

// 14. Berilgan sonni teskarisiga o‘girish (masalan, 123 → 321) funksiyasini yozing.
const sonReverse = (son) => {
    if(son < 10) return son;
    let reverse = ''
    while (son >= 1) {
        reverse += son % 10
        son = Math.trunc(son / 10);
    }
    return reverse
}
console.log(sonReverse(2845632));

// 15. Berilgan sonni 3 ning darajasi ekanligini tekshiruvchi funksiya yozing.
const levelNum = (son) => {
    let counter = 0;
    while (son >= 3) {
        son = son / 3
        counter++
    }
    if(son == 1) {
        return `3 ning ${counter} darajasi :)`
    } else {
        return "3 ning darajasi emas:("
    }
}
console.log(levelNum(81));  //  3 ning 4 darajasi :)


// 16. Berilgan sonning barcha bo‘luvchilarini ekranga chiqaruvchi funksiya yozing.
const findDivisors2 = (son) => {
    if (son <= 1) return son;
    for (let i = 1; i < son; i++) {
        if (son % i == 0) console.log(i);
    }
    return "consolga chiqarildi" // massiv qilib return qilish kere lekin massivga yetib kelganimizcha yoq.
}
console.log(findDivisors2(26)); // 1, 2, 13, consolga chiqarildi

// 17. Berilgan sonning raqamlari ko‘paytmasini hisoblovchi funksiya yozing.
const findSum2 = (son) => {
    if(son < 10) return son;
    let sum = 1;
    while(son >= 1) {
        sum *= son % 10;
        son = Math.trunc(son / 10);
    }
    return sum;
}
console.log(findSum2(456)); // 120

// 18. Berilgan 3 xonali sonni palindrom ekanligini tekshiruvchi funksiya yozing.
// const palindrom = (son) => {
//     let lastNum = son % 10;
//     while (son > 9) {
//         son = Math.trunc(son / 10)
//     }
//     if(son == lastNum) {
//         return "Palindrom son"
//     }  else {
//         return "palindrom emas"
//     }
// }
// console.log(palindrom(461))   // birinchi usul.   

const palindrom = (son) => {
    if(son / 100 < 10 && son / 100 >= 1) {
        if(Math.trunc(son / 100) == son % 10) {
            return "palindrom son"
        } else {
            return "palindrom emas"
        }
    }
}
console.log(palindrom(454));

// 19. Berilgan sonning raqamlarini kamayish tartibida joylashtiruvchi funksiya yozing.
const decreaseNum = (son) => {
    for (let i = son; i >= 1; i--) {
        console.log(i);
    }
}
decreaseNum(46)

// 20. Berilgan ikki son orasidagi barcha tub sonlarni ekranga chiqaruvchi funksiya yozing.
const tubSon = (num) => {
    let res = true;
    for (let i = 2; i < num; i++) {
        if(num % i == 0) {
            res = false
        }
    }
    if(res) {
        console.log(num);
    }
}
const twoBetweenNum = (son1, son2) => {
    for (let i = son1; i <= son2; i++) {
        tubSon(i)        
    }
} 
twoBetweenNum(9,97)

// 21. Berilgan sonni kvadrat ildizini hisoblovchi funksiya yozing.
const calcSqrt = (son) => {
    return Math.sqrt(son)
}
console.log(calcSqrt(25));  // 5
