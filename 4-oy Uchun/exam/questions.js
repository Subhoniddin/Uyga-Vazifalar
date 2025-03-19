// - Objectlardan ma'lumot olishda . notation hamda [] bracket notationlarning nima farqi bor?
    /* . da kod qisqa tushunarli [] bilan ozgaruvchidan qiymat kelsa keyda maxsus belgilar yokida bo'sh joy bo'ladigan bo'lsa . notation ishlamaydi shunda [] ishlatiladi*/
    
// - Sizda ikki sonning yig'indisini qaytaradigan funksiya bor. Siz shu funskiyani tashqarida ham ishlatmoqchisiz. Shuni CommonJS modulida ko'rsatib bering
export function calc(son1, son2) {
    return son1 + son2;
};   // app.js da ishlatib ko'rdim

// -IIFE nima va u nima uchun ishlatilingan?
/* darrov chaqirilgan funcsiya yani chaqirilgan funcsiya (function())(), O'zi funcsiya lekin doim chaqirilgan xolatta turadi nimaga ishlatilingan: Bu narsa var degan o'zgaruvchiga scope sifatida ishlatilgan chunki var shu skopdi tanidi va uni ichidan bo'lsa glabal xolatga tasir qilmaydi */

// -reduce() metodini to'liq tushuntirib beringki menda reduce() bo'yicha savol qolmasin.
let arr = [1, 2, 3, 4, 5];
let newArr = arr.reduce((value, elament, index, arr) => {
   return elament + value
  //return 150
}, 0);
console.log(arr); // asil massiv o'zgarmaydi
console.log(newArr);
/* reduce bu: Massivni har bir elamenti bo'yicha aylanib chiqadi bu yerda alament arr ning har bir elamentiga teng. value (ixtiyoriy nomlash mumkin) bu reduce ni ichidan return bo'lgan qiymat. Undan oldin boshlang'ich qiymatini belgilash mumkin callbackdan keyin ikkinchi qiymat sifatida agar berilmasa avtomatik arrni birinchi elamentini boshlang'ich yani birinchi qiymat qilib oladi. endi Xoxlagan maqsdingizda ishlating uni sintaxsis ishlashi shunaqa.*/

// -callback nima?
function foo(callback) {
    callback();
};
/* funksiyaga argumrnt sifatida berilgan funksiya callback misolda funcsiya argumenti ichida () orqali func sifatda chaqirilmoqda*/

// -impure funksiya yozib bering
function impure(a) {
    let b = Math.floor(Math.random() * 10);
    return a + b;
};
console.log(impure(5)); // 5
console.log(impure(5)); // 10
/* bir xil qiymat berilsa ham xar xil natija qaytaryapto*/ 

// -Object entries nima?
    /* bu objni arrayga otkazib beradi har bir key: value juftligini alohida qilib bitta arr ga joylaydi arr methodlaridan foydalanish.*/ 

// -pipe funksiya yozing.
function pipe(value, ...funcs) {
    return funcs.reduce((value, func) => func(value), value);
};
pipe("boshlangich qiymat", "bu yerda birnechta funcsiyalarni qabul qiladi");
/* argument sifatida bir nechta funcsiya qabul qiladi va bir funcsiyaning natijasi ikkinchisiga uzatiladi */

// -berilgan stringdan barcha bo'sh joylarni olib tashlasin va uning lengthini o'lchasin agar length toq bo'lsa 0 agar juft bo'lsa 1ni qaytarsin.
let str = "sa sa dj jcn  jjn  j";
function noSpace(str) {
    str.replaceAll(" ", "")
    if(str.length % 2 == 0) {return 1} else {return 0};
}; 
console.log(noSpace(str));

// -multiply nomli infinity curry yozing.
function multiply(num) {
    let p = num;
    return function calc(num2) {
        if(num2 === undefined) {
            return p;
        } else {
            p *= num2;
            return calc;
        }
    }
};
console.log(multiply(2)(2)(2)());

