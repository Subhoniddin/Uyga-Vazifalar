import todos from "./db.js"; // todos db.js dan kelmoqda

function idWithDel(arr, id) { 
    arr.forEach( (el, index) => {
        if(el.id == id) {
            arr.splice(index, 1);  // id turgan obj ni  arraydan o'chirib tashlaydi
        }
    });
    return `id: ${id} o'chirildi` // Natijani tekshirib olish uchun
}
console.log(idWithDel(todos, 5));  // func ni chaqirib unga arrayni va o'chirish kerak bo'lgan idni bering

console.log(todos); // ichida id: 5 saqlaydigan obj o'chirilgan.
