document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoneyinput = document.getElementById('input-add-money').value;
    console.log(addMoneyinput)
    // console.log('money add butn')
    const pinNumberInput = document.getElementById('add-pin').value;
    console.log(pinNumberInput, addMoneyinput);
    if (pinNumberInput === '1234') {
        console.log('add money')
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        
        const addMoneyNumber = parseFloat
        (addMoneyinput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber ;

        console.log(newBalance);
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {

        alert('failed to add money! please try again.')
    }

})