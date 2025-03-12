// Mana, RegExp mavzusi bo’yicha bir nechta masalalar. Ularni hal qilish orqali o’rganganlaringni mustahkamlashing mumkin. Masalalar oson, o’rta va qiyin darajalarda berilgan.

// Oson daraja:

// 	1.	Masala: Faqat raqamlarni ajratish
// 	•	Shart: Berilgan matndan faqat raqamlarni ajratib ol.
// 	•	Input: "Men 25 yoshdaman, 2025 yil"
// 	•	Output: "25 2025"
let str = 'Men 25 yoshdaman, 2025 yil';
console.log(str.match(/\d+/g).join(' '));


// 	2.	Masala: Faqat harflarni ajratish
// 	•	Shart: Berilgan matndan faqat harflar (lotin alifbosidagi kichik va katta harflar) ajratib ol.
// 	•	Input: "Salom123 DUNYo!"
// 	•	Output: "SalomDUNYo"
console.log('Salom123 DUNYo!'.match(/\p{L}/gu));

// 	3.	Masala: Gapni bosh harf bilan boshlash
// 	•	Shart: Berilgan matnni boshidagi birinchi harfni aniqlab, agar u kichik harf bo’lsa, katta harfga almashtir.
// 	•	Input: "salom dunyo"
// 	•	Output: "Salom dunyo"
console.log('salom dunyo'.replace(/\b\w/g, (a) => a.toUpperCase()));

// 	4.	Masala: Faqat bo’sh joylarni sanash
// 	•	Shart: Berilgan matndagi bo’sh joylar sonini aniqlang.
// 	•	Input: "Bu yerda 5 ta bo'sh joy bor."
// 	•	Output: 5
console.log('Bu yerda 5 ta bo\'sh joy bor.'.match(/\s/g).length);

// 	5.	Masala: E-mail validatsiya qilish
// 	•	Shart: E-mail manzilining to’g’ri formatdaligini tekshiruvchi RegExp yarating.
// 	•	Input: "test@domain.com"
// 	•	Output: true (e-mail formatida bo’lsa) yoki false (bo’lmasa)
let email = "test@domain.com";
let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
console.log(emailReg.test(email));

// 	6.	Masala: Faqat katta harflarni ajratib olish
// 	•	Shart: Berilgan matndan faqat katta harflarni ajratib ol.
// 	•	Input: "Web DEVELOPER"
// 	•	Output: "WDEVELOPER"
console.log('Web DEVELOPER'.match(/[A-Z]/g));

// O’rta daraja:
// 	1.	Masala: Telefonda raqamlarni formatlash
// 	•	Shart: Berilgan telefon raqamini (raqamlar ko’rinishida) standart formatga keltiring (XXX-XXX-XXXX).
// 	•	Input: "9989012345"
// 	•	Output: "998-901-2345"
console.log('9989012345'.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));

// 	2.	Masala: Raqam va harflarni ajratish
// 	•	Shart: Berilgan matndan harflar va raqamlarni ajratib, ularni alohida qaytaring.
// 	•	Input: "abc123xyz456"
// 	•	Output: "abcxyz 123456"
let str2 = 'abc123xyz456';
let letters = str2.match(/[a-zA-Z]/g).join('');
let number = str2.match(/\d/g).join('');
console.log(letters, number);

// 	3.	Masala: Bir xil ketma-ket takrorlangan belgilarni olib tashlash
// 	•	Shart: Berilgan matndagi ketma-ket takrorlangan harflarni bitta qilib qaytaring.
// 	•	Input: "aaabbbcccaaa"
// 	•	Output: "abc"
console.log([...new Set("aaabbbcccaaa")].join(''));

// 	4.	Masala: Foydalanuvchi nomi validatsiyasi
// 	•	Shart: Foydalanuvchi nomi faqat harflardan va raqamlardan iborat bo’lishi kerak va uzunligi 4 dan 10 gacha bo’lishi shart. Validatsiya qiling.
// 	•	Input: "user123"
// 	•	Output: true
console.log(/^[a-zA-Z0-9]{4,10}$/.test('user123'));

// 	5.	Masala: Sana formatini tekshirish
// 	•	Shart: Berilgan matn sana formatida ekanligini tekshiruvchi RegExp yarating (masalan, DD/MM/YYYY yoki YYYY-MM-DD formatlari).
// 	•	Input: "2025-03-10"
// 	•	Output: true
console.log(/^\d{4}-\d{2}-\d{2}$/.test('2025-03-10')); // faqat farmatni tekshiradi to'g'ri yoki noto'g'riligini emas.

// 	6.	Masala: Matndagi bo’sh joylarni o’zgartirish
// 	•	Shart: Berilgan matndagi bo’sh joylar o’rniga - belgisini qo’ying.
// 	•	Input: "RegExp masalalari juda qiziqarli!"
// 	•	Output: "RegExp-masalalari-juda-qiziqarli!"
console.log('RegExp masalalari juda qiziqarli!'.replace(/\s/g, '-'));

// 	7.	Masala: Domen nomini ajratib olish
// 	•	Shart: Berilgan URL matnidan domen nomini ajratib oling.
// 	•	Input: "https://www.example.com/path/to/page"
// 	•	Output: "example.com"
console.log('https://www.example.com/path/to/page'.match(/\/\/(www\.)?([^\/]+)/)[2]);

// 	8.	Masala: Faqat so’zlarni ajratish
// 	•	Shart: Berilgan matndan faqat so’zlarni (raqamlar va maxsus belgilarni hisobga olmasdan) ajratib oling.
// 	•	Input: "Hello123, this is a test!"
// 	•	Output: "Hello this is a test"
console.log('Hello123, this is a test!'.match(/\b[a-z]+\b/gi).join(' '));

