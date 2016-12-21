var donate = document.getElementsByClassName('button-container')[0];

function verifyEmail() {
  var emailAddress = document.getElementById('email').value;
  console.log(emailAddress);
  if (!/^[^W][a-zA-Z0-9_]+(.[a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+(.[a-zA-Z0-9_]+)*.[a-zA-Z]{2,4}$/.test(emailAddress)) {
    document.getElementsByClassName('warning')[0].style.display = "block";
    return false;
  }
  return true;
}

donate.onclick = function () {
  if (verifyEmail()) {
    window.open('./payment-confirmation.html', '_self');
  }
}
