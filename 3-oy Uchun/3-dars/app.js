
// O'zgaruvchilar va `console.log
const ism = "Subhoniddin";
console.log(`Mening ismim: ${ism}`);
const yosh = 24;
console.log(`Men ${yosh} yoshdaman`);
const sevilganRang = "moviy";
console.log(`Mening yoqtirgan rangim ${sevilganRang}`);
let son1 = 5;
let son2 = 6;
console.log(son1 + son2);
const matn1 = 'salom'
const matn2 = 'dunyo'
console.log(matn1 + ' ' + matn2);

// prompt` va foydalanuvchi bilan muloqot
const Userism = prompt('Ismingizni kiriting!')
console.log(`Salom ${Userism}!`);

const savol = confirm('Dasturni davom ettirishni xoxlaysizmi?') ? console.log('Dastur davom etmoqda...') :  console.log("Dastur to'xtatildi.")
// if(savol) {
//     console.log('Dastur davom etmoqda...');
// } else {
//     console.log("Dastur to'xtatildi.");
// }
const userYosh = +prompt("Yoshingizni kiriting?") >= 18 ? console.log("Siz kattasiz") : console.log("Siz hali yoshsiz");
// if(userYosh >= 18) {
//     console.log("Siz kattasiz");
// } else {
//     console.log("Siz hali yoshsiz");
// }
const parol = +prompt("Parolni kiriting?") === 12345 ? console.log("Xush kelibsiz!") :  console.log("Parol noto'g'ri");
// if(parol === 12345) {
//     console.log("Xush kelibsiz!");
// } else {
//     console.log("Parol noto'g'ri");
// }
const userName = prompt("Ismingizni kiriting?")
if(userName !== null && userName !== '') {
    console.log(`Salom ${userName}!`);
} else {
    console.log("Ism kiritilmadi");
}

// Matematik amallar
const son = prompt("Ikkita son yozing orasini , bilan ajrating")
const sonlar = son.split(",")
const result =  sonlar[0] * sonlar[1] 
console.log(result);

const user_son = prompt("Ikkita son yozing orasini , bilan ajrating")
const usersonlar = user_son.split(",")
console.log(usersonlar[0]*1 - usersonlar[1]*1 );  // *1 bu stringni numberga aylantrish uchun

const uchburchakAsos = prompt("Uchburchak asosini va balandligini kiriting Namuna(14,16) kiriting?")
const userSon = uchburchakAsos.split(",")
const yuza = (userSon[0] * userSon[1]) / 2
console.log(yuza);

const radius = +prompt("Aylana radiusini yozing")
const uzunlik = 2 * 3.14 * radius
console.log(uzunlik);

//  Qo‘shimcha masalalar
const fio = prompt("Ism,Familiya,yosh shu xolatda malumotlaringizni kiriting")
const f_i_y = fio.split(",")
console.log(`Ism: ${f_i_y[0]} , Familiya: ${f_i_y[1]}, Yosh: ${f_i_y[2]}`);

const kino = prompt("Sevimli kinolaringiz nomini kiriting vergul bilan ajrating 3 ta")
const films = kino.split(",")
console.log(`
    1. Sevimli kinoyingiz: ${films[0]},
    2. Sevimli kinoyingiz: ${films[1]},
    3. Sevimli kinoyingiz: ${films[2]}`);


