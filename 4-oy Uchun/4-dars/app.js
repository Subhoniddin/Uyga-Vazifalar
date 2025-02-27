// - 21 yoshdan kichik bo'lgan talabalarni o'chirib yangi massiv qaytaring
// - Ingliz tili o'qiydigan qizlarni qaytaring, yangi massivda
// - Kimyo o'qimaydigan bollarni o'chirib yangi massiv qaytaring
// - { name: "Vali", age: 25, gender: "male", subjects: ["Math"] } ushbu objectni studentlar qatoriga qo'shing
// - { name: "Suhrob", age: 20, gender: "male", subjects: ["Geography", "History"] } aynan shu bilan bir xil bo'lgan objectni massiv ichidan qidirib topadigan funksiya yozing. Umuman olgan parametridan obyekt qabul qiladi va uni qidiradi

const students = [
    { name: "Ali", age: 20, gender: "male", subjects: ["Math", "Physics"] },
    {
      name: "Zarina",
      age: 21,
      gender: "female",
      subjects: ["English", "History"],
    },
    {
      name: "Bekzod",
      age: 22,
      gender: "male",
      subjects: ["Biology", "Chemistry"],
    },
    {
      name: "Gulnora",
      age: 19,
      gender: "female",
      subjects: ["Math", "Informatics"],
    },
    { name: "Iskandar", age: 23, gender: "male", subjects: ["Physics", "Math"] },
    {
      name: "Suhrob",
      age: 20,
      gender: "male",
      subjects: ["Geography", "History"],
    },
    { name: "Madina", age: 21, gender: "female", subjects: ["English", "Art"] },
    {
      name: "Sardor",
      age: 19,
      gender: "male",
      subjects: ["Informatics", "Math"],
    },
    {
      name: "Malika",
      age: 22,
      gender: "female",
      subjects: ["Biology", "History"],
    },
    { name: "Shokir", age: 20, gender: "male", subjects: ["Chemistry", "Math"] },
    {
      name: "Alisher",
      age: 21,
      gender: "male",
      subjects: ["Physics", "History"],
    },
    { name: "Nigora", age: 19, gender: "female", subjects: ["English", "Art"] },
    {
      name: "Sherzod",
      age: 22,
      gender: "male",
      subjects: ["Math", "Informatics"],
    },
    {
      name: "Dilshod",
      age: 23,
      gender: "male",
      subjects: ["Physics", "Geography"],
    },
    { name: "Yulduz", age: 20, gender: "female", subjects: ["Art", "History"] },
    { name: "Xurshid", age: 21, gender: "male", subjects: ["Math", "Physics"] },
    {
      name: "Feruza",
      age: 19,
      gender: "female",
      subjects: ["Biology", "English"],
    },
    {
      name: "Abdulloh",
      age: 22,
      gender: "male",
      subjects: ["Geography", "Math"],
    },
    {
      name: "Shahnoza",
      age: 20,
      gender: "female",
      subjects: ["Informatics", "Physics"],
    },
    { name: "Zokir", age: 23, gender: "male", subjects: ["Math", "Biology"] },
  ];

  // - 21 yoshdan kichik bo'lgan talabalarni o'chirib yangi massiv qaytaring.
  const newArr = students.filter( el =>  el.age > 21);
  console.log(newArr);
  
  // - Ingliz tili o'qiydigan qizlarni qaytaring, yangi massivda.
  const girlsEnglish = students.filter( el => el.gender == 'female' && el.subjects.includes('English'));
  console.log(girlsEnglish);

  // - Kimyo o'qimaydigan bollarni o'chirib yangi massiv qaytaring
  const noBiology = students.filter( el => el.gender == 'male' && el.subjects.includes('Biology'));
  console.log(noBiology);

  // - { name: "Vali", age: 25, gender: "male", subjects: ["Math"] } ushbu objectni studentlar qatoriga qo'shing.
  let newStudent = { name: "Vali", age: 25, gender: "male", subjects: ["Math"] };
  students.push(newStudent);

  // - { name: "Suhrob", age: 20, gender: "male", subjects: ["Geography", "History"] } aynan shu bilan bir xil bo'lgan objectni massiv ichidan qidirib topadigan funksiya yozing. Umuman olgan parametridan obyekt qabul qiladi va uni qidiradi
  const findObj = function(array, obj) {
       return array.some( el => JSON.stringify(el) == JSON.stringify(obj));
  }
 
 console.log( findObj(students, newStudent)); // Bitta shuni darsda ishlab berdi ustoz :)
 
  