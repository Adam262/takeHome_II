var email = document.getElementsByClassName("email")[0],
    password = document.getElementsByClassName("password")[0],
    errorEmail = document.getElementsByClassName("error-email")[0],
    errorPassword = document.getElementsByClassName("error-password")[0],
    pwRegex = /[a-zA-Z]\d/i;


    email.addEventListener("keyup", function(event) {
        if (email.validity.typeMismatch) {
            errorEmail.innerHTML = "YO! Enter a valid email address.";
            errorEmail.className = "error";
        } else {
            errorEmail.innerHTML = "Email format looks good!";
            errorEmail.className = "valid";
        }
    })

    password.addEventListener("keyup", function(event){
      for (var i = 0; i < password.length; i++) {
      if (pwRegex.indexOf(password[i]) === -1) {
          errorPassword.innerHTML = "YO! Enter a password with at least one lowercase character, one uppercase character and one number.";
          errorPassword.className = "error";
      } else {
          errorPassword.innerHTML = "Password format looks good!";
          errorPassword.className = "valid";
       }
      }
    })

function validator() {
    console.log(email, password, errorEmail, errorPassword);
}

// Use the following validation rules:
// Email address - required and is a valid email address
// Password - required, must contain at least one lowercase character, one uppercase character and one number

/* TO DO 
+ get pw Regex working
+ encapsulate in function. right now, function just activates event listener, so would not work first time
+ center vertically
+ check for IE


*/