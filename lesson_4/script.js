'use strict';
let options = {
    width: 1024,
    height: 1024,
    name: "test",
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log('Свойство ' + key + ' имеете значение ' + options[key]);
}

console.log(Object.keys(options).length);

// let arr = ["first", 2, 3, "four", 5];


// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + " (массив: " + mass + ')');
// });
// console.log(arr);

// let mass = [1, 3, 4, 6, 7];

// for (let key of mass) {
//     console.log(key);
// }

let ans = prompt("", ""),
    arr = [];

arr = ans.split(',');
console.log(arr);












// let money, time;

// function start() {
//     money = +prompt("Ваш бюджет на месяц?", "");
//     time = prompt("Введите дату в формате YYYY-MM-DD", "");

//     while(isNaN(money) || money == "" || money == null) {
//         money = +prompt("Ваш бюджет на месяц?", "");
//     }
// }
// start();

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: true
// };


// function chooseExpenses() {
//     for (let i = 0; i < 2; i++) {
//         let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//             b = +prompt("Во сколько обойдется?", "");
        
//         if ( (typeof(a))=== 'string' && a != null && b != null
//             && a != '' && b != '' && a.length < 50) { 
//             console.log("done");
//             appData.expenses[a] = b;
//         } else {
//             i--;
//         }
//     }
// }
// chooseExpenses();

// function detectDayBudget () {
//     appData.moneyPerDay = (appData.budget / 30).toFixed();

//     alert("Ежедневный бюджет: " + appData.moneyPerDay);
// }
// detectDayBudget();

// function detectLevel() {
//     if(appData.moneyPerDay < 100) {
//         console.log("Минимальный уровень достатка")
//     } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//         console.log("Средний уровень достатка");
//     } else if (appData.moneyPerDay > 2000) {
//         console.log("Высокий уровень достатка");
//     } else {
//         console.log("Произошла ошибка")
//     }
//         console.log(appData)
// }
// detectLevel();

// function checkSavings() {
//     if (appData.savings == true) {
//         let save = +prompt("Какова сумма накоплений?"),
//             percent = +prompt("Под какой процент?");

//         appData.monthIncome = save/100/12*percent;
//         alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
//     }
// }
// checkSavings();

// let a,b,c;
// function chooseOptExpenses() {
//         a = prompt("Статья необязательных расходов?", "");
//         b = prompt("Статья необязательных расходов?", "");
//         c = prompt("Статья необязательных расходов?", "");
//         appData.optionalExpenses [1] = a;
//         appData.optionalExpenses [2] = b;    // если есть более легкие варианты 
//         appData.optionalExpenses [3] = c;    // записи этой функции, то прошу рассказать:)
// }
// chooseOptExpenses();
