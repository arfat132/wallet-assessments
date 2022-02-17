//expenses
let foodvalue = document.getElementById('food-value');
let rentvalue = document.getElementById('rent-value');
let clothesvalue = document.getElementById('clothes-value');

// balance
let incomeBalance = document.getElementById('income-balance');
let expensesBalance = document.getElementById('expenses-balance');
let currentBalance = document.getElementById('balance');

//saving
let savingValue = document.getElementById('saving-value');
let savingAmount = document.getElementById('saving-amount');
let remainingAmount = document.getElementById('remaining-amount');

function addMoney(currentAmount, newAmount, secondAmount, thirdAmount) {
    return Number(currentAmount) + Number(newAmount) + Number(secondAmount) + Number(thirdAmount);
  }
  
  function getMoney(currentAmount, newAmount) {
    return Number(currentAmount) - Number(newAmount);
  }

  function calculate(){
      const totalExpenses = addMoney(expensesBalance.innerText, foodvalue.value, rentvalue.value, clothesvalue.value);
      expensesBalance.innerText = totalExpenses;

      const balance = getMoney(incomeBalance.value, totalExpenses );
      currentBalance.innerText = balance;

  }

  function saving(){
      const savings = incomeBalance.value * savingValue.value;
      const savingsAmount = savings / 100;
      savingAmount.innerText = savingsAmount;
   
      const remainingBalance = getMoney(currentBalance.innerText, savingsAmount);
      remainingAmount.innerText = remainingBalance;





  }
