// console.log('added somthing');
document.getElementById('button-login').addEventListener('click', function (e) {
  e.preventDefault();
  const phoneNumber = document.getElementById('PHONE-NUMBER').value;
  const pinNumber = document.getElementById('pin-number').value;
 
 // bad way to vailded
 if (phoneNumber === '5' && pinNumber === '1234') {
   console.log('you are log in');
   window.location.herf = '/home.html';
 } else {
   alert('enter your right pin and phonenumber')
 }
});
