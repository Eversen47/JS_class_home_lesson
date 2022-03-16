//1 if-else
// let a = 0;
// if (a == 0) {
//     console.log("Верно a = 0");
// } else {
//     console.log("Неверно");
// } 
// let namber = (a = 1);
// if (a > 0) {
//     console.log("Верно a > 0");
// } else {
//     console.log("Неверно");
// } 
// let namber = (a = -1);
// if (a < 0) {
//     console.log("Верно a < 0");
// } else {
//     console.log("Неверно");
// } 

// let a = 'test';
// if (a === 'test') {
//     console.log("a=test")
// } else {
//     console.log("неверно");
// }

// let a = 3;
// if (a != 'test') {
//     console.log("a неравна test")
// } else {
//     console.log("неверно");
// }


//2 Работа с логичсескими  переменными
// let test = true;
// if (test) {
//     console.log("равна");
// } else {
//     console.log("неравно");
// }

// let test = 1;
// if (test != 0) {
//     console.log("верно");
// } else {
//     console.log("неверно");
// }

// Работа с && (и) и || (или)
// let a = 4;
// if (a >= 0 && a <= 5) {
//     console.log("верно");
// } else {
//     console.log("неверно");
// }

// Если переменная a равна нулю или равна двум, то прибавьте к ней 7
// let a = 0;
// if (a === 0 || a === 2) {
//     console.log("прибавляем 7");
// } else {
//     console.log("a разделите на 10");
// }
    
// Если переменная a равна или меньше 1, а переменная b больше или равна 3
// let a = 1,
//     b = 5;

// let sumOfNumber = a + b;
// let differenceOfNumbers = a -  b;
// if ((a == 1 || a < 1) && (b > 3 || b == 3)) {
//     console.log(sumOfNumber);
// } else {
//     console.log(differenceOfNumbers);
// }

// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно'
// let a = 5;
//     b = 10;
// if ((a > 2 && a < 11) || b >= 6 && b < 14) {
//     console.log("верно");
// } else {
//     console.log("неверно");
// }

// switch-case
// Переменная num может принимать 4 значения: 1, 2, 3 или 4
// let num = 3;
// let result;
// switch (num) {
//     case 1:
//         console.log(result = "зима");
//  break;
// case 2:
//     console.log(result = "весна");
//     break;
// case 3:
//     console.log("лето");
//     break;
// case 4:
//     console.log("осень");
//     break;
// } 

// Общие задачи
// В переменной day лежит какое-то число из интервала от 1 до 31
// let day = 25;
// if (day >= 1 && day < 10) {
//     console.log('первая декада');
// } else if (day >= 10 && day < 20) {
//     console.log('вторая декада');
// } else if (day >= 20 && day <= 31) {
//     console.log('третья декада');
// }

// let searchString = 'abcde'; //srt поиск в строке
// if (searchString[0] === 'a') {
//     console.log("да");
// } else {
//     console.log("нет");
// }

// Решите эти задачи сначала через цикл while, а затем через цикл for.
// Выведите столбец чисел от 1 до 100
// let i = 1;
// while (i <= 100) {
//     console.log (i);
//     i++;
// }
// let i = 11;
// while (i <= 33) {
//     console.log (i);
//     i++;
// }
// let i = 0;
// while (i <= 100) {
//     i += 2;
//     console.log(i)
// } 

// let n = 1000;
// let num = 0;

// for (let i = 0; i < 1000; i++) {
//     n /= 2;
//     num++;
//     if (n < 50) {
//         console.log(n);
//         break;
//     }
// }

// const myArray = [10, 20, 30, 50, 235, 3000];
// for(let i = 0; i < myArray.length; i++) {
//     const firastArrayElement = myArray[i].toString();
//     if (
//         firastArrayElement[0] === "1" ||
//         firastArrayElement[0] === "2" ||
//         firastArrayElement[0] === "5"
//         ) {
//             console.log(firastArrayElement);
//         }
// }

// console.log(myArray[6]);


// const myString = "12345";
// switch (myString[0]) {
//     case "1":
//     console.log("да");
//     break;
//     case "2":
//     console.log("да");
//     break;
//     case "3":
//     console.log("да");
//     break;
//     default:
//     console.log("нет");
//     break;
// }

const myVar = "123222";
let result1 = 0;
let result2 = 0;
for (let i = 0; i < myVar.length; i++) {
    if (i <= 2) {
        result1 += +myVar[i];
    } else {
        result2 += +myVar[i]
    }
}
result1 === result2 ? console.log("да"):  console.log("нет");