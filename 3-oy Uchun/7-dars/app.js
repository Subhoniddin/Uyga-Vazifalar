  //      Ternary Operatorga Oid 5 Masala

// 1. Foydalanuvchi kiritgan son musbat bo‘lsa, "Musbat" aks holda "Manfiy" deb chiqaruvchi shart yozing.
let num = 5
num > 0 ? console.log("musbat") : num == 0 ? console.log("no'l") : console.log("manfiy");

// 2. Foydalanuvchi 18 yoshga yetgan bo‘lsa, "Ruxsat berilgan" aks holda "Ruxsat berilmagan" deb chiqaruvchi shart yozing.
let yosh = 18
yosh >= 18 ? console.log("Ruxsat berilgan") : console.log("Rixsat berilmagan");

// 3. Harorat 0 darajadan past bo‘lsa "Sovuq", 0 va undan yuqori bo‘lsa "Iliq" deb chiqaruvchi shart yozing.
let harorat = 5
harorat >= 0 ? console.log("Iliq") : console.log("Sovuq");

// 4. Kiritilgan son juft bo‘lsa "Juft", aks holda "Toq" deb chiqaruvchi shart yozing.
let son = 8;
son % 2 == 0 ? console.log("Juft") : console.log("toq");

// 5. Kiritilgan soat 12 dan kichik bo‘lsa "Ertalab", 12 va undan katta bo‘lsa "Kechki payt" deb chiqaruvchi shart yozing.
let soat = 11;
soat < 12 ? console.log("Ertalab") : console.log("Kechki payt");

 
     //    switch...case ga oid 3 Masala

// 1. Foydalanuvchi haftaning kunini raqam sifatida kiritganda (1 - Dushanba, 2 - Seshanba...) shu kunga mos nomni chiqaruvchi shart yozing.
let day = 5;
switch (day) {
    case 1:
        console.log("Yakshanba");
        break;
    case 2:
        console.log("Dushanba");
        break;  
    case 3:
        console.log("Seshanba");
        break;
    case 4:
        console.log("Chorshanba");
        break; 
    case 5:
        console.log("Payshanba");
        break;  
    case 6:
        console.log("Juma");
        break;
    case 7:
        console.log("Shanba");
        break;                                         
    default:
        console.log("Bunday hafta kuni yo'q");
        break;
}

// 2. Foydalanuvchi oy raqamini kiritganda (1 - Yanvar, 2 - Fevral...) shu oy nomini chiqaruvchi shart yozing.
let oy = 5;
switch (oy) {
    case 1:
        console.log("yanvar");
        break;
    case 2:
        console.log("fevral");
        break;  
    case 3:
        console.log("mart");
        break;
    case 4:
        console.log("aprel");
        break; 
    case 5:
        console.log("may");
        break;  
    case 6:
        console.log("iyun");
        break;
    case 7:
        console.log("iyul");
        break;   
    case 8:
        console.log("avgust");
        break;
    case 9:
        console.log("sentabr");
        break;  
    case 10:
        console.log("oktabr");
        break;
    case 11:
        console.log("Noyabr");
        break; 
    case 12:
        console.log("Dekabr");
        break;                                        
    default:
        console.log("Bunday oy yo'q");
        break;
}

// 3. Foydalanuvchi baho kiritganda (1 - "Yomon", 2 - "Qoniqarli", 3 - "Yaxshi", 4 - "A'lo") mos baho nomini chiqaruvchi shart yozing.
let baho = 4
switch (baho) {
    case 1:
        console.log("Yomon");
        break;
    case 2:
        console.log("Qoniqarli");
        break;
    case 3:
        console.log("Yaxshi");
        break;
    case 4:
        console.log("A'lo");
        break;
    default:
        console.log("Mezonda ko'rsatilmagan baho");
        break;
}


       //  Type Conversionga oid 5 Masala

// 1. Foydalanuvchi kiritgan satrni butun songa aylantirib, uni ikki barobarga oshiring.
let strSon = '50'
let res = Number(strSon) * 2
console.log(typeof res, res);  //Number,  100

// 2. Foydalanuvchi kiritgan sonni satrga aylantirib, uning uzunligini toping.
let strToNum = 60;
console.log(strToNum.toString().length);

