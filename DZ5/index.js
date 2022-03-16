// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром

// let squareNumber = function(num) {
//     return num * num;
// };
// console.log(squareNumber(10));

// Сделайте функцию, которая возвращает сумму двух чисел

// let sum = function(a, b) {
//     return a + b;
// };
// console.log(sum(5, 5));

// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

// let number = function(a, b, c) {
//     return (a - b) / c;
// };
// console.log(number(10, 2, 4));

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

// ??????????????????????

// let obj = {1: "Пн", 2: "Вт", 3: "Ср", 4: "Чт", 5: "Пт", 6: "Сб", 7: "Вс"};
//     function day (key) {
//      return obj[key];
// }
// console.log(day(2));

// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

// let number = function (num1, num2) {
//     return num1 == num2;
//     }
    
//     console.log(number(1, 1));

// Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.

// let number = function(num1, num2) {
//     return num1 + num2 > 10;
// };
// console.log(number(10, 5));

// Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

// let number = function(num) {
//     return num < 0;
// };
// console.log(number(-10));

// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// let isNumberInRange = function(num) {
//     return num > 0 && num < 10;
// };
// console.log(isNumberInRange(8));

// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

// let isNumberInRange = function(num) {
//     return num > 0 && num < 10;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let newArr = [];
//     for (i = 0; i < arr.length; i++) {
//         if (isNumberInRange(arr[i])) {
//             newArr.push(arr[i]);
//     }
// };
// console.log(isNumberInRange(i));

// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

let getDigitSum = function(num) {
    let num = String(num);
    let sum = 0;
    for (i = 0; i < num.length; i++) {
         sum += Number(num[i]);
}
return sum;
}

