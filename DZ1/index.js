let myMessage = 'HELLO WORLD!!!';
console.log(myMessage);

//Число, число с плавующей точкой, bigint

let a = 1,
    b = 2,
    c = 5,
    d = 'Текст';
console.log(a + b);

let l = 0.45, //число с плавающей точкой
    k = 0.25;
console.log(l * k);

console.log(d + ' next');

let y = 0, 
    p = 3, 
    x = y = p; // Присваивание  значений по  цепочки с право  на лево

console.log(x);

const bigNamber = 86534689239845634567n // BigInt

// Строка

let str = 'Строка в одинарных кавычках',
    str2 = "Строка в двойных кавычках",
    str3 = `Строка в обратных кавычках`;

console.log(str);    
console.log(str2);    
console.log(str3);    

// Булевый тип true false

let checked = true;
console.log(checked);

checked = false;
console.log(checked);

// Массив

let all = [1],
    all2 = [1, 2, 3, 'Текст'];
console.log(all, all2);    
    
// Объекты object

let object = {
    name: 'Alen',
    phone: '+7830-845-83-16'
}
console.log(object);

//null

let q = null;
console.log(q);

//undefined Присваевается JAVA существует ли переменная или нет

let t;
console.log(t);

r = undefined;
console.log(r);

//typeof

let num = 20,
    numFloat = 14.76,
    string1 = 'Строка 1', // строка
    string2 = "Строка 2",
    string3 = `Строка 3`,
    confirm1 = true, // булевый тип
    confirm2 = false,
    fir = [1, 'qwest', 3, 22], //массив
    j = null,
    z; // undefined

//typeof

console.log(num, typeof num);
console.log(numFloat, typeof numFloat);
console.log(string1, typeof string1);
console.log(string2, typeof string2);
console.log(string3, typeof string3);
console.log(confirm1, typeof confirm1);
console.log(confirm2, typeof confirm2);
console.log(fir, typeof fir);
console.log(j, typeof j);
console.log(z, typeof z);


// Изменить переменную с типом object объявленную через const

const userName = {
    name: 'Alex',
    age: 30,
    massage: 'Живи на полную'
}
console.log(userName);

userName.age = 18;
console.log(userName);

// Изменить переменную с типом object объявленную через let

//let firstName = {
    //name2 = "Victor"
//}
//firstName.name2 = "Alex"; // выдает ошибку, const защищает только саму переменную firstName
//console.log(firstName.name2);



