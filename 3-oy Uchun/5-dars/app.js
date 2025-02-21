
let son 

// Musbat manfiy
if(son > 0) {
    console.log("Musbat");
} else {
    console.log("manfiy");
}

// Juft Toq
if(son % 2 == 0) {
    console.log("Juft");
} 
if(son % 2 == 1) {
    console.log("Toq");
}

// Kattasini topish son1 va son2
let son1, son2
if(son1 > son2) {
    console.log(son1, katta);
} else {
    console.log(son2, katta);
}

// son1 va son2 tenmi?
if(son1 == son2) {
    console.log("Ha teng");
} else {
    console.log("Yo'q teng emas");
}

// Baholash
let baho =  Math.floor(Math.random() * 100)
if(baho > 80) {
    console.log("Bahoyingiz 'A' ");
} else if(baho > 80 && baho < 90) {
    console.log("Bahoyingiz 'B' ");
} 

// Kabisa yili   Kabisa yili haqida menda malumot yo'q shunga chatgtp dan yordam oldim
let yil
if(yil % 4 == 0) {
    if(yil % 100 !== 0) {
        console.log("kabisa yili");
    } else {
        if(yil % 400 == 0) {
            console.log("Kabisa yili");
        }else {
            console.log("Kabisa yili emas");
        }
    }
} else {
    console.log("kabisa yili emas");
} 

// Yosh status
let yosh
if(yosh < 12){
    console.log("Bolakay");
}else if(yosh > 12 && yosh < 19){
    console.log("O'smir"); 
}else{
    console.log("Katta yoshdagi odam");
}

// Uchta sondan kattasini aniqlash
let son3 // son1 & son2 & son3
let max  // katta son
if(son1 > son2) {
    max = son1
}else{
    max = son2
}
if(max < son3) {
    max = son3
}
console.log(max); // Katta son chiqadi.

// ob-havo
let harorat 
if(harorat < 0) {
    console.log("Sovuq");
}else if(harorat > 30){
    console.log("Issiq");
    
}


// Son kiriting
let num = +prompt("Son kiriting")
if(isNaN(num)) {
    console.log("Son emas");
}
if(num === 0) {
    console.log("Son emas")
}

// 5 ga bo'lish
if(son % 5 == 0) {
    console.log("Bo'linadi");
}

// Harorat mezoni
if(harorat > 15 && harorat < 25) {
    console.log("Ideal harorat");
}

// Tugilgan
if(yil < 2000) {
    console.log("Eski avlod");
}

// yosh tavsiyasi
if(yosh < 18) {
    console.log("Yoshlarga tavsiya");
}
if(yosh > 60) {
    console.log("Keksalarga tavsiya");
}

// ism uzunligi
let ism = 'anvar'
if(ism.length < 5) {
    console.log("Qisqa ism");
}

// yaroqli son
if(son >= 0) {
    console.log("yaroqli son");
}

// teng sonlar
if(son1 == son2) {
    console.log("teng juftlik");
}

// oxiri 0 bilan tugasa
if(son % 10 == 0) {
    console.log("Nol bilan tugaydi");
}

// 1. Parolda maxsus belgilar borligini tekshirish  // Chatgtp  sabab methodlar o'tganim yo'q darsda
let password = prompt("Parol kiriting:");
if (password.includes("!") || password.includes("@") || password.includes("#") || 
    password.includes("$") || password.includes("%") || password.includes("^") || 
    password.includes("&") || password.includes("*")) {
    console.log("Maxfiy belgilar bor");
}

// Bahor oyi
let oy
if (oy === 3 || oy === 4 || oy === 5) {
    console.log("Bahor");
}

// Toq & juft   tepada ham shunaqa savol bor
if (num % 2 === 0) {
    console.log("Juft son");
} else {
    console.log("Toq son");
}

// 10 da kichik sonlar
if (num < 10) {
    console.log("Kichik son");
}

// Matn .com bilan tugashini tekshirish  // Chat gtp sabab qidiruvga aloqador narsa ko'rmadik hali
let text = prompt("Matn kiriting:");
if (text.endsWith(".com")) {
    console.log("Web sayt");
}

// Soz kiritsa
let soz = 'frontend'
if(soz == 'frontend' || soz == 'backend') {
    console.log("Dasturchi");
}

if(soz == 'Uzbek') {
    console.log("Assalamu alaykum");
}

// 3 ga bo'linadimi
if(son % 3 == 0) {
    console.log("bo'linadi");
}

//probelni tekshirish
soz = 'birikki'
if(soz.includes(' ')) {
    console.log("probel bor");
}else{
    console.log("probel yo'q");
}

// kvadrat son
son = 4.5 
if(son**2 % 2 == 0) {
    console.log("Kvadrat son");
}

// Tun & kun
let soat 
if(soat > 6 && soat < 18) {
    console.log("Kunduzi");
}else{
    console.log("Tun");
}

// Yaroqli son qaytarilgan savol
// yuqorida bajarilgan

// Matn uzunligi
let matn = 'salom hammaga bu matn uzun bolishi uchun yozdm 1 2 3'
let res = matn.split(' ')
if(res.length > 10) {
    console.log("Uzun matn");
} 

// Ikki raqam teng bo'lsa 
if(son1 == son2) {
    console.log("Bir xil raqam");
}

// Ism A bilan boshlansa 
let name = 'Anvar'
if(name[0] == 'A'){
    console.log("A bilan boshlangan ism");
}

// Yo‘l harorati tavsiyasi:
let yol = 0
if(yol < 0) {
    console.log("yo'lda ehtiyot bo'ling");
}

// Ikki matn bir xil ekanligini tekshirish:
let matn1, matn2
if(matn1 === matn2) {
    console.log("matn bir xil");
}

// bu ikkala savolni ishlolmadim sabab buni o'tkanimiz yo'q hali

// Parol tarkibida katta harf borligini aniqlash: Agar parolda katta harf bo‘lsa, “Yaroqli parol” deb chiqaring.
// Yozilgan raqamning teskarisini aniqlash: Son teskarisi musbat bo‘lsa, “Musbat teskari” deb chiqaring.


// Harorat qanchalik xavfli ekanligi: 35 dan yuqori bo‘lsa, “Xavfli issiq!” deb chiqaring.
if (harorat > 35) {
    console.log("Xavfli issiq!");
}

// Raqamlar nisbiy qiymati: Birinchi son ikkinchisidan katta bo‘lsa, “Katta son” deb chiqaring.
if (son1 > son2) {
    console.log("Katta son");
}

// Ism oxiri “bek” bilan tugashi: Ism “bek” bilan tugasa, “Bekli ism” deb chiqaring.
if (ism.endsWith("bek")) {
    console.log("Bekli ism");
}

// Sonning teskarisi musbat ekanligini aniqlash: Teskarisi musbat bo‘lsa, “Musbat teskarilik” deb chiqaring.
if (-son > 0) {
    console.log("Musbat teskarilik");
}


// Yilning faslini aniqlash: Oy raqami asosida faslni aniqlang.
let oyNum
if(oyNum < 4 && oyNum == 12) {
    console.log("Qish");
} else if(oyNum > 3 && oyNum < 6) {
    console.log("Bahor");
}else if(oyNum > 5 && oyNum < 9) {
    console.log("Yoz");
}else if(oyNum > 8 && oyNum < 12) {
    console.log("Kuz");
}


// Kiritilgan raqam yillik chegara: Raqam 2025 dan yuqori bo‘lsa, “Kelajak yili” deb chiqaring.
if(yil > 2025) {
    console.log("Kelajak yili");
}

