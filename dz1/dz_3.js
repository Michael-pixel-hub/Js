/*
1. 10 складываем с 10 получаем 20
2. 20 приводим к строке
3. "20" складываем с "10" получаем "2010"
4. "2010" присваиваем в переменную resaultOne
5. с помощью console.log выводим resaultOne в консоль
*/
let resaultOne = 10 + 10 + "10";
console.log(resaultOne);

/* 
1. Приводим к строке два числа 10
2. "10" складываем с "10" и "10" получаем "101010"
3. "2010" присваиваем в переменную resaultTwo
4. с помощью console.log выводим resaultTwo в консоль
*/
let resaultTwo = 10 + "10" + 10; 
console.log(resaultTwo);

/* 
1. Приводим строку 10 к числу 10, с помощью унарного плюса
2. 10 складываем с 10 и 10 получаем 30
3. 30 присваиваем в переменную resaultThree
4. с помощью console.log выводим resaultThree в консоль
*/
let resaultThree = 10 + 10 + +"10";
console.log(resultThree);

/* 
1. Приводим пустую строку к числу -0
2. Делим 10 на -0 получаем -infinity
3. -infinity присваиваем в переменную resaultFour
4. с помощью console.log выводим resaultFour в консоль
*/
let resaultFour = 10 / -""; 
console.log(resaultFour);

/*
1. Пытаемся привести число строку "2,5" к числу, получаем NaN
2. NaN присваиваем в переменную resaultFour
3. с помощью console.log выводим resaultFour в консоль
*/
let resaultFive = 10 / +"2,5";
console.log(resaultFive);