// capitalize() metodini yozish.
String.prototype.capitalize = function() {
    let str = String(this)
    let result = '';
    let startWord = true;
    for (let i = 0; i < str.length; i++) {
        if(startWord && str[i] >= 'a' && str[i] <= 'z') {
            result += String.fromCharCode(str.charCodeAt(i) - 32);
        } else {
            result += str[i];
        }
        startWord = (str[i] === ' ' || str[i] === '\t' || str[i] === '\n' || str[i] === ',' || str[i] === '.') // qaysi belgidan keyin
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


  // String includes method
  String.prototype.includesNew = function(belgi) {
        let str = String(this);
        belgi = String(belgi);
        let count = belgi.length;
       
        for (let i = 0; i < str.length; i++) {
            if(str[i] == belgi[0]){
                let ss = ''
                for (let j = i; j < i+count; j++) {
                    ss += str[j]
                }
                if(ss == belgi) {return true};
            };          
        } 
        return false;
  }

  let str4 = "Sinov uchun yozilgan bu text @emil yoq";
  console.log(str4.includes('@'));
  

String.prototype.lengthNew = function() {
    let str = String(this);
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        count++
    }
    return count
}

let str5 = 'salom'
console.log(str5.lengthNew());  // 5
