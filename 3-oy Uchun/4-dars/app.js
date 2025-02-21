// // Arifmetik
let a = 10,
  b = 4; // berilgan ikkita son:  10 va 4
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a ** 2);
console.log(Math.trunc(a / b), a % b);

// Math.trunc
let bir = Math.trunc(5.99);
let ikki = Math.trunc(5.99);
let ikki1 = Math.trunc(-3.56);
let uch = Math.trunc(9.8, -4.7, 0.5);
let uch1 = Math.trunc(-4.7);
let uch2 = Math.trunc(0.5);
let tort = Math.trunc(100 + Math.random() * 100);

// besh Jadval
console.table(`
 ${bir}
 ${ikki}
${ikki1}
 ${uch}
${uch1}
 ${uch2}
 ${tort}
   `);

// Math.round
console.log(
  Math.round(3.4),
  Math.round(3.5),
  Math.round(-3.6),
  Math.round(-3.4)
);
console.log(Math.round(Math.random() * 100));
console.log(Math.round(10.789));
console.log(Math.round(-4.55));
console.log(Math.round(50 + Math.random() * 100));

// Math.random
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 51) + 50);
console.log(Math.random() * 3);

let sum = 0;
for (let i = 0; i < 5; i++) {
  let randNum = Math.random();
  sum += randNum;
}
console.log(sum);

// Tayinlash operatorlari
let x = 5;
x += 10;
console.log(x);

x = 8;
x *= 3;
console.log(x);

let y = 15;
y -= 4;
console.log(y);

let z = 20;
z /= 2;
console.log(z);

x = 6;
y = 7;
x += y;
console.log(x);

// if 
let son = 4   // berilgan son...
if(son > 0) {
    console.log("musbat");
} else if (son == 0) {
    console.log("0 nol");
} else {
    console.log("manfiy");
}

let res = son % 2
if(res == 0) {
    console.log("Juft son");
} else {
    console.log("Toq son");
} 


let baho = 91
if(baho >= 90) {
    console.log("A'lo");
} else if(baho >= 70 && baho < 90) {
    console.log("Yaxshi");
} else if(baho >= 50 && baho < 70) {
    console.log("Qoniqarli");
} else if(baho <= 49) {
    console.log("Qoniqarsiz");
}


let ishSoati = 50
if(ishSoati > 40) {
    console.log(`Qo'shimcha ish soati: ${ishSoati - 40}`);
} else {
    console.log("oddiy ish soati");
}
