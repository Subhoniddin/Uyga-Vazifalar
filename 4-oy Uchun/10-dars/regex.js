// email
let str = "hello@example.com, info@domain.co, user123@abc.org"
console.log(str.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g));


// 2 faqat raqamlar
let str2 = "Men 2 ta kitob sotib oldim, ularning narxi 35000 so'm edi. Telefon raqamim: +998901234567"
console.log(str2.match(/\b\d+\b/g)); // + raqam emas

let str3 = "Contact me at +998-90-123-45-67 or call +998(91)8765432."
console.log(str3.match(/\+\d{3}[-\(]?\d{2}[-\)]?\d{3}[- ]?\d{2}[- ]?\d{2}/g));


let str4 = "We meet at 14:30, but the event starts at 24:00 or 12:70."
console.log(str4.match(/\b([01]?[0-9]|2[0-3]):[0-5][0-9]\b/g));

let str5 = "<h1>Welcome</h1><p>This is a paragraph.</p><div>Content</div>"
console.log(str5.match(/(?<=>)[^<]+(?=<)/g));
