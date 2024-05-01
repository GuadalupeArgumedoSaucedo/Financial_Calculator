"use strict"

document.getElementById('annuityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let monthlyPayout = parseFloat(document.getElementById('monthlyPayout').value);
    let interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    let years = parseInt(document.getElementById('years').value);
  
    let presentValue = calculatePresentValue(monthlyPayout, interestRate, years);
    
    document.getElementById('result').innerHTML = 'To fund an annuity that pays $' + monthlyPayout.toFixed(2) + ' monthly for ' + years + ' years and earns an expected ' + (interestRate * 100) + '% interest, you would need to invest $' + presentValue.toFixed(2) + ' today.';
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
  