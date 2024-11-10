document.getElementById('button-add-money').addEventListener('click', function(e){
 e.preventDefault();

 const addMoney = document.getElementById('Amount-number').value;
 const pinNumber = document.getElementById('pin-number').value;
 if (pinNumber === '1234') {
  console.log('adding money to your account');
  const balance = document.getElementById('account-balance').innerText;
  const addNumber = parseFloat(addMoney);
  // console.log(addNumber);
  const blanaceNumber = parseFloat(balance);
  // console.log(blanaceNumber);
  const newBalance = addNumber + blanaceNumber;
  // console.log(newBalance);
  document.getElementById('account-balance').innerText = newBalance;
 } else {
  alert('failed to add money')
 }
})