// 	9.	Masala: Qavs ichidagi matnni olish
// 	•	Shart: Berilgan matndan faqat qavs ichidagi matnni ajratib oling.
// 	•	Input: "Bu matn (qavs ichida) joylashgan."
// 	•	Output: "qavs ichida"
console.log('Bu matn (qavs ichida) joylashgan.'.match(/\((.*?)\)/)[1]);

// 	10.	Masala: Matndagi raqamlarni va belgilarni ajratish
// 	•	Shart: Berilgan matndan faqat raqamlarni va maxsus belgilarni ajratib ol.
// 	•	Input: "Salom! 123 @world."
// 	•	Output: "123 @"
console.log('Salom! 123 @world.'.match(/[^a-zA-Z]/g).join('')); // ! bu ham belgi hisoblanadi.

// 	11.	Masala: IP manzilni tekshirish
// 	•	Shart: Berilgan matn IP manzili ekanligini tekshiruvchi RegExp yozing (IPv4 formatida: XXX.XXX.XXX.XXX).
// 	•	Input: "192.168.0.1"
// 	•	Output: true
console.log(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test("192.168.0.1"));

// 	12.	Masala: URL formatini tekshirish
// 	•	Shart: Berilgan matn URL ekanligini tekshiruvchi RegExp yozing.
// 	•	Input: "https://www.google.com"
// 	•	Output: true
console.log(/^https?:\/\/(www\.)?[a-z]+\.[a-z]{2,4}$/.test("https://www.google.com"));

// Qiyin daraja:
// 	1.	Masala: Raqamlarni matnga kiritish
// 	•	Shart: Berilgan raqamlar ketma-ketligini matn orasiga joylashtiring. Har bir raqamning orqasidan so’z qo’shing (masalan, “raqam:”).
// 	•	Input: "123456"
// 	•	Output: "raqam:1 raqam:2 raqam:3 raqam:4 raqam:5 raqam:6"
console.log('123456'.replace(/\d/g, 'raqam:$&'));   

// 	2.	Masala: Kredit karta raqamini tekshirish
// 	•	Shart: Kredit karta raqami to’g’ri formatda ekanligini tekshiruvchi RegExp yozing. Format XXXX-XXXX-XXXX-XXXX bo’lishi kerak.
// 	•	Input: "1234-5678-9012-3456"
// 	•	Output: true
console.log(/\d{4}(-\d{4}){3}/.test('1234-5678-9012-3456'));

// 	3.	Masala: Matndan maxsus belgilarni olib tashlash
// 	•	Shart: Berilgan matndan barcha maxsus belgilarni olib tashlang.
// 	•	Input: "Hello, World! @2025"
// 	•	Output: "Hello World 2025"
console.log('Hello, World! @2025'.replace(/[^a-zA-Z0-9\s]/g, ""));

// 	4.	Masala: HTML teglarini olib tashlash
// 	•	Shart: Berilgan matndan barcha HTML teglarini olib tashlang.
// 	•	Input: "<div>Hello</div> <p>World</p>"
// 	•	Output: "Hello World"
console.log('<div>Hello</div> <p>World</p>'.replace(/<[^>]+>/g, ""));

// Ushbu masalalar bilan o’rgangan bilimlaringni yanada mustahkamlashing mumkin. Har bir shart RegExp asosida ishlangan bo’lib, amaliyot uchun yaxshi asos bo’ladi.


// \p{Sc} bu regex faqat maxsus belgisi bor pul birliklarini topadi, lekin so'mning $ga o'xshagan belgisi yo'q. Siz shunaqangi funksiya yozishingiz kerakki ham $larni, ham so'm va shunga o'xshash pul birliklarini topa oladigan bo'lishi kerak. universalCurrency nomli funksiya yozing.
let universalCurrency = (str) => {
    let currencySymbols = /\p{Sc}/gu;

    let currencyWords = /\b(so'm|sum|tenge|rub|rupee|peso|lira|won|dong|baht|kip|rial|dinar|dram|manat)\b/gi;

    let matches = [...(str.match(currencySymbols) || []), ...(str.match(currencyWords) || [])];

    return matches.length > 0 ? matches : null;
};

console.log(universalCurrency("Men 100 so'm va 50$ oldim."));


// call("3")("-")("4")("+")("5")("(")("5")("*")("5")(")") shunday universal arifmetik curry yozing.
function call(str = '') {
    let res
    let result = `${str}`;
    return function calc(str2) {
        if(str2 != undefined && str2 !='') {
            result += str2;
            result = result.replaceAll(/(\d)\(/g, '$1*(');
            calc.res = Function(`return (${result})`)();
            }
            return calc;
        };
    };
console.log(call("3")("-")("4")("+")("5")("(")("5")("*")("5")(")").res);

function call(str = '') {
    let result = `${str}`;

    function calc(str2) {
        if (str2) {
            result += str2;
            result = result.replaceAll(/(\d)\(/g, '$1*(');
            try {
                calc.res = Function(`return (${result})`)();
            } catch (e) {
                calc.res = "Error: Invalid expression";
            }
            return calc;
        }
        return calc.res; // Oxirgi chaqirilganda natijani qaytarish
    }

    return calc;
}

console.log(call("3")("-")("4")("+")("5")("(")("5")("*")("5")(")").res); // darsda ishladik chiqmadi Xatolik sababini Uztoz bilib aytaman dedi


