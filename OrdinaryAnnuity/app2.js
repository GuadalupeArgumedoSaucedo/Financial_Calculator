document.getElementById('annuityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var monthlyPayout = parseFloat(document.getElementById('monthlyPayout').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    var years = parseInt(document.getElementById('years').value);
  
    var presentValue = calculatePresentValue(monthlyPayout, interestRate, years);
    
    document.getElementById('result').innerHTML = 'To fund an annuity that pays $' + monthlyPayout.toFixed(2) + ' monthly for ' + years + ' years and earns an expected ' + (interestRate * 100) + '% interest, you would need to invest $' + presentValue.toFixed(2) + ' today.';
  });
  
  function calculatePresentValue(monthlyPayout, interestRate, years) {
    var monthlyInterestRate = interestRate / 12;
    var totalMonths = years * 12;
    var presentValue = 0;
  
    for (var i = 1; i <= totalMonths; i++) {
      presentValue += monthlyPayout / Math.pow(1 + monthlyInterestRate, i);
    }
  
    return presentValue;
  }