'use strict';

 let money = ("Ваш бюджет на месяц?"),
     time = ("Введите дату в формате YYYY-MM-DD"),
     mustPrice = ("Введите обязательную статью расходов в этом месяце"),
     price = ("Во сколько обойдется?"),
     mustPriceSecond = ("Введите обязательную статью расходов в этом месяце"),
     priceSecond = ("Во сколько обойдется?"),
     budgetPerDay;

let a = prompt(money);
let b = prompt(time);
let d = prompt(mustPrice);
let p = prompt(price);
let dd = prompt(mustPriceSecond);
let pp = prompt(priceSecond);

console.log(a);
console.log(b);
console.log(d);
console.log(p);
console.log(dd);
console.log(pp);


let appData = {
    budget: a,
    timeData: b,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
console.log(appData);

appData.expenses[d]=p;
appData.expenses[dd]=pp;

budgetPerDay = a / 30;
alert(budgetPerDay);

console.log(budgetPerDay)
