// if (4 > 3) {
//     console.log("Верно! 4 больше 3")
// };

// if (4 > 3) {
//     console.log("Верно! 4 больше 3")
// } else {
//     console.log("test");
// }


//  const myVar1 = 10;
// const myVar2 = 10;
 
// if (myVar1 > myVar2) {
//      console.log(`${myVar1} больше ${myVar2}`);
//  } else if (myVar1 < myVar2) {
//      console.log(`${myVar1} меньше ${myVar2}`);
//  } else {
//      console.log("end");
//  }

// const myVar1 = 10;const myVar2 = 10;
 
// if (myVar1 > myVar2) {
//       console.log(`${myVar1} больше ${myVar2}`);
//   } else {
//       console.log("end");
//   }
// let result = myVar1 > myVar2 ? console.log(true) : console.log(false); // тернальный оператор


// конструкция switch

// const userRole = '234';

// switch(userRole) {
//     case 'student':
//         console.log("Текущий пользователь - student");
//         break;
//     case 'admin':
//         console.log("Текущий пользователь админ");
//         break;
//     case "normal_user":
//         console.log("Текущей пользователь - normal_user");
//         break;
//         default:
//             console.log("Нет тикого типа пользователя");
//             break;    
// }


// логические операторы
// && логическое и - возвращает первое значение false

// || логическое или - возвр первое значение true
// ! лог не

// console.log(1 || 0 || "");
// console.log(1 && 0 && "строка" && 0 && 1);

// console.log((1 && 2) || (4 && 0));

// что делает js пошагово
// if (1 && 0) {
//     console.log(result);
// }
// 1. Находит  ключевое слово if понимает что дальше условие
// 2. внутри условие находится логическое и - &&
//  3. оператор приводит значение булеву типу - true/fakse (важно: делет это под копотом)
// 4. 1->true 0-> false && возвращение значение , котровое явл false при приведениею к булев тип
//  5. в данном случае мы получаем 0 который приводит в булев тип блокам if

//  логическое  не
// 1. js приводит значение после: к к булеву типу
// 2. ! меняет получение тип на противоположный
// const myVar = !5;

// console.log(myVar);


// console.log(null || 0 || "" || undefined); // выдаёь последнее значение птосучто все false
// console.log('яблоко' && true && null && 1); //false
// console.log(0  ||  (true  && "123") ||  null); //true
// console.log((0 && true) || ("123" && null)); // сравнение 0 и тру - возвращается 0, 123 && null - возвращается null, 0 && null логическое или ищет первое true не находит значит отдается последний false
// console.log(!0 && !!1); //true 
// console.log(!(null || (!"апельсин" && true))); //true/ апельсин приводится к булевый тип как тру ! меняется на false, при операторе и получаем первое значение false. оператор && c null c оператором фолс и получаем фолс. ! меняетна true
// практика 1
// const intervalOne = 1115;
// const intervalTwo = 8;
// const intervalThree = 18;

// if (intervalOne > intervalTwo &&   intervalOne > intervalThree) {
//     console.log(`${intervalOne} - самый большой отрезок`);
// } else if (intervalTwo > intervalOne && intervalTwo > intervalThree) {
//     console.log(`${intervalTwo} - самый блольшой отрезок`);
// } else if (intervalThree > intervalOne && intervalThree > intervalTwo) {
//     console.log(`${intervalThree} - самый большой отрезок`);
// }

// практика 2
// const  currentTmp = 0;

// if (currentTmp < -30) {
//     console.log("оставайтесь дома");
// } else if (currentTmp > -30 && currentTmp <= -10) {
//     console.log("сегодня холодно");
// } else if (currentTmp > -10 &&  currentTmp <= +5) {
//     console.log("не холодно");
// } else if (currentTmp > +5 && currentTmp <= +15) {
//     console.log("тепло");
// } else if (currentTmp > +15 && currentTmp <= +25) {
//     console.log("очень тепло");
// } else if (currentTmp > +25 && currentTmp <= +35) {
//     console.log("жарко");
// } else {
//     console.log("пекло")
// }

// циклы
// let  myVar = 0;
// while (myVar >= 0  &&  myVar <= 10) {
//     console.log((myVar += 1)); //myVar=myVAr +1
// }

//for
// let  endOfloop = 10;
// for(let counter = 0; counter <= myVar; counter++) {
//   console.log(counter); 
//   if (counter  === 5) {
//       break;
//   }
// }

// задача 1 решить через while d0-while for

//  задача 2 
// let carsAmount = 60;//n
// const ninCarsAmount = 10;//m

// задача 3 
// год  номер которого кратен 400 - высокосный
// остальные года номер  котрых кратен 100 - невысокосный (1700 1800 1900 2100 2200 2300)
// остальныее годы номер которыхкратен 4 - высокосный

// const startYear = 1800;
// const end =2020;

// let leapYearsAmount = 0;

// 1.  вывести в консоль заданную строку  N раз

// const iterationText = "Итерация";

//while сначало проверяет условие
// const limit = 5;
// let counter = 1;

// while  (counter <=5) {
//     console.log(`$(iterationText) - $(counter)`);
//     counter++;
// }

// do { //выполнит действие  даже если условие  false
//    console.log(`$(iterationText) - $(counter)`);
//    counter++;
// } while (counter <= limit);

//for
// for (let counter = 1; counter <= limit; counter++) {
//     console.log(`$(iterationText) - $(counter)`);
// }

//2. Автомобили
// let carsAmount = 60;//n
// const minCarsAmount = 10;//m

// for (let day = 1; carsAmount > minCarsAmount; day++) {
//     carsAmount /= 2;
//     if (carsAmount < minCarsAmount) {
//         console.log(`На ${day} день`);
//     }
// }

//3. высокосный

// const startYear = 1800;
// const endYear =2020;

// let leapYearsAmount = 0;
// const firstSpaceTripYear = 1961;

// for (let counter = startYear; counter <= endYear; counter++) {
//     if (counter === firstSpaceTripYear) {
//         console.log(`${firstSpaceTripYear} - первый полёт  в космос`);
//         console.log(`Количество итераций - ${counter - startYear}`);
//         break;
//     }
// }
// for (let year = startYear; year <= endYear; year++)  {
//     if (year % 400 === 0) {
//         console.log(year);
//         leapYearsAmount += 1;
//     }
// }

// for (let year = startYear; year <= endYear; year++)  {
//     if (year % 400 === 0 || (year % 4 ===0 && year % 100 !== 0)) {
//         console.log(year);
//         leapYearsAmount += 1;
//     }
//     if (year === endYear) {
//         console.log(`Колличество высокосных лет - $(leapYearsAmount)`);
//         console.log(`количество итераций - ${year - startYear}`);
//     }
// }
