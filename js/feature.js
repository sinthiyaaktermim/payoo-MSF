document.getElementById('btn-show-cashout').addEventListener('click', function () {
 console.log('show cashout button clicked');
 document.getElementById('cashout-form').classList.remove('hidden');
 document.getElementById('addmoney-form').classList.add('hidden');
});
 document
   .getElementById('btn-show-addmoney')
   .addEventListener('click', function () {
     console.log('show addmoney button clicked');
     document.getElementById('addmoney-form').classList.remove('hidden');
     document.getElementById('cashout-form').classList.add('hidden');
   });
