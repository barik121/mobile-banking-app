// login button functionality
document.getElementById('login-btn')
.addEventListener('click',function(event){
    event.preventDefault()
    const mobileNumber = 01740069885;
    const pinNumber = 1234;
    const phoneValue=document.getElementById('number').value;
    const convertPhoneValue = parseInt(phoneValue);
    const pinValue= document.getElementById('pin').value;
    const convertPinValue = parseInt(pinValue);
    if(mobileNumber===convertPhoneValue && pinNumber===convertPinValue){
        window.location.href="./home.html";
    }
    else{
        alert("Invalid phone number or pin");
    }

})