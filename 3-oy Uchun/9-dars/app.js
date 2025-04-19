// Ushbu masalalar while hamda do…while yordamida ishlanadi

          // Oddiy masalalar
// 1 dan 10 gacha bo'lgan sonlarni ekranga chiqaruvchi dastur yozing.
let num = 1;
while(num <= 10) {
    console.log(num);
    num++
}

// 1 dan 100 gacha bo'lgan juft sonlarni ekranga chiqaruvchi dastur yozing.
let num1 = 1
while (num <= 100) {
    if(num % 2 == 0) {
        console.log(num);
    }
    num++
}

// 10 dan 1 gacha teskari tartibda sonlarni ekranga chiqaruvchi dastur tuzing.
let num2 = 10;
while (num2 >= 1) {
    console.log(num2);
    num2--
}

// Foydalanuvchi kiritgan musbat sonning raqamlari yig'indisini hisoblovchi dastur yozing.
let num3 = +prompt("Son kiriting")
let res = 0;
while (num3 >= 1) {
    res += num3 % 10
    num3 = Math.trunc(num3 / 10) 
}
console.log(res);

// Foydalanuvchi kiritgan manfiy sonni musbatga aylantirib ekranga chiqaring.
let num4 = -9
if(num4 < 0) {
    console.log(num4 * -1); // -1 ga ko'paysa sonni o'zi chiqadi ishora o'zgaradi.
}

//     Shartli masalalar

// Foydalanuvchi 0 kiritmaguncha kiritilgan sonlarni ekranga chiqaruvchi dastur yozing.
let num5 = +prompt("son kiriting")
while (num5 != 0) {
    console.log("son nolga teng emas");
    num5 = +prompt("Son kiriting")
} 

// 100 dan 999 oralig'idagi barcha uch xonali sonlarni chiqaruvchi dastur yozing.
for (let i = 100; i < 999; i++)  console.log(i);

// 1 dan 50 gacha bo'lgan toq sonlarni ekranga chiqaruvchi dastur tuzing.
for (let i = 1; i < 50; i++) {
    if(i % 2 == 1) console.log(i);
}

// Foydalanuvchi kiritgan sonning nechta raqamdan iborat ekanligini aniqlang.
let num6 = +prompt('Son kiriting')
let counter = 0
while(num6 >= 1) {
    num6 = Math.trunc(num6 / 10)
    counter++
}
console.log(counter); 

// 1 dan foydalanuvchi kiritgan songacha bo'lgan sonlar yig'indisini hisoblang.
let num7 = +prompt('Son kiriting')
let res1 = 0
for (let i = 1; i <= num7; i++) {
    res1 += i
}
console.log(res1);


     // Murakkabroq masalalar

// Foydalanuvchi kiritgan ikki son oralig'idagi barcha sonlarni ekranga chiqaring.
let start
let a = 1;
let b = 15; 
b === a ? start = false : start = true;
if(!start) console.log("Ikkala son bir xil");
if(a < b && start) {
    for (let i = a; i <= b; i++) {
        console.log(i);
    }
} else if(a > b && start) {
    for (let i = b; i <= a; i++) {
        console.log(i);
    }
}

// Foydalanuvchi kiritgan musbat sonning barcha bo'luvchilarini ekranga chiqaring.
let num8 = +prompt('Son kiriting')
if(num8 > 0) {
    for (let i = 1; i <= num8; i++) {
        if(num8 % i == 0) console.log(i);
    }
} else console.log("Iltimos musbat son kiriting!!");


// Foydalanuvchi kiritgan musbat sonning faqat toq raqamlarini ekranga chiqaring.
let num9 = +prompt('Son kiriting');
if(num9 > 0) {
    while(num9 >= 1) {
        if((num9 % 10) % 2 ==1)  console.log(num9 % 10);
        num9 = Math.trunc(num9 / 10);
    }
} else console.log("Iltimos musbat son kiriting");

