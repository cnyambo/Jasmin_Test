describe("Payments test", function() {
    beforeEach(function () {
        billAmt.value = 200;
        tipAmt.value = 20;

      });
    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();
    
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('200');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(10);
      });

    it('should create a new payment ', function () {
        let billAmt = 200;
        let tipAmt = 20;
        expect(createCurPayment()).toEqual({billAmt: "200", tipAmt: "20", tipPercent: 10})
        
    });  


 

  afterEach(function() {
    paymentId = 0;
    allPayments={};
    summaryTds.value = '';
    paymentTbody.innerHTML ='';
    // teardown logic
  });

});