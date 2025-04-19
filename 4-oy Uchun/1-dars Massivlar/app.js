       // 1-10. Massiv uzunligi va elementlar bilan ishlash (length, push, pop, unshift, shift)

// 1. Berilgan massivning uzunligini (length) aniqlang va ekranga chiqaring.
let arr = [1,4,5,6,7,3];
console.log(arr.length);

// 2. Berilgan massivning oxiriga yangi element qo‘shing (push).
arr.push(45)

// 3. Berilgan massivning oxirgi elementini olib tashlang (pop).
arr.pop()

// 4. Berilgan massivning boshiga yangi element qo‘shing (unshift).
arr.unshift(14)

// 5. Berilgan massivning birinchi elementini olib tashlang (shift).
arr.shift()

// 6. Berilgan massivning oxirgi elementini o‘chirib, o‘rniga yangi element qo‘shing (pop, push).
arr.pop();
arr.push(89)

// 7. Berilgan massivning birinchi va oxirgi elementlarini almashtiring (unshift, shift, push, pop).
arr.shift()
arr.pop();
arr.unshift(55)
arr.push(44)

// 8. Berilgan massivni barcha elementlardan tozalang (length = 0).
arr.splice(0, arr.length);

// 9. Massivning 2-indeksidagi elementni o‘chirib, o‘rniga yangi element qo‘shing (splice).
arr.splice(2, 1, 59)

// 10. Ikki berilgan massivni birlashtirib, yangi massiv hosil qiling (concat).
let arr2 = ['s', 'a', 'l', 'o', 'm'];
let res = arr.concat(arr2)

      // 11-20. Massivda qidirish va manipulyatsiya (splice, at, for, for...of)

// 11. Berilgan indeksdagi elementni ekranga chiqaring (at).
let mas = ['olma', 'behi', 'shaftoli', 'olcha', 'anjir']
console.log(mas.at(2));

// 12. Berilgan massivning o‘rtasiga yangi element qo‘shing (splice).
let orta = Math.round(mas.length / 2 - 1)
mas.splice(orta, 0, 'uzum')
console.log(mas);

// 13. Berilgan son massivda bor yoki yo‘qligini tekshiring (for).
let nums = [1, 2, 5, 7, 56, 33, 24, 45];
let isHave = 33
let boo = false 
for (num of nums) {
    if(num == isHave) {
        boo = true
    }
}
if(boo) {
    console.log("Izlagan son bor");
} else {
    console.log("Izlagan son yoq");
}

// 14. Berilgan massiv elementlarini for yordamida ekranga chiqaring.
for(num of nums) {
    console.log(num);
}

// 15. Berilgan massiv elementlarini for...of yordamida ekranga chiqaring.
for(num of nums) {
    console.log(num);
}

// 16. Berilgan sonlar massivining eng katta elementini toping (for).
let max = nums[0]
for(num of nums) {
    if(max < num) max = num;
}
console.log(max);

// 17. Berilgan sonlar massivining eng kichik elementini toping (for).
let min = nums[0]
for(num of nums) {
    if(min > num) min = num;
}
console.log(min);

// 18. Massivdagi faqat juft sonlarni ekranga chiqaring (for).
for(num of nums) {
    if(num % 2 == 0) console.log(num);
}

// 19. Massivdagi faqat toq sonlarni ekranga chiqaring (for).
for(num of nums) {
    if(num % 2 == 1) console.log(num);
}

// 20. Berilgan sonlar massivining barcha elementlarini qo‘shing (for).
let sum = 0
for(num of nums) {
    sum += num;
}
 
       //  21-30. Massivni o‘zgartirish va elementlarni ajratish (join, toString, splice)

// 21. Berilgan massivni string ko‘rinishiga o‘tkazing (toString).
 let arrToStr = ['hello', 'world'];
 arrToStr.toString()

// 22. Massiv elementlarini vergul bilan ajratilgan ko‘rinishda chiqaring (join).
arrToStr.join(", ")

// 23. Massivning 3-6 indekslar orasidagi qismini ajrating (splice).
let mevalar = ['nok', 'olma', 'behi', 'shaftoli', 'olcha', 'anjir', 'tok', 'olxori', 'bodom']
let ajragan =  mevalar.splice(3, 4)

// 24. Berilgan massivning o‘rtasidagi barcha elementlarni o‘chirib tashlang (splice).
let centr = Math.round(mevalar.length / 2 - 1)
mevalar.splice(centr, 1) 

// 25. Har bir elementga 2 qo‘shib, yangilangan massivni hosil qiling (for).
let sonlar = [1, 2, 4, 5, 5, 6];
let newArr = [];
for (son of sonlar) {
    newArr.push(son + 2)
}
console.log(newArr);

