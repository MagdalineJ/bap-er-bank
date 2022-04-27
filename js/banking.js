function getInputValue(inputID){
    const inputField= document.getElementById(inputID);
    const inputAmounttext = inputField.value;
    const amountValue=parseFloat(inputAmounttext);
    
     // clear the deposit input field
     inputField.value='';

    return amountValue;
}

function totalUpdate(totalFieldID, amount){
    // debugger;
    const totalAmount=document.getElementById(totalFieldID);
    const previousTotaltext= totalAmount.innerText;
    const previousTotal=parseFloat(previousTotaltext)
    
    const newTotal= previousTotal+ amount;
    totalAmount.innerText=newTotal;
    

}

function currentBalance(){
    const balance = document.getElementById('balance-total');
    const balanceTotal= balance.innerText;
    const previousBalance = parseFloat(balanceTotal);
    return previousBalance;
}

function updateBalance(amount,isAdd){
    const balance = document.getElementById('balance-total');
// const balanceTotal= balance.innerText;
// const previousBalance = parseFloat(balanceTotal);
const previousBalance = currentBalance();
if(isAdd == true){
    balance.innerText= previousBalance + amount;
     }
else{
    balance.innerText= previousBalance - amount;
}


}



// handle deposit button and update deposit
    document.getElementById('deposit-btn').addEventListener('click',function(){
    // console.log('deposit button clicked')
    // finding the deposit amount


    // const depositInput = document.getElementById('depositAmount');
    // const newdepoAmounttext = depositInput.value;
    // const newdepoAmount=parseFloat(newdepoAmounttext);
    // console.log(newdepoAmount);


    // getting the current depo value in deposit board
    // const deposittotal=document.getElementById('totaldepo');
    // console.log(deposittotal.innerText);
    // (don't get confused with value and innertext , notice it is in heading tag)
   
    // const previousDepotext= deposittotal.innerText;
    // const previousDepoAmount=parseFloat(previousDepotext)
    // const newDepoTotal= previousDepoAmount + newdepoAmount;

    // deposittotal.innerText=newDepoTotal;



// update the total balance on the board

// const balance = document.getElementById('balance-total');
// const balanceTotal= balance.innerText;
// const previousBalance = parseFloat(balanceTotal);
// // console.log(previousBalance);
// const currentBalance= previousBalance+ newdepoAmount;
// balance.innerText=currentBalance;

const newdepoAmount= getInputValue('depositAmount');
if(newdepoAmount>0){
     totalUpdate('totaldepo',newdepoAmount);  
    updateBalance(newdepoAmount, true);
}

})

// handle withdrawal

// add event listener
document.getElementById('withdraw-btn').addEventListener('click',function(){
//     const withdrawInput= document.getElementById('withdrawAmount');
//     const withdrawInputText= withdrawInput.value;
// // console.log(withdrawInputText);
// const withdrawAmount= parseFloat(withdrawInputText);



// set withdraw board
// const withdrawTotal = document.getElementById('withdrawal');
// const withdrawalText = withdrawTotal.innerText;
// const previousWithdrawal= parseFloat(withdrawalText);
// const withdrawal = withdrawAmount + previousWithdrawal;

// withdrawTotal.innerText=withdrawal;




// update total balance

// const balance = document.getElementById('balance-total');
// const balanceTotal= balance.innerText;
// const previousBalance = parseFloat(balanceTotal);
// // console.log(previousBalance);
// const currentBalance= previousBalance - withdrawAmount ;
// balance.innerText=currentBalance;

const withdrawAmount= getInputValue('withdrawAmount');
const currentbalance=currentBalance();
if(withdrawAmount>0 && withdrawAmount< currentbalance){
    totalUpdate('withdrawal',withdrawAmount);
    updateBalance(withdrawAmount,false);
}
if(withdrawAmount>currentbalance)
{console.log('you r bankrupt');}
})



