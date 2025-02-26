// capitalize() metodini yozish.
String.prototype.capitalize = function() {
    let result = '';
    let startWord = true;
    for (let i = 0; i < this.length; i++) {
        if(startWord && this[i] >= 'a' && this[i] <= 'z') {
            result += String.fromCharCode(this.charCodeAt(i) - 32);
        } else {
            result += this[i];
        }
        startWord = (this[i] === ' ' || this[i] === '\t' || this[i] === '\n' || this[i] === ',' || this[i] === '.') // qaysi belgidan keyin
    }
    return result;
} 
let str = 'bu method har bir sozning boshini katta harf qilib beradi';
let res =  str.capitalize()
console.log(res); //  Bu Method Har Bir Sozning Boshini Katta Harf Qilib Beradi


// Arrayning  forEach metodi
Array.prototype.forEachNew = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);        
    }
}

let arr = [1,2,3,4,5,6,7,8];
arr.forEachNew( (item, index) => {
    console.log(item, index);
});


// Arrayning  filter() metodi
Array.prototype.filterNew = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

let arr1 = [1,2,3,4,5,6,7,8];
const newArr = arr1.filterNew( item => item % 2 == 0 )
console.log(newArr);   // [ 2, 4, 6, 8 ]


// Array join() method
Array.prototype.joinNew = function(ajratuvchi) {
    let result = '';
    if(!ajratuvchi) {
        return result += this
    } else {
        for (let i = 0; i < this.length; i++) {
            result += this[i];
            if(i < this.length-1)  {result += ajratuvchi};
        }
        return result;
    }
}

let arr2 = [1,2,3,4,5,6,7,8];
let res3 = arr2.joinNew(', ')
console.log(res3);  //  "1, 2, 3, 4, 5, 6, 7, 8"


// Array sort method
// Array.prototype.sortNew = function() {
//     let result = [];
//     for (let j = 0; j < this.length; j++) {
//         let min = this[j] 
//         let sum;
//         for (let i = 1; i < this.length; i++) {
//         }
//        console.log(min);
       
        
//     }
//     return result;
// }
// let arr3 = [1,5,3,2,8,6,7,4];
// console.log(arr3.sortNew());    xato


    // String padEnd methodi
String.prototype.padEndNew = function(leng, fillStr) {
    let result = String(this);
    fillStr = String(fillStr);

   if (leng > result.length) {
        // result += String(fillStr).repeat(leng - this.length);
        while (leng > result.length) {
           for (let i = 0; i < fillStr.length; i++) {
                result += fillStr[i]            
                if(result.length == leng) {return result};
           }
        }
   } else {
    return result;
   }
    //    return result.slice(0, leng);
}
let str2 = '1';
console.log(str2.padEndNew(4, 123)); 


    // String padStart methodi
String.prototype.padStartNew = function(leng, fillStr) {
    let result = String(this);
    let str = '';
    fillStr = String(fillStr);

    if (leng > result.length) {
        // result += String(fillStr).repeat(leng - this.length);
        let dif = leng - result.length
        while (dif > str.length) {
           for (let i = 0; i < fillStr.length; i++) {
                if(str.length == dif) {return str + result};
                str += fillStr[i]            
           }
        }
   } else  {return result};
}

let str3 = '0';
console.log(str3.padStartNew(4, 1234)); 




