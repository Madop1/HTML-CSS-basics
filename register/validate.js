function validateUsername(){
    var name=document.myform.name.value;
    var email=document.myform.email.value;
        
    if(!name){
      alert("Name can't be blank");
      return false;
    } else if (!email){
      alert("email cant be empty");
      return false;
    }else{
        return false
    }
  } 

  function validatePassword(){
    var p1= document.myform.pwd1.value;
    var p2= document.myform.pwd2.value;

    if(!p1){
      alert('Please enter password')
      return false;
    }else if(p1.length<6){
      alert('Password should be minimum 6 letters')
      return false;
    }else if(p1 != p2){
      alert('Password do not match')
      return false;
    
    }else{
      return false;
    }
  }
  function validateForm(){
    var validation=true;
    validation &= validateUsername()
    validation &= validatePassword()
    return validation;
  }