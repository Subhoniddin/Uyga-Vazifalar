// 1. Uchta sonning faqat ikkitasi bir xil ekanligini aniqlang? 
let son = 4, son1 = 4, son2 = 9
if(son == son1 || son == son2 || son1 === son2) {
    console.log("ikkita son bir xil");
}

// 2. Son faqat 3 ga bo‘linadi va 5 ga bo‘linmaydi, deb chiqaring? 
if(son % 3 == 0 && son % 5 != 0) {
    console.log("3 ga bo'linsin 5 ga bo'linmaydi"); // Savol shartiga tushunmadim Uztoz !!
} 

// 3. Ikki sonning yig‘indisi 50 dan kichik bo‘lsa, "kifoya emas" deb chiqaring.
let mos = son + son1
if(mos < 50) {
    console.log("Kifoya emas");
}

// 4. Harorat 0 dan past yoki 35 dan yuqori bo‘lsa, "ekstremal sharoit" deb chiqaring.
let harorat = 36
if(harorat > 35 || harorat < 0) {
    console.log("extrimal sharoit");
}

// 5. Kiritilgan ikki sonning biri toq, ikkinchisi juft bo‘lsa, "turli turlilik" deb chiqaring.
if(son % 2 == 0 && son1 % 2 == 1 || son % 2 == 1 && son1 % 2 == 0) {
    console.log('turli turlilik');
 }

 // 6. Uch sonning yig‘indisi 100 dan katta, lekin 200 dan kichik bo‘lsa, "oraliqda" deb chiqaring.
 let res = son + son1 + son2
if(res > 100 && res < 200) {
    console.log("Oraliqda");
}

// 7. Foydalanuvchi yoshini 15 va 65 oralig‘ida ekanligini aniqlang.
let yosh = 20
if(yosh > 15 && yosh < 65) {
    console.log("Rost");
}

// 8. Uch sonning hammasi manfiy bo‘lsa, "hammasi manfiy" deb chiqaring.
if(son < 0 && son1 < 0 && son2 < 0) {
    console.log('Hammasi manfiy');
}

// 9. Foydalanuvchi kirgan sana hafta oxiriga to‘g‘ri kelsa, "dam olish kuni" deb chiqaring.
let sana = new Date
let today = sana.getDay();          // bugungi kunni qanday olish kerak shuni ko'rdim qolganini o'zim qildim.
if(today == 0 || today == 6) {
    console.log("Dam olish kuni");
}

// 10. Berilgan to‘rtta sonning faqat ikkitasining yig‘indisi 50 ga teng bo‘lsa, "mos juftlik" deb chiqaring.
let son3 = 5  // 3 ta son tepada bor doimgidek

/**    
if(son + son1 || son + son2 || son + son3 || son1 + son2 || son1 + son3 || son2 + son3) {  
    console.log("mos juftlik");                                        
}                                        // bu shartga to'liq javob bermas ekan.                                     
**/             
let counter = 0
if(son + son1 == 50) counter++
if(son + son2 == 50) counter++
if(son + son3 == 50) counter++
if(son1 + son2 == 50) counter++
if(son1 + son3 == 50) counter++
if(son2 + son3 == 50) counter++

if(counter == 1) {
    console.log("mos juftlik");     // shartni qanday tushunishga bog'liq bo'lsa kerak
}


// 11. Harorat 20 dan yuqori, lekin 30 dan kichik bo‘lsa, "ideal harorat" deb chiqaring.
if(harorat > 20 && harorat < 30) {
    console.log("ideal harorat");
}

// 12. Uch sonning faqat bittasi juft bo‘lsa, "faqat bitta juft" deb chiqaring.
if(son % 2 == 0 && son1 % 2 == 0 && son2 % 2 == 0) {
    console.log("faqta bitta juft");
}
// 12. To'grilangan
let evenCount = 0;
if (son % 2 == 0) evenCount++;
if (son1 % 2 == 0) evenCount++;
if (son2 % 2 == 0) evenCount++;

if (evenCount == 1) {
    console.log("Faqat bitta juft");
}

// 13. Foydalanuvchi kiritgan oy qish fasliga to‘g‘ri kelsa, "sovuq fasl" deb chiqaring.
let oy = 'Dekabr'
if(oy == "Dekabr" || oy == "Yanver" || oy == "Fevral") {
    console.log("sovuq fasl");
}

