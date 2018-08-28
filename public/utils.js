function validate(){
    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;    
    if(!validName(name))
    {
        displayError("name-text", "Please enter a valid name.");
    }
    if(!validAge(dob)){
         displayError("dob-text", "Age should be greather than 18." + Date(dob));
     }
    if(!validEmail(email))
    {
        displayError("email-text", "Please enter a valid email");
    }
}
function displayError(feildName, errMessage){
    var feildText = document.getElementById(feildName);
    feildText.style.color = "red";
    feildText.innerHTML = errMessage;
    event.preventDefault();

}
function validName(name){
    document.getElementById("name-text").innerHTML = "";
    if(name.length <= 2 )
        return false;
    else 
        return true;
}
  function validateDOB(dob) {
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        return true;
    } else {
    return false;
            }          
}

function validEmail(email){
    document.getElementById("email-text").innerHTML = "";
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return (true);
    }
        return (false);
}