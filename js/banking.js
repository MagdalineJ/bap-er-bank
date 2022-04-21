// handle deposit button and update deposit
    document.getElementById('deposit-btn').addEventListener('click',function(){
    // console.log('deposit button clicked')
    // finding the deposit amount
    const depositInput = document.getElementById('depositAmount');
    const newdepoAmounttext = depositInput.value;
    const newdepoAmount=parseFloat(newdepoAmounttext);
    // console.log(depoAmount);
    // getting the current depo value in deposit board
    const deposittotal=document.getElementById('totaldepo');
    // console.log(deposittotal.innerText);
    // (don't get confused with value and innertext , notice it is in heading tag)
   
    const previousDepotext= deposittotal.innerText;
    const previousDepoAmount=parseFloat(previousDepotext)
    const newDepoTotal= previousDepoAmount + newdepoAmount;

    deposittotal.innerText=newDepoTotal;

// update the total balance on the board

const balance = document.getElementById('balance-total');
const balanceTotal= balance.innerText;
const previousBalance = parseFloat(balanceTotal);
// console.log(previousBalance);
const currentBalance= previousBalance+ newdepoAmount;
balance.innerText=currentBalance;

    // clear the deposit input field
    depositInput.value='';



})

// handle withdrawal

// add event listener
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawInput= document.getElementById('withdrawAmount');
    const withdrawInputText= withdrawInput.value;
// console.log(withdrawInputText);
const withdrawAmount= parseFloat(withdrawInputText);

// set withdraw board
const withdrawTotal = document.getElementById('withdrawal');
const withdrawalText = withdrawTotal.innerText;
const previousWithdrawal= parseFloat(withdrawalText);
const withdrawal = withdrawAmount + previousWithdrawal;

withdrawTotal.innerText=withdrawal;


// update total balance

const balance = document.getElementById('balance-total');
const balanceTotal= balance.innerText;
const previousBalance = parseFloat(balanceTotal);
// console.log(previousBalance);
const currentBalance= previousBalance - withdrawAmount ;
balance.innerText=currentBalance;



// clear withdraw input
withdrawInput.value='';


})


// you have to create  own js files or write on each file in order to let the scripts work