// 26. Berilgan sonlar massivida musbat va manfiy sonlarni alohida massivlarga ajrating (for).
let allNums = [1, -2, 4, -4, -23, 45];
let musbat = [];
let manfiy = [];
for (num of allNums) {
    if(num > 0) {
        musbat.push(num)
    } else if(num < 0) {
        manfiy.push(num)
    }
}
console.log(musbat, manfiy);

// 27. Berilgan massivning har bir elementini kvadratga oshiring (for).
let ass = [1, 3, 4, 5];
for (let as of ass) {
    console.log(as ** 2);
    }

//  28. Eng katta va eng kichik elementlarni topib, ularning o‘rnini almashtiring (for).
let numss = [12, 2, 34, 45, 4, 233, 1, 67, 12, 2, 34, 45, 4, 2344, 67 ];
function func(arr) {
    let max = [numss[0], 0];
    let min = [numss[0], 0];
    numss.forEach((item, index) => {
        if(max[0] < item) {
            max[0] = item
            max[1] = index
        } 
        if(min[0] > item) {
            min[0] = item
            min[1] = index;
        }
    })
    numss[max[1]] = min[0];
    numss[min[1]] = max[0];
    return numss;
}
func(numss)

// 29. Massiv elementlarini teskari tartibda ekranga chiqaring (for).
let sss = [1,2,3,4,5];
for (let i = sss.length; i >= 1; i--) {
    console.log(i);
}

// 30. Har bir elementni uning indeks raqami bilan ekranga chiqaring (for).
sss.forEach((item, index) => {
    console.log(item,index);
})


      // 31-40. Qo‘shimcha amaliyotlar (split, concat)

// 31. Yangi massiv hosil qilib, faqat musbat elementlarni saqlang (for).
let arlash = [1,2,-3,4,-56,3];
let musbatAr = [];
for (let mus of arlash) {
    if(mus > 0) {
        musbatAr.push(mus)
    }
}
console.log(musbatAr);

// 32. 0 bo‘lgan barcha elementlarni olib tashlang (splice, for).
let arr12 = [1, 3, 4, 5, 0, 0, 4, 4, 0, true, false, '']
for (let i = arr12.length; i > 0; i--) {
    if(arr12[i] == 0) {
        arr12.splice(i, 1)
    }
}
console.log(arr12);

// 33. Takrorlangan elementlarni olib tashlab, yangi massiv hosil qiling (for).
let nummm = [1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 8, 8, 9];
let noRepit = [];
  nummm.forEach( (item) => {
        let count = false;
        for (let i = 0; i < noRepit.length; i++) {
            if(item == noRepit[i]) {
                count = true
            }     
        }
        if(!count) {
            noRepit.push(item)
        }
  })
console.log(noRepit);

// 34. Massivni teng ikkiga ajrating (splice).
let centerArr = [1,2,3,4,5,6,7,7,8,8];
let cntr = Math.round(centerArr.length / 2)
let yarm = centerArr.splice(0, cntr)
console.log(yarm, centerArr);

// 35. Har bir ikkinchi elementni olib tashlang (splice).
 let arss = [2,3,4,5,6,7,8,9,0];
 let newarss = [];
 for (let i = 0; i < arss.length; i += 2) {
    newarss.push(i)
 }
 console.log(newarss);

// 36. Ikki massivni birlashtirib, yangi massiv hosil qiling (concat).
let arr1 = [1,2,3,4];
let arr3 = [5,6,7,8];
let res1 = arr1.concat(arr3)

// 37. Har bir elementni 2 ga bo‘lib, natijani yangi massivga yozing (for).
let arrrr = [12,23,44,55,66,32];
let newArrrr = [];
for(let ar of arrrr) {
    let res = Math.round(ar / 2)
    newArrrr.push(res)
}
console.log(newArrrr);

// 38. Berilgan son necha marta takrorlanganini hisoblang (for).
let son = 12;
let counter = 0;
for (let i = 0; i < arrrr.length; i++) {
    if(arrrr[i] == son) {
        counter++
    }    
}
console.log(counter);

// 39. Musbat sonlarni 1, manfiy sonlarni -1 bilan almashtiring (for).
let armus = [1,-3,45,5,-55,5,-6];
let newMas = [];
for (let i = 0; i < armus.length; i++) {
    if(armus[i] > 0) {
        newMas.push(1)
    } 
    if(armus[i] == 0) {
        newMas.push(0)
    }
    if(armus[i] < 0) {
        newMas.push(-1)
    }
}
console.log(newMas);


// 40. Massiv elementlarini bo‘sh joy bilan ajratilgan holda stringga o‘tkazing (join).
let str = arrrr.join(' ')
console.log(str);
