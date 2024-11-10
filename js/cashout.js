document.getElementById('button-cashout-money').addEventListener('click',function(e){
 e.preventDefault();
 const cashOut = document.getElementById('cashout-number').value;
 const pinNumber = document.getElementById('cashout-pin-number').value;
 if (pinNumber === '1234') {
  const balance = document.getElementById('account-balance').innerText;
  const balanceNumber = parseFloat(balance);
  const newBalance = balance - cashOut;
  document.getElementById('account-balance').innerText = newBalance;
  console.log('money is reduceing');
 } else {
  alert('Failed to cashout,plese try again. ');
 }

});
