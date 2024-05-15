"use strict"

document.getElementById('annuityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let monthlyPayout = parseFloat(document.getElementById('monthlyPayout').value);
    let interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    let years = parseInt(document.getElementById('years').value);
  
    let presentValue = calculatePresentValue(monthlyPayout, interestRate, years);
    
    document.getElementById('result').textContent = 'Needed today: $' + presentValue.toFixed(2);
    
    document.getElementById('results').style.display = 'block';
  });
  
  function calculatePresentValue(monthlyPayout, interestRate, years) {
    let monthlyInterestRate = interestRate / 12;
    let totalMonths = years * 12;
    let presentValue = 0;
  
    for (let i = 1; i <= totalMonths; i++) {
      presentValue += monthlyPayout / Math.pow(1 + monthlyInterestRate, i);
    }
  
    return presentValue;
  }
  
/*
3000
2.5
20

566141.46
*/