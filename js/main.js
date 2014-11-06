var email = document.getElementsByClassName("email")[0],
    password = document.getElementsByClassName("password")[0],
    errorEmail = document.getElementsByClassName("error-email")[0],
    errorPassword = document.getElementsByClassName("error-password")[0],
    pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/g;


function checkEmail() {
        if (email.validity.typeMismatch || email.value.length === 0) {
            errorEmail.innerHTML = "YO! Enter a valid email address.";
            errorEmail.className = "error";
        } else {
            errorEmail.innerHTML = "Email format looks good!";
            errorEmail.className = "valid";
        }
    }

function checkPassword(){
     
      if (pwRegex.test(password.value)) {
          errorPassword.innerHTML = "Password format looks good!";
          errorPassword.className = "valid";
      } else {
          errorPassword.innerHTML = "YO! Enter a password with at least one lowercase character, one uppercase character and one number.";
          errorPassword.className = "error";
       }
    }

function validator() {
    checkEmail();
    checkPassword();
}

// Use the following validation rules:
// Email address - required and is a valid email address
// Password - required, must contain at least one lowercase character, one uppercase character and one number

/* TO DO 
+ get pw Regex working X 
+ encapsulate in function. right now, function just activates event listener, so would not work first time X 
+ center vertically
+ check for IE

*/