// 1 dan 100 gacha bo'lgan sonlar orasida 3 ga bo'linadiganlarini ekranga chiqaring.
for (let i = 1; i <= 100; i++) {
    if(i % 3 == 0) console.log(i);
}

// Foydalanuvchi kiritgan musbat sonning eng katta raqamini aniqlang.
let num10 = 68427412591222
let max = 0
if(num10 > 0) {    // son musbat bo'lsagina ishlashi uchun. 
    while (num10 >= 1) {
        let son = num10 % 10
        num10 = Math.trunc(num10 / 10)
        if(max < son) {
            max = son
        }
    }
} else console.log("Iltimos musbat son kiriting!");
console.log(max);  // 9 ni chiqarib beradi.


          // Ushbu masalalar funksiyalar yordamida ishlanadi

    //  Oddiy masalalar:
// Berilgan sonning kvadratini hisoblovchi funksiya yozing.
function getKvadratNumber(num) {
    console.log(num ** 2);
}
getKvadratNumber(5)

// Berilgan sonning toq yoki juft ekanligini aniqlovchi funksiya yozing.
function toqJuft(num) {
    if(num % 2 == 0) {
        console.log("juft son");
    } else console.log("toq son");
}
toqJuft(9)

// Berilgan ikki sondan kattasini qaytaruvchi funksiya yozing.
function getNumberMax(son1, son2) {
    if(son1 > son2) {
        return son1        
    } else return son2
}
let max1 = getNumberMax(12, 55);
console.log(max1);

//  Manfiy sonni musbatga aylantiruvchi funksiya yozing.

function getMusbatNumber(num) {
    return num * -1
}
console.log(getMusbatNumber(-5));

// Berilgan sonning barcha raqamlarini qo'shib natija qaytaruvchi funksiya yozing.
function getNumbers(num) {
    let res = 0
    while (num >= 1) {
        res += num % 10
        num = Math.trunc(num / 10)
    }
    return res
} 
console.log(getNumbers(15213));


       // O'rta darajadagi masalalar:
// Berilgan sonni berilgan darajaga ko'taruvchi funksiya yozing.
function getDaraja(num, daraja) {
    console.log(num ** daraja);
}
getDaraja(3,4)


// Ikki son oralig'idagi barcha sonlar yig'indisini hisoblaydigan funksiya yozing.
function getYigindi(son1, son2) {
    let res = 0;
    if(son1 > son2) {
        for (let i = son2; i <= son1; i++) {
            res += i            
        }
    } else if(son1 == son2) {
        console.log("bu sonlar teng");
    } else  {
        for (let i = son1; i <= son2; i++) {
            res += i            
        }
    }
    if(res) console.log(res);
}
getYigindi(8,3)

// Berilgan sonning faktorialini hisoblovchi funksiya yozing.


// Berilgan sonning barcha bo'luvchilarini qaytaruvchi funksiya yozing.
function getBoluvchi(num) {
    for (let i = num; i <= 1; i--) {
        if(num % i == 0) console.log(i);
    }
}
getBoluvchi(8)

// Uchta son berilgan. Ularning eng kichigini aniqlaydigan funksiya yozing.
function getMinNUmber(son1, son2, son3) {
    let min = son1
    if (min > son2) {
        min = son2
        if(min > son3) min = son3;
    } else {
        if(min > son3) min = son3;
    }
    console.log("Eng kichigi",min);
}
getMinNUmber(1,8,6)


     // Murakkab masalalar:

// Berilgan sonning raqamlarini teskari tartibda chiqaruvchi funksiya yozing.
function getTeskarisi(num) {
    let res = ''
   while (num >= 1) {
    res += num % 10
    num = Math.trunc(num / 10)
   }
   console.log(res);
}
getTeskarisi(8896123)