// 14. To‘rt sonning yig‘indisi juft bo‘lsa, "juft yig‘indi" deb chiqaring.
let juftSon = son + son1 + son2 + son3 
if (juftSon % 2 == 0) {
    console.log("juft yig'indi");
}

// 15. Ikki sonning biri 0 dan katta, ikkinchisi 0 dan kichik bo‘lsa, "turli ishoralar" deb chiqaring.
if(son < 0 && son1 > 0 || son > 0 && son1 < 0) {
    console.log("turli ishoralar");
}

// 16. Uch sonning yig‘indisi 60 dan oshsa, "normadan yuqori" deb chiqaring.
let uchSon = son + son1 + son2
if(uchSon > 60) {
    console.log("normadan yuqori");
}

// 17. Kiritilgan kun raqami hafta kunlari orasida bo‘lmasa, "notog‘ri kun" deb chiqaring.
let kun = 8
if(kun < 1 || kun > 7) {
    console.log("notogri kun");
}

// 18. Son 2 ga ham, 3 ga ham bo‘linmasa, "bo‘linmaydi" deb chiqaring.
if(son % 2 !== 0 && son % 3 !== 0) {
    console.log("bo'linmaydi");
}

// 19. Foydalanuvchi 25 dan katta, lekin 50 dan kichik son kiritsa, "qabul qilindi" deb chiqaring.
if(son > 25 && son < 50 ) {
    console.log("qabul qilindi");
}

// 20. Uch sonning hech bo‘lmaganda biri 5 ga bo‘linadigan bo‘lsa, "bo‘linish mavjud" deb chiqaring.
if(son % 5 == 0 || son1 % 5 == 0 || son2 % 5 == 0) {
    console.log("bo'linosh mavjud");
}

// 21. Ikki sonning biri musbat va ikkalasi yig‘indisi 100 dan katta bo‘lsa, "maqsadga erishildi" deb chiqaring.
let result = son + son1
if((son > 0 || son1 > 0) && result > 100) {
    console.log("maqsadga erishildi");
}

// 22. Foydalanuvchi 18 dan katta va 30 dan kichik yosh kiritsa, "yosh chekloviga mos" deb chiqaring.
if(yosh > 18 && yosh < 30) {
    console.log("yosh chekloviga mos");
} 

// 23. Kiritilgan to‘rtta sonning faqat ikkitasi teng bo‘lsa, "teng juftlik" deb chiqaring.

let tengcount = 0;           // faqat ikkita teng bo'lishi kerak men yozganim to'liq tekshirmas ekan yordam oldim!
                        
if (son == son1) tengcount++;
if (son == son2) tengcount++;
if (son == son3) tengcount++;
if (son1 == son2) tengcount++;
if (son1 == son3) tengcount++;
if (son2 == son3) tengcount++;

if (tengcount == 1) {
    console.log("teng juftlik");
} else {
    console.log("yoq");
}

// 24. Foydalanuvchi 0 dan katta, lekin 100 dan kichik qiymat kiritsa, "qabul qilinadigan qiymat" deb chiqaring.
let qiymat = 50
if(qiymat > 0 && qiymat < 100) {
    console.log("qabul qilinadigan qiymat");
}

// 25. Uch sonning yig‘indisi 200 dan oshsa yoki 100 ga teng bo‘lsa, "shart bajarildi" deb chiqaring.
let num = son + son1 + son2
if(num == 100 || num > 200) {
    console.log("shart bajarildi");
}

// 26. Ikki sonning biri 5 ga bo‘linadi va ikkalasi ham 50 dan kichik bo‘lsa, "maxsus shart" deb chiqaring.
if((son % 5 == 0 || son1 % 5 == 0) && son < 50 && son1 < 50) {
    console.log("maxsus shart");
}

// 27. Foydalanuvchi yil faslini kiritib, u kuz yoki bahor ekanligini aniqlang.
       // men bu savolga tushunmadim!!!
    let fasl = "Kuz"; 
    if (fasl == "Kuz" || fasl == "Bahor") { 
        console.log("Bu fasl kuz yoki bahor");
    }
                        


