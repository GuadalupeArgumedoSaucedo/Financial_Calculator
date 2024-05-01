"use strict"

document.getElementById('interestForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Retrieve input values
    const deposit = parseFloat(document.getElementById('deposit').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseInt(document.getElementById('years').value);
  
    // Calculate future value and interest earned
    const futureValue = deposit * Math.pow(1 + rate / 365, years * 365);
    const interestEarned = futureValue - deposit;
  
    // Display results
    document.getElementById('futureValue').textContent = '$' + futureValue.toFixed(2);
    document.getElementById('interestEarned').textContent = '$' + interestEarned.toFixed(2);
    document.getElementById('result').style.display = 'block';
  });
  