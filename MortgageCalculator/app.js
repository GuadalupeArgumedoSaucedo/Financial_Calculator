"use strict"

    document.getElementById('mortgageForm').addEventListener('submit', function(event) {
        event.preventDefault();
        calculateMortgage();
    });
    
    function calculateMortgage() {
        let p = Number(document.getElementById("loanField").value);
        let r = Number(document.getElementById("intrestField").value)/100;
        let t = Number(document.getElementById("yearsField").value);
        let n = 12;
    
        let L_months = t * 12; 
        let i_monthly = r / 12; 
        let monthlyPayment = p * (i_monthly / (1 - Math.pow((1 + i_monthly), -L_months)));
        let totalIntrest = (monthlyPayment * n * t) - p;

        document.getElementById('resultm').textContent = 'Monthly Payment: $' + monthlyPayment.toFixed(2);
        document.getElementById('resulti').textContent = 'Total Interest Paid: $' + totalIntrest.toFixed(2);
    
        document.getElementById('results').style.display = 'block';
    }
    