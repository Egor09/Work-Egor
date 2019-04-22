'use strict';

var money = ("Ваш бюджет на месяц?");
var time = ("Введите дату в формате YYYY-MM-DD");
var mustPrice = ("Введите обязательную статью расходов в этом месяце");
var price = ("Во сколько обойдется?");
var budgetPerDay;

let a = prompt(money);
let b = prompt(time);
let d = prompt(mustPrice);
let p = prompt(price);

console.log(a);
console.log(b);
console.log(d);
console.log(p);

let appData = {
    budget: {
        a
    },
    timeData: {
        b
    },
    expenses: {  d, p, d, p
    },
    optionalExpenses: {},
    income: {},
    savings: false
};
console.log(appData);

budgetPerDay = a / 30;
alert(budgetPerDay);



