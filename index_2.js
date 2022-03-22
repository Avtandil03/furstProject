"use strict";
let money = +prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

let i = 0;
while (i<2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдется?", "");

  if (
    typeof a === "string" &&
    typeof b === "string" &&
    typeof a != null &&
    typeof b != null &&
    a != "" &&
    b != "" &&
    a.length < 5 &&
    b.length < 5
  ) {
    console.log("Done");
    appData.expenses[a] = b;
  } else {
    console.log("err");
  }
  i++;
}

//for (let i = 0; i < 2; i++) {}

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);
