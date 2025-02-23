     // 1. indexOf / lastIndexOf (3 ta masala)
// 1. Berilgan massivda "apple" so‘zi mavjud bo‘lsa, uning indeksini toping. Agar yo‘q bo‘lsa, -1 qaytaring.
let arr = [1, 2, 3, 4, 5, 'olma', 'behi', 'olxori', 'apple'];
console.log(arr.indexOf('apple'));
console.log(arr.indexOf(2));

// 2. Massivda eng birinchi va oxirgi 7 sonining indekslarini toping.
arr.indexOf(7);
arr.lastIndexOf(7);

// 3. Massivda "banana" so‘zi faqat bitta marta qatnashganligini indexOf va lastIndexOf yordamida aniqlang.
let index = arr.indexOf('banana')
let lastIndex = arr.lastIndexOf('banana')
if(index == -1) {
    console.log('banana sozi yoq');
} else if( index == lastIndex) {
    console.log('banana bir marotaba qatnashgan');
} else if (index != lastIndex) {
    console.log('banana kop marotaba qatnshgan');
}


    // 2. includes (2 ta masala)
// 4. Foydalanuvchi kiritgan son massivda mavjud yoki yo‘qligini includes yordamida aniqlang.
let son = +prompt('Son kiriting')
if(arr.includes(son)) {
    console.log('Son bor');
} else {
    console.log('son yoq');
}

// 5. Massivda "watermelon" so‘zi mavjud yoki yo‘qligini tekshirib, mavjud bo‘lsa "Bor", aks holda "Yo‘q" degan natija qaytaring.
if(arr.includes('watermelon')) {
    console.log('Bor');
} else {
    console.log('Yoq');
}

    // 3. reverse (2 ta masala)
// 6. Berilgan massivning elementlarini teskari tartibda chiqarib bering.
let revers = arr.reverse();
console.log(revers);

// 7. Foydalanuvchi kiritgan stringni massiv shaklida harflarga ajratib, uni reverse yordamida teskarisiga aylantirib qaytaring.
let str = prompt("So'z yozing");
let res = str.split('').reverse()
console.log(res);

    // 4. forEach (11 ta masala)
// 8. Massivdagi har bir elementni ekranga chiqaruvchi funksiya yozing.
arr.forEach( item => {
    console.log(item);
});

// 9. Massivdagi har bir sonni 2 ga ko‘paytirib, natijani konsolga chiqaring.
let nums = [1,2,3,4,5,6,7,8];
nums.forEach( item => {
    console.log(item * 2);
}); 

// 10. Massiv ichidagi har bir stringni "Salom, " qo‘shimchasi bilan ekranga chiqaruvchi sikl yozing.
// let arr = [1, 2, 3, 4, 5, 'olma', 'behi', 'olxori', 'apple'];
arr.forEach(item => {
    if(typeof item == 'string') {
        console.log('salom, ' + item);
    }
});

// 11. Massivdagi har bir elementga "!!!" qo‘shib, natijani ekranga chiqaring.
arr.forEach( item => {
    console.log(item + '!!!');
});

// 12. Foydalanuvchi kiritgan massivdagi har bir raqamni kvadratga oshirib ekranga chiqaring.
nums.forEach( item => {
    console.log(item ** 2);
});

// 13. Massivdagi faqat musbat sonlarni ekranga chiqaring.
nums.forEach( item => {
    if(item > 0) {
        console.log(item);
    }
}); 

// 14. Massiv ichidagi har bir elementning uzunligini ekranga chiqaring.
arr.forEach( item => {
    console.log(item.length);
});

// 15. Massivdagi har bir sonni index bilan birga konsolga chiqaring (Element: 5, Index: 2).
arr.forEach( (item, index) => {
    console.log('Element:', item, 'index', index );
});

// 16. Massiv ichidagi har bir elementni "Element: qiymat" shaklida ekranga chiqaring.
 const elQiy = arr.map( item => {
    return 'Elament: ' + item;
 });
 console.log(elQiy);
 
// 17. Massiv ichidagi har bir elementni kichik harflarga o‘tkazib ekranga chiqaring.
const newArr = arr.map( item => {
    if(typeof item == 'string') {
       return item.toLowerCase()
    }
    return item;
})
console.log(newArr);

// 18. Massiv elementlari ichida "uz" bilan tugaydigan so‘zlarni ekranga chiqaring.
// let arr = [1, 2, 3, 4, 5, 'olma', 'behi', 'olxori', 'apple', 'uzum', 'bexruz'];
const arrFilter = arr.filter ( item => {
    if (typeof item == 'string' && item.slice(-2) == 'uz') {
        return item;
    }
})
console.log(arrFilter);  // bexruz

     // 5. map (11 ta masala)
// 19. Berilgan sonlar massivini kvadratga oshirib, yangi massiv hosil qiling.
const newMap = nums.map( item => {
    return item ** 2
})
console.log(newMap);

// 20. Har bir stringni katta harflarga o‘tkazib, yangi massiv yarating.
const strMap = arr.map( item => {
    if(typeof item == 'string') {
        return item.toUpperCase()
    }
    return item;
})
console.log(strMap);

// 21. Massiv ichidagi har bir sonni 3 ga ko‘paytirib, yangi massiv hosil qiling.
const calcMap = nums.map( item => {
    return item * 3
})
console.log(calcMap);

