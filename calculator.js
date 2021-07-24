window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
      setupIntialValues();
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        //alert("test");
          update();
      });
    }
  });
  
  function getCurrentUIValues() {
    return {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    }
  }
  
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  function setupIntialValues() {
    const amount = document.querySelector('#loan-amount').value;
    const years = document.querySelector("#loan-years").value;
    const rate = document.querySelector("#loan-rate").value;
    console.log(amount);
     
    calculateMonthlyPayment({amount,years,rate});
  }
  
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
    const curPayment = getCurrentUIValues();
    updateMonthly(calculateMonthlyPayment(curPayment));
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
    const principal = parseFloat(values.amount);
    const interest = parseFloat(values.rate) / 100 / 12;
    const payments = parseFloat(values.years) * 12;
    const divider = Math.pow(1 + interest, -payments); 
    const monthlyPayment = ((principal*interest)/(1-divider)).toFixed(2);
    console.log(monthlyPayment);
    return(parseFloat(monthlyPayment));
    
    //return monthlyPayment;
  }
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
    const sp = document.getElementById('monthly-payment');
    sp.innerText =  "$"+ monthly;
   

  }
  