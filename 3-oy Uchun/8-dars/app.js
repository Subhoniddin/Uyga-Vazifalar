// 1. 10 dan 100 gacha bo'lgan sonlarning 2ga bo'linadiganlarini va 3ga bo'linadiganlarini chiqaruvchi dastur yozing.
for (let i = 10; i <= 100; i++) {
    if( i % 2 == 0 && i % 3 == 0) {
        console.log("2ga va 3ga bo'linadigan sonlar:", i);
    }
}

// 2. 20 dan 50 gacha bo'lgan sonlarning faqat 5ga bo'linadiganlarini chiqaruvchi dastur yozing.
for (let i = 20; i <= 50; i++) {
    if(i % 5 == 0) console.log(i);
}

// 3. 1 dan 100 gacha bo'lgan sonlarning kvadratlarining yig'indisini hisoblang.
let res = 0
for (let i = 1; i <= 100; i++) {
   res += i**2
}
console.log(res);

// 4. 1 dan 50 gacha bo'lgan sonlarning kublarini chiqaruvchi dastur yozing.
for (let i = 1; i < 50; i++) {
    console.log(i ** 3);
}

// 5. 10 dan 100 gacha bo'lgan sonlarning juft yoki toqligini tekshirib, ikkisini ajratib ko'rsating.
for (let i = 10; i <= 100; i++) {
    if(i % 2 == 0) {
        console.log("Juft sonlar:", i);
    } else {
        console.log("Toq sonlar:", i);
    }
}

// 6. 5 dan 100 gacha bo'lgan barcha sonlarning yig'indisini hisoblang, lekin 7ga bo'linadiganlarni hisoblashdan chetlang.
let res2 = 0
for (let i = 5; i <= 100; i++) {
    if(i % 7 !== 0) {
        res2 += i
    }    
}
console.log(res2);

// 7. 50 dan 150 gacha bo'lgan sonlarning faqat juftlarini chiqaruvchi dastur yozing.
for (let i = 50; i <= 150; i += 2) {
    console.log(i);
}

// 8. 1 dan 100 gacha bo'lgan sonlarning ko'paytmalarini toping va 10000dan kichik bo'lsa, natijani ekranga chiqaruvchi dastur yozing.
let res3 = 1
for (let i = 1; i <= 100; i++) {
    res3 *= i
}
if (res3 < 10000) {
    console.log(res3);
}

// 9. 1 dan 100 gacha bo'lgan sonlarning 6ga bo'linadiganlarini ekranga chiqaruvchi dastur yozing.
for (let i = 1; i <= 100; i++) {
    if(i % 6 == 0) console.log(i);
}

// 10. 1 dan 50 gacha bo'lgan sonlar uchun ular juftmi yoki toqmi ekanligini aniqlab chiqaruvchi dastur yozing.
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log("Juft:", i);
    } else {
        console.log("toq:", i);
    }    
}

// 11. 1 dan 1000 gacha bo'lgan sonlar orasida faqat 4, 5 va 7ga bo'linadigan sonlarni toping va ularning yig'indisini hisoblang.
let res4 = 0;
for (let i = 1; i <= 1000; i++) {
    if(i % 4 == 0 && i % 5 == 0 && i % 7 == 0) {
        res4 += i
    }
}
console.log(res4);

// 12. 1 dan 10000 gacha bo'lgan sonlar orasida faqat 6ga bo'linadigan va 8ga bo'linmaydigan sonlarni chiqarib, ularning kvadratlarini hisoblang.
for (let i  = 1; i <= 10000 ; i++) {
    if(i % 6 == 0 && i % 8 != 0) {
        console.log(i ** 2);
    }
}

// 13. 100 dan 2000 gacha bo'lgan sonlar orasida faqat 9ga bo'linadigan va 5ga bo'linadigan sonlarni chiqarib, ularning yig'indisini hisoblang.
let res5 = 0
for (let i = 100; i < 2000; i++) {
    if(i % 9 == 0 && i % 5 == 0) {
        res5 += i;
    }
}
console.log(res5);

// 14. 1 dan 1000 gacha bo'lgan sonlar orasida faqat 2ga, 3ga va 5ga bo'linadigan sonlarni toping va ularning kubiklarini hisoblang.
for (let i = 1; i <= 1000; i++) {
    if(i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
        console.log(i ** 3);
    }     
}

// 15. 1 dan 10000 gacha bo'lgan sonlar orasida 3ga bo'linadigan, 4ga bo'linadigan va 5ga bo'linmaydigan sonlarning yig'indisini hisoblang.
let res6 = 0
for (let i = 1; i <= 10000; i++) {
    if(i % 3 == 0 && i % 4 == 0 && i % 5 != 0) {
        res6 += i
    }   
}
console.log(res6);

