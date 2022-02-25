function validateForm(){
    var email=document.myform.email.value;
    var pwd=document.myform.pwd.value;

    if(!email){
        alert('Enter valid email')
        return false;
    }else if(!pwd){
        alert('Enter password')
        return false;
    }else if(pwd.length<6){
        alert('Password should be minimum 6 letters')
        return false;
    }else{
        return false;
    }
}