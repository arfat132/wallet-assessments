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

//error 
let errorIncome = document.getElementById('error-income');
let errorFood = document.getElementById('error-food');
let errorRent = document.getElementById('error-rent');
let errorClothes = document.getElementById('error-clothes');
let expensesError = document.getElementById('expenses-error');
let suficientAmount = document.getElementById('suficient-amount');

//addition function
function addAmount(currentAmount, newAmount, secondAmount, thirdAmount) {
  return Number(currentAmount) + Number(newAmount) + Number(secondAmount) + Number(thirdAmount);
}

//substract function
function substractAmount(currentAmount, newAmount) {
   if(currentAmount>newAmount){
  return Number(currentAmount) - Number(newAmount);
 }
else{
    return ;
}
}

// calculate button
function calculate() {
    const totalExpenses = addAmount(expensesBalance.innerText, foodvalue.value, rentvalue.value, clothesvalue.value);
    if(incomeBalance.value>totalExpenses){
    expensesBalance.innerText = totalExpenses;
    const balance = substractAmount(incomeBalance.value, totalExpenses);
    currentBalance.innerText = balance;
    }else{
    expensesError.style.display = 'block';
    }

  //string error handle
  if (isNaN(incomeBalance.value)) {
    errorIncome.style.display = 'block';
  }
  else if (isNaN(foodvalue.value)) {
    errorFood.style.display = 'block';
  }
  else if (isNaN(rentvalue.value)) {
    errorRent.style.display = 'block';
  }
  else if (isNaN(clothesvalue.value)) {
    errorClothes.style.display = 'block';
  }

  //negative number error handle
  if (incomeBalance.value < 0) {
    errorIncome.style.display = 'block';
  }
  else if (foodvalue.value < 0) {
    errorFood.style.display = 'block';
  }
  else if (rentvalue.value < 0) {
    errorRent.style.display = 'block';
  }
  else if (clothesvalue.value < 0) {
    errorClothes.style.display = 'block';
  }
}

//save button
function saving() {
const savings = incomeBalance.value * savingValue.value;
const savingsAmount = savings / 100;
savingAmount.innerText = savingsAmount;

  //remaining balance 
const remainingBalance = substractAmount(currentBalance.innerText, savingAmount.innerText);
remainingAmount.innerText = remainingBalance;
}
