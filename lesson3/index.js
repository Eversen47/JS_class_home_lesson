//Примитивные типы даных:

//Number
//console.log(1 / 0);
//console.log(typeof NaN); //NaN = Not a Number (не  число) но тип NaN = число;

// оПератор typeof показывает тип  данных, указанные после typeof;

// String

//const myString = "строка";

//const anotherString = 'текст: "текст" текст';

//const  templateString = `шаблонная строка ${anotherString}`;

//console.log(templateString);

// Boolean

//const isAdmin = true;
//const isUser = false;

//Null

//const emptyVariable = null;

//undefined
//const userName;
// console.log(userName);

//Непримитивные типы данных;
// Object - обьект


// const someName = "Petya";

// const user = {
//     Name: 'Vasya',
//     lastName: 'Ivanov',
//     age: 23,
//     citizenship: 'Russia',
// };

// const userName = user.Name;

// console.log(userName);

//Оператор typeof

// typeof null - всегда объект! Ошибка JS

// console.log(typeof null);

// Преобразование типов данных
// Строковое преобразование

// const myVar = true;

// const myVarToString = String(myVar);
// console.log(myVarToString);

// const myVar = "123";

// const myVarToNumber = +myVar;

// console.log(typeof myVarToNumber);

//логическое преобразование

// const myVar = "0";

// console.log(!!myVar); 
//!- смотреит на myVar привел ко лжи. !! - приводит обратно к правде.

// console.log(15 % 4);

// Метематические операторы
// Бинарный плюс

// const myNumber = 1;
// const newNUmber = 2;
// const myString = "строка";

// console.log(myNumber + myString);

//Стравнение строк

// const string1 =  'строка';
// const string2 =  'солнце';

// console.log(string1 == string2);
//unicode - почитать

// const string1 =  'сТрока';
// const string2 =  'солнце';

// console.log(string1 > string2);

// const userTypes ={
//     admin:  "admin",
//     user: "user",
//     teacher:  "teacher",
//     contentManager: "contentManager",
// }

// const  serverDataUserTypr = "user";

// if (serverDataUserTypr !== userTypes.admin)  {
//     console.log("показать ограниченные контент");
// } else {
//     console.log("показать весь контент");
// }

// const myNumber = 1;
// const myString = "1";

// console.log(myNumber == myString);

// console.log(null == "\n0\n");

// console.log("111\n0\n333");

// console.log(null === +"\n0\n");

// console.log(""+1 +0);
// console.log("" -1 +0);

console.log(5>4);

console.log(true + false);

console.log(6/"3");

console.log("2"*"3");

console.log(4+5+"px");

console.log("$"+4+5)

console.log("4"-2);

console.log("4px"-2);

console.log(7/0);

console.log("-9"-5);

console.log(null+1);

console.log(undefined+1);

console.log("\t\n"-2);

console.log(typeof +"\t\n")