// 28. To‘rt sonning faqat biri juft bo‘lsa, "juftlik yakkasi" deb chiqaring.
let juft = 0
if(son % 2 == 0) juft++     // 23 savolda bu sintaksisni o'rgangan edim  shundan foydalandim. 
if(son1 % 2 == 0) juft++
if(son2 % 2 == 0) juft++
if(son3 % 2 == 0) juft++

if(juft == 1) {
    console.log("juftlik yakkasi");
}

// 29. Foydalanuvchi faqat musbat son kiritsa, "to‘g‘ri" deb chiqaring. (while bilan ishlanadi. ixriyoriy)


// 30. Ikki sonning faqat bittasi manfiy bo‘lsa, "yagona manfiy" deb chiqaring.
if(son < 0 && son1 > 0 || son > 0 && son1 < 0) {
    console.log("yagona manfiy");
}

// 31. Foydalanuvchi 50 dan katta, lekin 80 dan kichik son kiritsa, "oraliqda" deb chiqaring.
if(son > 50 && son < 80) {
    console.log("oraliqda");
}

// 32. Uchta sonning faqat bittasi 10 ga bo‘linadigan bo‘lsa, "bo‘linuvchan" deb chiqaring.
if(son % 10 == 0 || son1 % 10 == 0 || son2 % 10 == 0) {
    console.log("Bo'linovchan");
} 

// 33. Foydalanuvchi kiritgan ikki son yig‘indisi yoki ayirmasi musbat bo‘lsa, "mos natija" deb chiqaring.
let yiigindi = son + son1
let ayirma = son - son1
let ayirma1 = son1 - son
if(yiigindi > 0 || ayirma > 0 || ayirma1 > 0) {
    console.log("mos natija");
}

// 34. Harorat 10 dan past yoki 35 dan yuqori bo‘lsa, "noqulay sharoit" deb chiqaring.
if(harorat < 10 || harorat > 35) {
    console.log("noqulay sharoit");
}

// 35. Foydalanuvchi yilni kiritib, kabisa yili ekanligini aniqlang.
let yil = 2001
if(2001 % 4 == 0 && 2001 % 100 != 0) {
    console.log("kabisa yili taxminan");
}

// 36. Foydalanuvchi 0 dan katta, lekin 200 dan kichik bo‘lgan toq son kiritsa, "haqiqiy qiymat" deb chiqaring.
if(son > 0 && son < 200 && son % 2 == 0) {
    console.log("haiqiqiy qiymat");
}

// 37. Uch sonning faqat bittasi musbat bo‘lsa, "musbat yakkasi" deb chiqaring.
let musbat = 0
if(son > 0) musbat++     // 23 va 28 - savolda bu sintaksisni o'rgangan edim  shundan foydalandim. 
if(son1 > 0) musbat++
if(son2 > 0) musbat++

if(musbat == 1) {
    console.log("musbat yakkasi");
}

// 38. Ikki sonning biri juft, ikkinchisi toq bo‘lsa va yig‘indisi 30 ga teng bo‘lsa, "ideal juftlik" deb chiqaring.
if((son % 2 == 0 && son1 % 2 == 1 || son % 2 == 0 && son1 % 2 == 1) && son + son1) {
    console.log("ideal juftlik");
}

// 39. Foydalanuvchi kiritgan to‘rtta sonning hech bo‘lmaganda ikkitasining yig‘indisi 50 dan katta bo‘lsa, "mos juftlik" deb chiqaring.
if(son + son1 > 50 || son + son2 > 50 || son + son3 > 50 || son1 + son2 > 50 || son1 + son3 > 50 || son2 + son3 > 50) {  
    console.log("mos juftlik");                                        
}

// 40. Harorat 0 dan past bo‘lsa yoki 40 dan katta bo‘lsa, "ekstremal holat" deb chiqaring.
if(harorat < 0 || harorat > 40) {
    console.log("ekstrimal holat");
}


            //Ixtiyoriy masalalar                       // Ixtiyoriy masalalar

// 41. Foydalanuvchi 18 dan katta yosh kiritsa va yil faslini yoz deb aniqlasa, "yoshlar uchun qulay fasl" deb chiqaring.
if(son > 18 && fasl == 'yoz') {
    console.log("yoshlar uchun qulay fasl");
}


