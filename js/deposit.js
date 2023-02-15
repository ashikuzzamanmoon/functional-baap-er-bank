// DRY --> Do not repeat yourself
document.getElementById('btn-deposit').addEventListener('click', function () {
    /*
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
    const newDipositAmount = getInputFieldValueById('deposit-field');
    /*
    1. get previous total deposit by id
    */
    const previousDepositTotal = getTextElementValueById('deposit-total');

    //   calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDipositAmount;

    // set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);

    // get previous balance by using the function 
    const previousBalancetotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalancetotal + newDipositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);


})