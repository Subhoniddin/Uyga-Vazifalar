import todos from "./db.js";      // todos db.js dan kelmoqda

function objChange(arr, obj, newobj) {
    arr.forEach( (item, index) => {
        if(item.id == obj.id) {
            arr.splice(index, 1, newobj);  // id bo'yicha izlanadi va yangi obj splice orgali joylab qoyiladi.
        };
    });
};

objChange(todos, {    // bu tekshiruv obj Arrayini va qaysi obj ozgarish kerak va nimaga ozgarishi kerak uchta qiymat
    userId: 1,
    id: 4,
    title: 'et porro tempora',    // qidiriladigan obj
    completed: true,
},  {
    userId: 1,
    id: 10,
    title: 'illo est ratione doloremque quia maiores aut',  // yangi obj
    completed: true,
});

console.log(todos);  // muvaffaqqiyatli
