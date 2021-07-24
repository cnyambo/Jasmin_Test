describe("Helpres test to sum ", function() {
    beforeEach(function () {
        billAmtInput.value = 500;
        tipAmtInput.value = 40;

      });
    it('should calculate the total sum for the payments', function () {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(sumPaymentTotal('billAmt')).toEqual(500);

    });

    it('should calculate the percentage for the tip', function () {
        
        expect(calculateTipPercent(100,20)).toEqual(20);

    });


    afterEach(function() {
        total = 0;

        // teardown logic
    });
});