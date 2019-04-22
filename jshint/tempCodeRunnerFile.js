var money = ("Ваш бюджет на месяц?");
var time = ('Введите дату в формате YYYY-MM-DD');

let a = prompt(money);
let b = prompt(time);

console.log(a);
console.log(b);


let appData = {
    budget: {
        money: 'Ваш бюджет на месяц?'
    },
    timeData: {
        time: 'Введите дату в формате YYYY-MM-DD'
    },
    expenses: {
        'ответ на первый вопрос': 'ответ на второй вопрос'
    },
    optionalExpenses: {},
    income: {},
    savings: false
};

console.log(appData);