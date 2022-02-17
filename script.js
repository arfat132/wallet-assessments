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

let errorIncome = document.getElementById('error-income');
let errorFood = document.getElementById('error-food');
let errorRent = document.getElementById('error-rent');
let errorClothes = document.getElementById('error-clothes');
let suficientAmount = document.getElementById('suficient-amount');

function addAmount(currentAmount, newAmount, secondAmount, thirdAmount) {
 return Number(currentAmount) + Number(newAmount) + Number(secondAmount) + Number(thirdAmount);
  }
  
  function substractAmount(currentAmount, newAmount) {
    return Number(currentAmount) - Number(newAmount);
  }

  // calculate button
   function calculate(){
      const totalExpenses = addAmount(expensesBalance.innerText, foodvalue.value, rentvalue.value, clothesvalue.value);
      expensesBalance.innerText = totalExpenses;

      const balance = substractAmount(incomeBalance.value, totalExpenses );
      currentBalance.innerText = balance;
    
      //string error handle
      if(isNaN(incomeBalance.value)){
        errorIncome.style.display = 'block';       
      }
      else if(isNaN(foodvalue.value)){
        errorFood.style.display = 'block';  
      }
      else if(isNaN(rentvalue.value)){
        errorRent.style.display = 'block';  
      }
      else if(isNaN(clothesvalue.value)){
        errorClothes.style.display = 'block';  
      }

     

  }

  //save button
  function saving(){
      const savings = incomeBalance.value * savingValue.value;
      const savingsAmount = savings / 100;
      savingAmount.innerText = savingsAmount
    
    const remainingBalance = substractAmount(currentBalance.innerText, savingsAmount);
    remainingAmount.innerText = remainingBalance;

      
    if (savingAmount.innerText > incomeBalance.value && savingAmount.innerText > currentBalance.innerText) {
      alert('You have not suficient balance')
      savingAmount.innerText = 0 ;
      remainingAmount.innerText = 0 ; 
    }
  }