// 3. Foydalanuvchi kiritgan "true" yoki "false" qiymatini raqamga aylantirib, chiqaruvchi shart yozing.
let userT = false;
console.log(Number(userT));

// 4. Har qanday satr qiymatini mantiqiy turga o‘tkazib, "true" yoki "false" ekanligini aniqlang.
let str = 'adscdj'
console.log(Boolean(str));

// 5. Foydalanuvchi kiritgan son qiymatini satrga aylantirib, oxiriga " dollari" qo‘shib chiqaring.
let son1 = 12;
let result = son1 + ' dollari'
console.log(result);


           //  for Sikl Operatoriga Oid 5 Masala
// 1. 1 dan 10 gacha bo'lgan sonlarni chiqaruvchi sikl yozing.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. 10 dan 1 gacha bo‘lgan sonlarni kamaytirish tartibida chiqaruvchi sikl yozing.
for (let i = 10; i > 0 ; i--) {
    console.log(i);
}

// 3. Faqat juft sonlarni 1 dan 20 gacha chiqaruvchi sikl yozing.
for (let i = 2; i <= 20; i+=2) {
    console.log(i);
}

// 4. 5 dan 50 gacha bo‘lgan sonlarning faqat toqlarini chiqaruvchi sikl yozing.
for (let i = 5; i <= 50; i += 2) {
    console.log(i);
}

// 5. 1 dan 10 gacha bo‘lgan sonlarning yig‘indisini topuvchi sikl yozing.
let yigindi = 0
for (let i = 1; i <= 10; i++) {
    yigindi += i
}
console.log(yigindi);


      // if da Mantiqiy Operatorlarga Oid 10 Masala

// 1. Foydalanuvchi kiritgan son 0 dan katta va 100 dan kichik bo‘lsa, "To‘g‘ri diapazon" deb chiqaruvchi shart yozing.
if(son > 0 && son < 100){
    console.log("Togri diapazon");
}

// 2. Harorat 0 dan kichik yoki 40 dan katta bo‘lsa, "Ehtiyot bo‘ling" deb chiqaruvchi shart yozing.
if(harorat < 0 || harorat > 40) {
    console.log("Ehtiyot bo'ling");
}

// 3. Foydalanuvchi kiritgan son musbat emas bo‘lsa, "Musbat emas" deb chiqaruvchi shart yozing.
if(son < 0) {
    console.log("Musbat emas");
}

// 4. Foydalanuvchi 18 yoshga yetgan va haydovchilik guvohnomasi mavjud bo‘lsa, "Mashina haydashingiz mumkin" deb chiqaruvchi shart yozing.
let isPrava = true;
if(yosh >= 18 && isPrava){
    console.log("Mashina haydashingiz mumkin");
}

// 5. Foydalanuvchi kiritgan son juft yoki 0 ga teng bo‘lsa, "Juft yoki nol" deb chiqaruvchi shart yozing.
if(son % 2 == 0){
    console.log("Juft");
}else if (son == 0) {
    console.log("nol");
}

// 6. Foydalanuvchi kiritgan ikki son bir-biriga teng emas bo‘lsa, "Turlicha sonlar" deb chiqaruvchi shart yozing.
if(son !== son1) {
    console.log("Turlicha sonlar");
}

// 7. Foydalanuvchi 5 yoki 10 ni kiritgan bo‘lsa, "Maxsus son" deb chiqaruvchi shart yozing.
if (son == 5 || son == 10) {
    console.log("Maxsus son");
}

// 8. Foydalanuvchi haftaning kunini kiritganda, bu kun dam olish kuni yoki ish kuni ekanligini aniqlang.
let kun = 7
if (kun < 1 || kun > 7){
    console.log("bunday hafta kuni yo'q");
}
if (kun > 1 && kun < 7){
    console.log("ish kuni");
}
if (kun == 1 || kun == 7) {
    console.log("dam olish kuni");
}

// 9. Son 1 dan katta va 50 dan kichik emas bo‘lsa, "To‘g‘ri emas" deb chiqaruvchi shart yozing.
if(son > 1 && son >= 50) {
    console.log("Togri emas");
}

// 10. Foydalanuvchi uch xil son kiritganda, ulardan hech biri bir-biriga teng emasligini tekshiring.
let son2
if(son != son1 && son != son2 && son1 != son2) {
    console.log("Bir biriga teng emas");
}


