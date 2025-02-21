// savol  1
let son1 = +prompt("Son kiriting!")
let son2 = +prompt("Son kiriting!")
console.log(isMax(son1, son2));

function isMax(son1, son2) {
    if(son1 > 10 && son2 > 10) {
        return "Ikkala son ham 10 dan katta"
    } else {
        return "Shart bajarilmadi"
    }
}

// savol  2
let yosh = +prompt("Yoshingizi kiriting")
if(yosh <= 6) {
    console.log("Siz bog'cha yoshidasiz");
} else if(yosh > 6 && yosh <= 17 ) {
    console.log("Siz maktab yoshidasiz");
}else if(yosh > 18 && yosh <= 22 ) {
    console.log("Siz talaba yoshidasiz");
} else {
    console.log("Siz katta yoshdasiz");
}

// savol  3
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

// savol  4
let n = +prompt("son kiriting")
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum);

// savol  5
let BeshKarrali = +prompt("5ga karrali son kiriting")
while (BeshKarrali % 5 != 0) {
    BeshKarrali = +prompt("5ga karrali son kiriting")
}
console.log("Siz 5 ga karrali son kiritdingiz");

// savol  6
let num = +prompt("Son kiriting")
num == 0 ? console.log("Nol") : num > 0 ? console.log("Musbat") : console.log("Manfiy");

// savol  7
const car = {
    model: "BMW",
    year: 2024,
    color: "white",
    speed: "300km/h",
}
console.log(car);


// savol  8
let num2 = +prompt("Qaysi sonni kvadratini bilmoqchisiz")
function getKvadrat(son) {
   return  son ** 2
} 
console.log(getKvadrat(3));

// savol  9
const getMaxNum = (son1, son2) => {
    if(son1 == son2) return "ikkalasi teng"
    if(son1 > son2) {
        return son1
    } else {
        return son2
    }
}
console.log(getMaxNum(12,56));

// savol  10
const find = (a,b) => {
    let p = 1;
    for (let i = a; i <= b; i++) {
        if(i % 2 == 0 && i % 5 == 0) {
            p *= i
        }
    }
}
console.log(find());



