
//search for the deposit button by tag name
//better choice may be giving it a class name in HTML and search by that
//query selector returns an object with lots of properties
//including properties to change the value and textContent
//user enters amount into input field and clicks withdraw button
//amount is subtracted from amount in result span
//account can not be overdrawn and request is ignored if amount to be withdrawn is greater than balance
//user enters amount into input field and clicks deposit button
//amount goes into balance span -get the value from the input box
//any further amount entered into field needs to be added if
//deposit button is clicked and shown in span

//Savings
var depositBtn = document.querySelector('.depositBtn');
var saveBal = document.querySelector('.saveBal');
var inputSave = document.querySelector('.inputSave');
var withdrBtn = document.querySelector('.withdrBtn');

saveBal.textContent = 0;

var depositIntoSavings = function() {
  var balance = Number(saveBal.textContent) + Number(inputSave.value);
    saveBal.textContent = balance;
  saveBackground();
}
depositBtn.addEventListener('click', depositIntoSavings);

var withdrawSavings = function() {
  var balance = ((Number(saveBal.textContent) - Number(inputSave.value)))
    if (balance > -1) {
      saveBal.textContent = balance;
      } else {
      alert('Withdrawal amount exceeds balance');
  }
  saveBackground();
}
withdrBtn.addEventListener('click', withdrawSavings);

var saveBackground = function() {
  if (Number(document.querySelector('.saveBal').textContent) === 0) {
    document.querySelector('.savingsColor').style.backgroundColor = "mistyrose";
    } else {
    document.querySelector('.savingsColor').style.backgroundColor = "white";
  }
}

//Checking
var inputCheck = document.querySelector('.inputCheck');
var checkBal = document.querySelector('.checkBal');
var checkDepositBtn = document.querySelector('.checkDepositBtn');
var checkWithdrBtn = document.querySelector('.checkWithdrBtn');

checkBal.textContent = 0;

var depositIntoCheck = function() {
  var checkingBalance = Number(checkBal.textContent) + Number(inputCheck.value);
    checkBal.textContent = checkingBalance;
  checkBackground ();
}
checkDepositBtn.addEventListener('click', depositIntoCheck);

var withdrawChecking = function() {
  var balance = ((Number(checkBal.textContent) - Number(inputCheck.value)));
    if (balance > -1) {
      checkBal.textContent = balance;
      } else {
      alert('Withdrawal amount exceeds balance');
    }
    checkBackground();
  }
checkWithdrBtn.addEventListener('click', withdrawChecking);

var checkBackground = function() {
  if (Number(document.querySelector('.checkBal').textContent) === 0) {
    document.querySelector('.checkColor').style.backgroundColor = "mistyrose";
    } else {
    document.querySelector('.checkColor').style.backgroundColor = "white";
  }
}