// 42. Uch sonning faqat ikkitasi musbat bo‘lsa, "juft musbat" deb chiqaring.
let musbatCounter = 0
if(son > 0) musbatCounter++
if(son1 > 0) musbatCounter++
if(son2 > 0) musbatCounter++
if(musbatCounter == 2) {
    console.log("juft musbat" );
}

// 43. Foydalanuvchi faqat juft son kiritganini aniqlang.
if(son % 2 == 0) {
    console.log("faqat juft son");
}

// 44. To‘rtta sonning faqat bittasi manfiy bo‘lsa, "yagona manfiy" deb chiqaring.
let manfiyCount = 0

if(son < 0) manfiyCount++
if(son1 < 0) manfiyCount++
if(son2 < 0) manfiyCount++
if(son3 < 0) manfiyCount++

if(manfiyCount == 1) {
    console.log("yagona manfiy");
}

// 45. Foydalanuvchi faqat 5 va 10 ga bo‘linadigan son kiritsa, "maxsus bo‘linish" deb chiqaring.
if(son % 5 == 0 && son % 10 == 0) {
    console.log("maxsus bo'linish");     
}

// 46. Foydalanuvchi faqat hafta kunini bildiruvchi raqam kiritsa, "ish kuni" deb chiqaring.
if(kun >= 1 && kun < 8) {
    console.log("ish kuni");
}

// 47. Foydalanuvchi 50 dan katta va juft son kiritsa, "katta va juft" deb chiqaring.
if(son > 50 && son % 2 == 0) {
    console.log("katta va juft");
}

// 48. Foydalanuvchi faqat bir xil ikki son kiritsa, "bir xil juftlik" deb chiqaring.
if(son == son1) {
    console.log("bir xil juftlik");
}

// 49. Harorat 15 dan yuqori, lekin 25 dan kichik bo‘lsa, "qulay sharoit" deb chiqaring.
if(harorat > 15 && harorat < 25) {
    console.log("qulay sharoit");
}

// 50. Foydalanuvchi faqat 100 dan katta, lekin 200 dan kichik son kiritsa, "ideal qiymat" deb chiqaring.
if(son > 100 && son < 200) {
    console.log("ideal qiymat");
}


       // Qo'shimcha gruppada berilgan masalalar.

// 51. Berilgan son 50 dan kichik yoki 100 dan katta ekanligini tekshiring.
if(son < 50 || son > 100) {
    console.log("shart bajarildi");
}

// 52. Foydalanuvchi kiritgan son musbat va 5 ga bo‘linadigan bo‘lsa, "mos" deb chiqaring.
if(son > 0 && son % 5 == 0) {
    console.log("mos");
}

// 53. Son juft yoki toq ekanligini tekshirish bilan birga, juft bo‘lsa "juft", toq bo‘lsa "toq" deb chiqaring.
if(son % 2 == 0) {
    console.log("juft");
} else {
    console.log('toq');
}

// 54. Kiritilgan son 25 va 75 orasida bo‘lsa, "oraliqda" deb chiqaring.
if(son > 25 && son < 75) {
    console.log("oraliqda");
}

// 55. Harorat 0 dan past va 30 dan katta bo‘lsa, "noto‘g‘ri qiymat" deb chiqaring.
if(harorat < 0 || harorat > 30) {
    console.log("notogri qiymat");
}

// 56. Haftaning kun raqami 1 yoki 7 bo‘lsa, dam olish kuni ekanligini aniqlang
if(kun == 1 || kun == 7) {
    console.log("dam olish kuni");
}

// 57. Berilgan ikki sonning yig‘indisi 50 dan katta bo‘lsa, "yig‘indi katta" deb chiqaring.
if(son + son1 > 50) {
    console.log("yigindi katta");
}

// 58. Son faqat musbat yoki nol bo‘lsa, "to‘g‘ri" deb chiqaring.
if(son >= 0) {
    console.log("togri");
}

// 59. Baholar 0 va 100 orasida ekanligini tekshiring.
let baho
if(baho >= 0 && baho <= 100) {
    console.log("oraliqda");
} 

