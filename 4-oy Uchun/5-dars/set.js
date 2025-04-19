import todos from "./db.js";   // todos db.js dan kelmoqda 

function setObj(arr, obj) {
    let shablon = '';         // key larni shunga jamlab olamiz
    let newObj = '';          // taqqoslash uchun keylarni shunga jamlaymiz
    for (let key in arr[0]) {
        shablon += key;      // faqat shablonlar   
    }
    for (let key in obj) {
        newObj += key;     // yangi obj keylari
    }
    // bir xil bo'lsa     // qo'shib qo'yadi    // aksinchada xato qaytadi
    if(shablon == newObj) {arr.push(obj)} else {return 'todos shablon bilan bir xil emas'};
}; 

console.log(setObj (todos, {userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false, or: 'nimadir'}));  // shablon sifatiga key lar olingan va bu yerda xato qaytaradi agar togri kiritilsa push qilib qoyadi.