// Fubction Declaration - обьявление функции
// Fubction Experession - функциональное выражение
// Arrow Function - стрелочная функция

// function showMassage () {
//     console.log('hello');
// }
// showMassage();

// const user = "Vasya";

// function greetUser(name) {
//     console.log(`Привет, ${name}`);
// }
// greetUser(user);
// let user;
// function greetUser(name = "гость") {
//     let a = name || "гость";
//         console.log(`Привет, ${name}`);
// }
// greetUser(user);

// const user = {
//     name: "Vasya",
//     age: 18,
// };
// function chexkAccess(age) {
//     if(age < 18) {
//         showDeniedMsg();
//     } else {
//         showAllowedMsg();
//     }
// }

// function showAllowedMsg() {
//     console.log("Доступ  разрешён");
// }

// function showDeniedMsg() {
//     console.log("доступ запрещён");
// }
// chexkAccess(user.age);

// const user = {
//     name: "Vasya",
//     age: 18,
// };

// const showAllowedMsg = function() {
//     console.log("Доступ  разрешён");
// }

// function chexkAccess(age) {
//     if(age < 18) {
//         showDeniedMsg();
//     } else {
//         showAllowedMsg();
//     }
// }

// function showDeniedMsg() {
//     console.log("доступ запрещён");
// }
// chexkAccess(user.age);

// function calcValue(a, b) {
//     return a + b;
// }
// const result = calcValue(3, 5);

// console.log(result);

// const user = {
//     name: "Vasya",
// };

// const greetMag = "Привет";

// function getName(user) {
//     return user.name || 'гость'
// }

// function sayHi(text, name = getName) {
//     console.log(`${text}, ${name}!`);
// }
// sayHi(greetMag, getName(user));

// Функция  используемая  внутри  функции называется  
// callback

// const name = "vasya";
// function showMsg() {
//     console.log(name);
// }
// showMsg();

// ПРФКТИКА

// Написать функцию, которая будет принимать имя пользователя, и выводить
// строку с приветствием данного пользователя, если имени пользователя нет,
// выводить приветствие гостя.

// const user = {
//         name: "",
//     };
    
//     const greetMag = "Привет";
    
//     function getName(user) {
//         return user.name || 'гость'
//     }
//     function sayHi(text, name = getName) {
//             console.log(`${text}, ${name}!`);
//         }
//         sayHi(greetMag, getName(user));
// Написать функцию, которая в качестве первого параметра будет принимать
// численное значение, а в качестве второго параметра будет принимать степень, в
// которую надо возвести первый аргумент. По умолчанию, второй аргумент
// единица.

// const calcPower = function(num, power = 1) {
//     if (typeof num !== "number") {
//         const errorMsg = "Некоректные значения";
//         return errorMsg;
//     }
//     return num ** power;
// };
//     const result = calcPower(2, 3);
//     console.log(result);

// Написать функцию, которая будет принимать в качестве входного параметра
// массив любых, целых чисел, и будет возвращать среднее арифметическое
// значение данного массива*.

// const myArray = [5, 10, 15];

// const calcAverageValue = function (arr) {
//     let sum = 0;

//     for (let i = 0; i < myArray.length; i++) {
//         sum += arr[i];
//     }

//     return  sum / arr.length;
// };

// console.log(calcAverageValue(myArray));

// const myArray = [1, 2];

// const calcAverageValue = function (arr) {

// if (!myArray.length) {
//     // так  как  потом return дальше код не  выполняется
//     return "Пустой  массив";
// }

//     let sum = 0;

//     for (let i = 0; i < myArray.length; i++) {
//         sum += arr[i];
//     }

//     return  sum / arr.length;
// };

// console.log(calcAverageValue(myArray));



// Синтаксис функции

// Arrow functions

// function calcValue(a, b) {
//     const result = a + b;
//     return result;
// }

// const calcValue = function(a, b,) => {a + b};
// тоже самое  что
// const calcValue = (a, b) => {

//     return a + b;
// };

// const  result = calcValue(3, 5);
// console.log(result);

// стрелочная функция

// const calcValue = (a, b) => {
//     const calcValue = a + b;
//     return a + b;
// };

// const  result = calcValue(3, 5);
// console.log(result);


// Приктика

// Напишите стрелочную функцию которая будет выводить переданную строку в
// консоль n раз.


// const msgsAmount = 10;
// const message = "Сообщение";


// const showMessage = (msg, count) => {
//     for (let i = 1; i <=count; i++) {
//         console.log(`${msg} ${i}`);
//     }
// };
// showMessage(message, msgsAmount);


// Напишите стрелочную функцию, которая будет принимать в качестве
// параметра букву и если она гласная, функция будет возвращать true, в
// противном случае false .

const myChar = "a";

const isMyCharVowel = (char, ) => {
    const vowels = "аоуыэяеёюи";
    
    if(vowels.includes(char)) {
        return "Гдасная";
    }

    return "Не гласная";

};

console.log(isMyCharVowel(myChar));