
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 1000,
    years: 5,
    rate: 4.5 
  };
  expect(calculateMonthlyPayment(values)).toEqual(18.64);
    // ...
  });
  
  
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 2000,
      years: 10,
      rate: 5.5 
    };
    expect(calculateMonthlyPayment(values)).toEqual(21.71);
    // ..
  });
  
  /// etc
  it("should calculate and return a monthly payment", function() {
    const values = {
      amount: 40000,
      years: 10,
      rate: 14.5 
    };
    expect(calculateMonthlyPayment(values)).toEqual(633.15);
    // ..
  }); 