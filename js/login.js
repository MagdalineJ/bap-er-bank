document.getElementById('loginSubmit').addEventListener('click',function(){
    // console.log('button clicked')
const emailfield=document.getElementById('userEmail');
const userEmail=emailfield.value;
// console.log(userEmail);
const passwordfield=document.getElementById('userPass');
const userPassword=passwordfield.value;
// console.log(userPassword);
// check email and pass, not ideal way
if(userEmail == 'sontan@bap.com' && userPassword == 'secret'){
    // console.log('valid user');
window.location.href='banking.html'

}

})

