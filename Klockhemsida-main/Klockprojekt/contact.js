
// Validering av contact

const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("telephone");
const subject = document.getElementById("subject");
const inputForms = document.getElementsByClassName("inputForm");
const contactForm = document.getElementsByClassName("contactForm")[0];
const errorMessages = contactForm.getElementsByTagName("p");
const submitBtn = document.getElementById("submitBtn");

function ValidatePhone() {

  const phoneNr = phone.value;


  if ( /^([0-9]{3}[-][0-9]{7})|([+][0-9]{2,3}[0-9]{2}[0-9]{10})|([0-9]{10}$)/mg.test(phoneNr))
  {
    return true;
  }
  return false;

}

function ValidateEmail() 
{
  const emailAdress = email.value;
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAdress))
  {
    return true
    
  }
    return false
    
}


function showErrorMsg(i, funktion) {
  if(funktion == false) {
    errorMessages[i].style.display = "block";
    submitBtn.disabled = true;
    return false;
  }
  else {
     submitBtn.disabled = false;
    errorMessages[i].style.display = "none";
    return true;
  }
}

function checkEmptyValue (formValue) {

  if(formValue === "" ) {
   
    
    return false;
  }
  else {
   
    return true;
  }
  
}

firstName.addEventListener("keyup", event  => {
  fName = firstName.value;
  showErrorMsg(0, checkEmptyValue(fName));
  
}); 

lastName.addEventListener("keyup", event  => {
  lName = lastName.value;
  showErrorMsg(1, checkEmptyValue(lName));
  
});

email.addEventListener("keyup", event  => {
  showErrorMsg(2, ValidateEmail());
  
}); 

phone.addEventListener("keyup", event  => {
  showErrorMsg(3, ValidatePhone());
  
}); 

subject.addEventListener("keyup", event  => {
  message = subject.value;
  showErrorMsg(4, checkEmptyValue(message));
  
}); 



submitBtn.addEventListener("click", event => {
  fName = firstName.value;
  lName = lastName.value;
  message = subject.value;
  showErrorMsg(0, checkEmptyValue(fName));
  showErrorMsg(1, checkEmptyValue(lName));
  showErrorMsg(2, ValidateEmail());
  showErrorMsg(3, ValidatePhone());
  showErrorMsg(4, checkEmptyValue(message));
  if(showErrorMsg(0, checkEmptyValue(fName)) && showErrorMsg(1, checkEmptyValue(lName)) && showErrorMsg(2, ValidateEmail()) &&  showErrorMsg(3, ValidatePhone() && showErrorMsg(4, checkEmptyValue(message))))   {
  alert("Thank you for contacting us, we will get back to you as soon as possible!");


  }
  else {
    alert("Please check that all fields are filled in correctly!")
  }
})