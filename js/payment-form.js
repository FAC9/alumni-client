var emailRegExp = /^[^W][a-zA-Z0-9_]+(.[a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+(.[a-zA-Z0-9_]+)*.[a-zA-Z]{2,4}$/;
var donate = document.getElementsByClassName('button-container')[0];

function isEmailValid() {
  var emailAddress = document.getElementById('email').value;
  if (!emailRegExp.test(emailAddress)) {
    document.getElementsByClassName('warning')[0].style.display = "block";
    return false;
  }
  return true;
}

donate.onclick = function () {
  if (isEmailValid()) {
    window.open('./payment-confirmation.html', '_self');
  }
}