// 16. 100 dan 10000 gacha bo'lgan sonlar orasida faqat 2ga bo'linadigan va 6ga bo'linmaydigan sonlarni chiqarib, ularning kubiklarini hisoblang.
for (let i = 100; i < 10000; i++) {
    if (i % 2 == 0 && i % 6 != 0) {
        console.log(i ** 3);
    }    
}

// 17. 1 dan 10000 gacha bo'lgan sonlar orasida 3ga bo'linadigan, 7ga bo'linadigan va 10ga bo'linmaydigan sonlarni ajrating va ularning kvadratlarini hisoblang.
for (let i = 1; i < 10000; i++) {
    if(i % 3 == 0 && i % 7 == 0 && i % 10 != 0) {
        console.log(i ** 2);
    }    
}

// 18. 1 dan 10000 gacha bo'lgan sonlar orasida faqat 3ga bo'linadigan va 6ga bo'linadigan sonlarning yig'indisini hisoblang, lekin 2000dan katta bo'lsa, "Katta" deb chiqaring.
let res7 = 0
for (let i = 1; i < 10000; i++) {
    if(i % 3 == 0 && i % 6 == 0) {
        res7 += i
    }    
}
res7 > 2000 ? console.log(res7, "katta") : console.log(res7); // mantiqan lekin deganda qaysini nazarda tutdi tushunmadim!
console.log(res7);

// 19. 1 dan 10000 gacha bo'lgan sonlardan faqat 4, 5, va 8ga bo'linadigan sonlarni chiqarib, ularning ko'paytmasini hisoblang.
let res8 = 1n;
for (let i = 1n; i < 10000n; i++) {
    if(i % 4n == 0 && i % 5n == 0 && i % 8n == 0) {
        res8 *= i
    }   
}
console.log(res8); //  oddiy holatda infiniti  10582401321138112386864960762427511696023005039718081447624072661092454912672887218666104999928208675535871868912470101296293319748383387379637866595732290897872110854028439593860721796513151918776357785786942225414545204804372094682693071122968982735526508777829470595187537298654967838509542841490003118127572323786203928801722449818695087570697738884883733130967844928655931683599658008685967123046624331720100859329529429339695058103772703294198666270003792372175746271156912844768740351041175856161231765801598748619940789048805798326168398986320962455820271818097556024249548800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n

// 20. 1 dan 10000 gacha bo'lgan sonlardan faqat 2ga, 3ga, va 6ga bo'linadigan sonlarni toping va ularning kvadratlarini hisoblang.
for (let i = 1; i < 10000; i++) {
    if(i % 2 == 0 && i % 3 == 0 && i % 6 == 0) {
        console.log(i ** 2);
    }   
}

// 21. 1 dan 10000 gacha bo'lgan sonlardan faqat 4ga bo'linadiganlarni chiqarib, ularning yig'indisini hisoblang va natijani 10000dan kichik bo'lsa, ekranga chiqarish.
let res9 = 0;
for (let i = 1; i < 10000; i++) {
    if(i % 4 == 0) {
        res9 += i
    }    
}
res9 < 10000 ? console.log(res9) : console.log();

// 22. 1 dan 5000 gacha bo'lgan sonlar orasida faqat 9ga bo'linadigan, 5ga bo'linadigan va 7ga bo'linmaydigan sonlarni chiqarib, ularning ko'paytmasini hisoblang.
let res10 = 1;
for (let i = 1; i < 5000; i++) {
    if(i % 9 == 0 && i % 5 == 0 && i % 7 != 0) {
        res10 *= i
    }    
}
console.log(res10); // Infinity

// 23. 1 dan 5000 gacha bo'lgan sonlardan faqat 2ga, 3ga va 4ga bo'linadigan sonlarni toping va ularning yig'indisini hisoblang, 10000dan katta bo'lsa, "Boshqa" deb chiqaring.
let res11 = 0;
for (let i = 1; i < 5000; i++) {
    if(i % 2 == 0 && i % 3 == 0 && i % 4 == 0) {
        res11 += i
    }    
}
res11 > 10000 ? console.log(res11, "Boshqa") : console.log(res11);

// 24. 1 dan 10000 gacha bo'lgan sonlar orasida 7ga bo'linadigan, 6ga bo'linadigan va 10ga bo'linmaydigan sonlarni chiqarib, ularning kvadratlarini hisoblang.
for (let i = 1; i < 10000; i++) {
    if(i % 7 == 0 && i % 6 == 0 && i % 10 != 0) {
        console.log(i ** 2);
    }    
}

// 25. 1 dan 5000 gacha bo'lgan sonlar orasida faqat 3ga, 4ga va 6ga bo'linadigan sonlarni ajrating va ularning kubiklarini hisoblang.
for (let i = 1; i < 5000; i++) {
    if(i % 3 == 0 && i % 4 == 0 && i % 6 == 0) {
        console.log(i ** 3);
    }    
}

