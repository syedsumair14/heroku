function validate(){
    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;    
    if(!validName(name))
    {
        displayError("name-text", "Please enter a valid name.");
    }
    // if(!validAge(dob)){
    //     displayError("dob-text", "Age should be greather than 18." + Date(dob));
    // }
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
    if(name.length <=2 )
        return false;
    else 
        return true;
}
function validAge(dob){
    //not working search for alternative method online
    // document.getElementById("dob-text").innerHTML = "";
    // var myDob = new Date(dob);
    // var ageDifMs = Date.now() - MyDOb.getTime();
    // var ageDate = new Date(ageDifMs); // miliseconds from epoch
    // var age =  Math.abs(ageDate.getUTCFullYear() - 1970);
    return true;   
}

function validEmail(email){
    document.getElementById("email-text").innerHTML = "";
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return (true);
    }
        return (false);
}