// 22. Har bir stringning uzunligini qaytaradigan yangi massiv yarating.
let strMass = ['olma', 'brhi', 'gilos', 'sabzi', 'kartoshka', 'bodom', 'anjir'];
const lengMap = strMass.map( item => {
    return item.length;
})
console.log(lengMap);

// 23. Massiv ichidagi har bir sonning oldiga "Son: " qo‘shilgan yangi massiv yarating.
// let arr = [1, 2, 3, 4, 5, 'olma', 'behi', 'olxori', 'apple', 'uzum', 'bexruz'];
const qoshMap = arr.map( item => {
    if(typeof item == 'number') {
        return 'Son: ' + item;
    }    
    return item;
})
console.log(qoshMap);

// 24. Massivdagi har bir stringning oxiriga "!!!" qo‘shilgan yangi massiv hosil qiling.
const undovliMas = strMass.map( item => {
    return item + '!!!'
});
console.log(undovliMas);

// 25. Foydalanuvchi kiritgan massivdagi har bir elementning uzunligini ifodalovchi yangi massiv yarating.
const lengArr = strMass.map( iten => {
    return item.length;
})
console.log(lengArr);

// 26. Massiv ichidagi har bir elementni "Element: qiymat, Index: indeks" shaklida o‘z ichiga olgan yangi massiv hosil qiling.
const res3 = arr.map( (item, index) => {
    return `Elament: ${item} Index: ${index}`; 
});
console.log(res3);

// 27. Massivdagi barcha sonlarni ikkiga bo‘lib, yangi massivga o‘tkazing.
const res1 = nums.map( item => {
    return item / 2;
})
console.log(res1);

// 28. Massiv ichidagi barcha so‘zlarning birinchi harfini katta harfga o‘zgartirib yangi massiv hosil qiling.
// let strMass = ['olma', 'behi', 'gilos', 'sabzi', 'kartoshka', 'bodom', 'anjir'];

const firstBig = strMass.map( item => {
    return item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase()
})
console.log(firstBig);

// 29. Massiv ichidagi sonlarni string shaklida chiqaradigan yangi massiv yarating.
// let nums = [1,2,3,4,5,6,7,8];
const toStr = nums.map( item => {
    return item.toString()
});
console.log(toStr);

    //  6. filter (11 ta masala)
// 30. Massiv ichidagi faqat musbat sonlarni ajratib yangi massiv yarating.
//  let nums = [1,2,3,4,5,6,7,8, -12, -4];
const musNums = nums.filter( item => {
    return item > 0
});
console.log(musNums);

// 31. Massiv ichidagi faqat juft sonlarni ajratib, yangi massiv hosil qiling.
const juftNums = nums.filter( item => {
    return item % 2 == 0;
});
console.log(juftNums);

// 32. Massivdan "apple" so‘zini olib tashlab yangi massiv yarating.
// let strMass = ['olma', 'behi', 'gilos', 'sabzi', 'kartoshka', 'bodom', 'anjir', 'apple'];
const noApple = strMass.filter( item => {
    return item != 'apple';
});
console.log(noApple);

// 33. Faqat 5 ta harfdan uzun so‘zlarni yangi massivga o‘tkazing.
const uzunWords = strMass.filter( item =>{
    return item.length > 5;
});
console.log(uzunWords);

// 34. Faqat "a" harfi bilan boshlanuvchi so‘zlarni ajratib yangi massiv hosil qiling.
//  let strMass = ['olma', 'behi', 'gilos', 'sabzi', 'kartoshka', 'bodom', 'anjir', 'apple'];

const firstA = strMass.filter( item => {
    return item.slice(0, 1) == 'a';    // savolda faqat kichik 'a deb beribdi.
});
console.log(firstA);  // ['anjir', 'apple']

// 35. Faqat "gmail.com" bilan tugaydigan email manzillarini ajratib yangi massiv yarating.
let emails = ['salom.gmail.com', 'shokir ota','xato.gmail.com.bu' , 'birlashgan', 'nmagap.gmail.com', "qo'shqayron", 'chotkimi.gmail.com']
const emailAdress = emails.filter( item => {
    return item.slice(-10) == '.gmail.com';
});
console.log(emailAdress);

// 36. Massiv ichidagi 10 dan katta sonlarni ajratib, yangi massiv yarating.
const fromTenBig = nums.filter( item => {
    return item > 10;
});
console.log(fromTenBig);

// 37. Massiv ichidan true qiymatga ega elementlarni ajratib yangi massiv hosil qiling.
const truArr = arr.filter( item => {
    if(item) {return item};
});
console.log(truArr);

// 38. Foydalanuvchi kiritgan qiymatdan katta bo‘lgan barcha sonlarni ajratib, yangi massiv yarating.
let userSon = +prompt('Son kiriting');
const res2 = nums.filter( item => {
    if(item > userSon) {return item}
}) 
console.log(res2);

// 39. Faqat "uz" bilan tugaydigan domen nomlarini ajratib yangi massiv hosil qiling.
// let arr = [1, 2, 3, 4, 5, 'olma', 'behi', 'olxori', 'apple', 'uzum', 'bexruz'];
const lastUzDomen = arr.filter ( item => {
    if (typeof item == 'string' && item.slice(-2) == 'uz') {
        return item;
    }
})
console.log(lastUzDomen);  // bexruz

// 40. Massiv ichidagi faqat string ma’lumot turiga ega elementlarni ajratib yangi massiv hosil qiling.
const strAr = arr.filter( item =>{
    return typeof item == 'string';
});
console.log(strAr);

