document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault()
    console.log('cashout')

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut)
    const pinNumber = document.getElementById('input-cash-out-pin').value;

    console.log(cashOut, pinNumber)
    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - cashOutNumber;
        document.getElementById('account-balance').innerText = newBalance;
       
    }
    else{
        console.log('faild')
    }
})