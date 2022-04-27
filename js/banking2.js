

function updateAmount(inputID){
    const InputText=document.getElementById(inputID);
    const Input=parseFloat(InputText.value);
    // console.log(depositInput);
    
    InputText.value='';
     return Input;

}
////////////////////////////////
function totalUpdate(totalFieldID,Input){
    const BoardText=document.getElementById(totalFieldID);
    // const Board=BoardText.innerText;
    boardAmount=parseFloat(BoardText.innerText);
    
    // console.log(depositAmount);
   const newAmount= Input + boardAmount;
   BoardText.innerText= newAmount;

}
//////////////////////////////////
function currentBalance(){
    const balance=document.getElementById('balance-total');
    const previousBalanceText = balance.innerText;
    previousBalance=parseFloat(previousBalanceText);
    return previousBalance;
   
}


/////////////////////////////////
function updatedBalance(Amount,isadd){
    const balance=document.getElementById('balance-total');
  previousBalance=currentBalance();
  if(isadd==true){
   balance.innerText= previousBalance + Amount;
  }
  else{
      balance.innerText=previousBalance - Amount;
  }

}

///////////////////////////////
document.getElementById('deposit-btn').addEventListener('click',function(){
//    update deposit
   
   const newDepositAmount= updateAmount('depositAmount');
   if(newDepositAmount>0){ 
        totalUpdate('totaldepo',newDepositAmount)
   //  update balance
    updatedBalance( newDepositAmount,true);} 
})
/////////////////////////////////
document.getElementById('withdraw-btn').addEventListener('click',function(){
    //    update withdrawal
const newWithdrawAmount=updateAmount('withdrawAmount');
const preBalance= currentBalance();
if(newWithdrawAmount>0  && newWithdrawAmount<preBalance){
    totalUpdate('withdrawal',newWithdrawAmount)
// update balance
updatedBalance(newWithdrawAmount,false);}
})
