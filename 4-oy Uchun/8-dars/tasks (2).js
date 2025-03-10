// 1.Telefon raqamini topish
// Format: (998)-123-4567
// Input: "Mening raqamim (998)-123-4567"
// Expected Match: (998)-123-4567
function findPhoneNumber(str) {
    const reg = /\(\d{3}\)-\d{3}-\d{4}/ // () va \( \) ikkalasi bir xil emas 
    return str.match(reg)[0];
};
console.log(findPhoneNumber("Mening raqamim (998)-123-4567"));
// ======================================================================
// 2. Email adresini topish.
// Satr ichidan oddiy email adresini topuvchi RegEx yozing.
// Input: "Mening emailim ulugbek@gmail.com"
// Expected Match: ulugbek@gmail.com
function findEmail(str) {
    const reg = /\b[A-Za-z0-9_]+@gmail\.com\b/;
    return str.match(reg)[0];
};
console.log(findEmail("Mening emailim ulugbek@gmail.com"));
// ======================================================================
// 3.	Foydalanuvchi ismiga moslash
// Harflar, raqamlar, va pastki chiziqdan iborat foydalanuvchi ismlarini topuvchi RegEx yozing.
// Input: "Mening ismim user_123"
// Expected Match: user_123
function findUser(str) {
    const reg = /\b(?=\w*[a-zA-Z])(?=\w*\d)(?=\w*_)\w+\b/g;
    return str.match(reg);
}

console.log(findUser("Mening ismim user_123")); // ["user_123"]
// ======================================================================
// 4.	URL ni topish
// Input: "Mening saytlarim https://example.com va http://test.com"
// Expected Matches: https://example.com, http://test.com
function findURL(str) {
    const reg = /https?:\/\/\w+\.\w+/g;
    return str.match(reg);
}
console.log(findURL("Mening saytlarim https://example.com va http://test.com"));
// ======================================================================
// 5.	Ismlar orasidagi bo’sh joylarni olib tashlash
// Matnda ismlar orasidagi bo’sh joylarni olib tashlash uchun RegEx yozing.
// Input: "John    Smith"
// Expected Result: "John Smith"
function removeSpaces(str) {
    const reg = /\s+/g;
    return str.replace(reg, ' '); // hamma bo'sh joylarni bitta bo'sh joyga almashtiradi.
}
console.log(removeSpaces("John    Smith"));
// ======================================================================
// 6.	Faqat katta harflarni topish
// Matndan faqat katta harflarni topuvchi RegEx yozing.
// Input: "Salom, MENING ismim Ulug'bek"
// Expected Match: MENING  
function findCapitalLetters(str) {
    const reg = /[A-Z]+/g;
    return str.match(reg);
}
console.log(findCapitalLetters("Salom, MENING ismim Ulug'bek")); // S va U ham katta harif 
// ======================================================================
// 7. Validatsiya qilingan kredit karta raqamlarini topish
// Quyidagi formatlarda bo’lgan kredit karta raqamlarini topuvchi RegEx yozing (bo’sh joylar bo’lishi mumkin):
// Format: XXXX XXXX XXXX XXXX yoki XXXXXXXXXXXXXXXX
// Input: "Mening karta raqamim 1234 5678 9123 4567 yoki 1234567891234567"
// Expected Match: 1234 5678 9123 4567, 1234567891234567
function findCartaNum(str) {
    const reg = /\b(\d){4}(\d){4}(\d){4}(\d){4}\b/;
    return str.match(reg);
};
console.log(findCartaNum("Mening karta raqamim 1234 5678 9123 4567 yoki 1234567891234567"));