// 60. Foydalanuvchi kiritgan son juft va 10 ga bo‘linadigan bo‘lsa, "mos" deb chiqaring.
if(son % 2 == 0 && son % 10 == 0) {
    console.log("mos");
}

// 61. Narx 0 dan katta bo‘lsa, "to‘g‘ri narx" deb chiqaring.
let narx
if(narx > 0) {
    console.log("togri narx");
}

// 62. Harorat -50 dan 50 orasida bo‘lsa, "muloqot" deb chiqaring.
if(harorat > -50 && harorat < 50) {
    console.log("muloqot");
}

// 63. Son faqat 7 ga bo‘linadigan bo‘lsa, "7 ko‘pkarasi" deb chiqaring.
if(son % 7 == 0) {
    console.log("yetti ko'p karrasi");
}

// 64. Son musbat, 3 ga va 5 ga bo‘linadigan bo‘lsa, "FizzBuzz" deb chiqaring.
if(son > 0 && son % 3 == 0 && son % 5 == 0) {
    console.log("FizzBuzz");
}

// 65. Kun raqami hafta kunlarining oxiri (7) ekanligini aniqlang.
if(kun == 7) {
    console.log("oxirgi kun");
}

// 66. Yilning ilk uch oyi ichida joylashgan oy ekanligini tekshiring.
if(oy == 'yanvar' || oy == 'fevral' || oy == 'mart') {
    console.log("yilning ilk uch oyidan biri");
}

// 67. Son 0 va 10 orasida bo‘lsa, "oraliqda" deb chiqaring.
if(son > 0 && son < 10) {
    console.log("oraliqda");
}

// 68. Haftaning kun raqami 1 dan 5 gacha bo‘lsa, ish kuni ekanligini aniqlang.
if (kun >= 1 && kun < 6) {
    console.log('ish kuni');
}

// 69. Foydalanuvchi yoshini 18 dan katta yoki teng ekanligini tekshiring
if(yosh >= 18) {
    console.log("tekshirildi");
}

// 70. Kiritilgan ikki sonning bir xil yoki turlicha ekanligini aniqlang.
if(son == son1) {
    console.log("bir xil");
} else {
    console.log("turlicha");
}

// 71. Baholar 90 dan yuqori bo‘lsa, "a'lo" deb chiqaring.
if(baho > 90) {
    console.log("a'lo");
}

// 72. Yil fasli bahor yoki yoz ekanligini aniqlang.
if(fasl == 'bahor' || fasl == 'yoz') {
    console.log("bahor yoki yoz");
}

// 73. Son 3 ning ko‘pkarasi yoki toq ekanligini aniqlang.
if(son % 3 == 0 || son % 2 == 1) {
    console.log("bajarildi");
}

// 74. Foydalanuvchi ismi "admin" bo‘lsa, "xush kelibsiz" deb chiqaring.
let ism = 'admin'
if(ism == 'admin') {
    console.log("Xush kelibsiz");
}

// 75. Kiritilgan qiymat 0 dan katta yoki 100 dan kichik bo‘lsa, "yaroqli" deb chiqaring.
if(son > 0 || son < 100) {   // faqat true qaytaradi. && ishlatish kerak oraliqni olish kerak. lekin shartda yoki degan.
    console.log("yaroqli");
}

// 76. Son faqat musbat bo‘lsa va 100 dan kichik bo‘lsa, "to‘g‘ri" deb chiqaring.
if(son > 0  && son < 100) {
    console.log("togri");
}

// 77. Harorat 10 dan past yoki 30 dan yuqori bo‘lsa, "noto‘g‘ri qiymat" deb chiqaring.
if(harorat < 10 || harorat > 30) {
    console.log("notogri qiymat");
}

// 78. Foydalanuvchi yoshini 0 dan katta va 120 dan kichik ekanligini tekshiring.
if(yosh > 0 && yosh < 120) {
    console.log("tekshrildi");
}

// 79. Son manfiy yoki 50 dan katta bo‘lsa, "mos emas" deb chiqaring.
if(son < 0 || son > 50) {
    console.log("mos emas");
}

// 80. Kiritilgan oy raqami fevral bo‘lsa, "maxsus oy" deb chiqaring.
let oyNum = 2
if(oyNum == 2) {
    console.log("maxsus oy");
}
      
                      // tugadi:    03.02.2025  22:59