// -setTimeout va setInterval farqlarini tushuntirib bering.
    /* setTimeout bu bir callback belgilangan vaqt tugagach bir marotaba chaqiriladi setInterval esa har belgilangan vaqtda qayta qayta chaqirilaveradi  */

// -var let const farqlarining tushuntiring
    /* var eski usul va local scopda ishlaydi block scopni tanimedi, var va letni qiymatini ozgartirsa bo'ladi constda bundan bo'lmaydi, varni o'zidan yuqorida ishlatilishi xatolik bermaydi let va constda xatolik TDZ */ 

// - functionsga berilgan barcha argumentlarni qanday olish mumkin?
    function foo() {
        console.log(arguments); // bu yerda arguments bu obj.   
    };
    foo(1, 2, 3, 4, 5);
// - arrow function hamda function declarationni farqi nimada ?
    /* function calit so'zni yozish shart emas, this kalit so'z undefinet, o'zidan yuqorida chaqirib bo'lmaydi, arguments argumentlarni olish ham ishlamaydi*/

// - break va continue farqi nimada ?
    /* break bu to'xtatish yani breakni ko'rgan jarayon to'xtaydi continue ko'rganda keyingi shart davom etib ketadi to'xtab qolmaydi*/

// - RegExp ishlatishning 2 xil sintaksi va ularning farqini tushuntiring
    /* construktor va / / shuning ichida yozish, bukardan // manashuni ichida yozish o'zgaruvchilarni tanimaydi*/

// - Reference hamda non-primitieve farqlarini tushuntiring?
    /* primitiv bu bitta malumot saqlaydi bitta joyda reference bu ko'p malumot saqlaydi va shu joy adresini ozgaruvchiga beradi*/

// - array metodlarini sanab bering.
    /* ForEach, reduce, find, findIndex, splice, map, filter, some, fill, flat, push pop unshift shift, at, sort*/

// - HOF nima ?
    /* hay order function argumentiga funksiya qabul qiladigan funcsiya*/

// - +998 (90) xxx-yy-yy shu formatga regex yozing
    let reg = /^\+998\s\(([\d]{2})\)\s[\d]{3}-[\d]{2}-[\d]{2}/;
    console.log(reg.test("+998 (90) 333-93-90"));
    
// - getter va setterlarni tushuntiring
    /* objektlarda malumot olish va qo'shish uchun rasmiy usullar */

// - try catch finally
    /* try ichiga yozilgan kod qachonki togri bo'lganda ishlaydi agar xato bo'lsa catch ishlaydi ikkala xolatta ham finally ishlaydi bu narsa xatolik ushlash uchun js kodni toxtab qolmasligi uchun ishlatiladi*/ 

// - Xatolik turlari haqida gapiring
    /* Xatolik sintaxis yozishdagi xato va runtime yani run bo'lganda yuzaga keladigan xatolar bular type, referens, sintaxis, eval vahakazo errorlar bor*/ 

    // - eval() + va  -
    /* + tarfi string ichidagi js codini ishlatib eradi - tarafi str ichidagi hamma codni ishlatib kerak bo'lmaganlarini ham muammo chiqarishi mimkin*/ 

    // - eval() alternativi
    /* eval() alternativi Function() construktr undan foydalanish xafsizroq tashqi o'zgaruvchilarga tasir qilmaydi*/

// - function generatorlar haqida gapiring
    /* Bu haqda bilganim function* shunaqa qilib yasaladi bu xolatta funcsiyani vaqtincha to'xtatib yana ishlatish mumkin returndan farqli o'laroq ): */

// - soat yasab bering konsolda chiqaring
    setInterval( () => {
        let date = new Date();
        console.log(`${String(date.getHours()).padStart(2, 0)}:${String(date.getMinutes()).padStart(2, 0)}:${String(date.getSeconds()).padStart(2, 0)}`);
    }, 1000);
    // bu yerda har 1 secund da yangi vaqt olinadi va padStart metodi bilan soat farmati togrilanadi yani doim 2 xonali ko'rinadi.
