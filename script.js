let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  let usernameValue = username.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let password2Value = password2.value.trim();

  /* username condition*/

  if (usernameValue === "") {
    setError(username, "Username Cannot be Blank");
  } else {
    setSuccess(username);
  }

  /*email condition*/

  if (emailValue === "") {
    setError(email, "Email Cannot be Blank");
  } else if (!isEmail(emailValue)) {
    setError(email, "Not a valid Email");
  } else {
    setSuccess(email);
  }


  function isEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  }

  /*Password condition */

  if (passwordValue === "") {
    setError(password, "Password Cannot be Blank");
  } else {
    setSuccess(password);
  }

  /* confirm password condition */

  if(password2Value === ''){
    setError(password2, "Confirm Password Cannot be Blank");
  }
  else if(passwordValue !== password2Value){
    setError(password2, "Password does not match");
  }
  else{
    setSuccess(password2);
  }
  
  function setError(input,message){
    let formControl = input.parentElement;
    let small = formControl.querySelector("small");
    formControl.className = 'formControl error';
    small.innerText = message;
  }

  function setSuccess(input){
      let formControl = input.parentElement;
      formControl.className = 'formControl success'
  }
}