// Berilgan ikki son orasidagi barcha to'liq kvadrat sonlarni chiqaruvchi funksiya yozing.
 function getKvadratNumber(son1, son2) {
    if(son1 > son2) {
        for (let i = son2; i <= son1; i++) {
           let ildiz = Math.sqrt(i);
           if(Number.isInteger(ildiz))  console.log(i);
        }
    }else if(son1 == son2) console.log("ikkala son teng"); else {
        for (let i = son1; i <= son2; i++) {
            let ildiz = Math.sqrt(i);
            if(Number.isInteger(ildiz))  console.log(i);        
        }
    }
 }
 getKvadratNumber(5, 100)
 

// 10 dan 99 oralig'idagi faqat raqamlari har xil bo'lgan sonlarni qaytaruvchi funksiya yozing.
function getXarhilNumber() {
    for (let i = 10; i <= 99; i++) {
        if(i % 11 == 0) continue        // raqamlari bir xillarini tashlab ketadi.
        console.log(i); // return qilsam birgina "i" chiqarkan massiv ishlatmadim endi kelamiz u mavzuga.
    }
}
getXarhilNumber()

// Berilgan sonning barcha toq bo'luvchilarini aniqlovchi funksiya yozing.
function getToqBolivchi(num) {
    for (let i = 1; i < num; i++) {
        if(i % 2 == 1 && num % i == 0) {
             console.log(i);
        }
    }
} 
getToqBolivchi(60)

// Foydalanuvchi kiritgan sonning raqamlari yig'indisini hisoblovchi funksiya yozing.
function getRaqamlar(son) {
    let res = 0;
    while (son >= 1) {
        res += son % 10 
        son = Math.trunc(son / 10)
    }
    console.log(res);
}
getRaqamlar(448)


         // Qo'shimcha murakkab masalalar:

// Foydalanuvchi kiritgan raqamlardan eng kichik toq sonni aniqlovchi funksiya yozing.
function getToqMinNumber(son) {
    let min = 10
    while (son >= 1) {
        let num = son % 10
        son = Math.trunc(son / 10)
        if(num % 2 == 1 ) {
            if(min > num) min = num;
        }
    }
    console.log(min);
}
getToqMinNumber(6515238)

// Sonning barcha raqamlari o'sish tartibida joylashganligini tekshiruvchi funksiya yozing.
function canSort(son) {
    let counter = 0;
    let raqam2 = 10
    while (son >= 1) {
        let raqam1 = son % 10
        son = Math.trunc(son / 10)
        if(raqam2 > raqam1) {
            raqam2 = raqam1
         } else {
            counter++;
            console.log("O'sish tartibida emas");
            return;
        }
    }
    if(!counter) console.log("O'sish tartibida joylashgan");   // metodlardan foydalanish yaxshi lekin faqat 
}                                                              // darsda o'tgan blimlar bilan chiqarishga harakat qildim.       
canSort(1234254)

// Son ichidagi raqamlarning nechta juft va nechta toq ekanligini aniqlang.
function toqJuftSome(son) {
    let toq = 0
    let juft = 0
    while (son >= 1) {
        let num = son % 10
        son = Math.trunc(son / 10)
        if( num % 2 == 0) {
            juft++
        } else  toq++
    }
    console.log("toq: ", toq, " Juft: ", juft);
} 
toqJuftSome(49852)

// Berilgan sonning faqat juft raqamlarini qo'shib natijani qaytaruvchi funksiya yozing.
function toqJuftSome1(son) {
    let juft = 0
    while (son >= 1) {
        let num = son % 10
        son = Math.trunc(son / 10)
        if( num % 2 == 0)  juft += num
    }
    console.log(juft);
} 
toqJuftSome1(49852)

// Berilgan sonning eng katta raqamini qaytaruvchi funksiya yozing.
function getMaxNumber(num) {
    let max = 0
    while (num >= 1) {
        let katta = num % 10
        if(max < katta) {
            max = katta
        } 
        num = Math.trunc(num / 10)
    }
    console.log(max);
}
getMaxNumber(148322)