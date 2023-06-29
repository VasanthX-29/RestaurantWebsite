
const element=document.getElementById("registrationBtn")

element.addEventListener("click", validateRegister);

function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.match(validRegex)) {
  
     return true;
  
    } else {
  
     return false;
  
    }
  
  }

  function checkpwd(pwd)
  {
    if(pwd!='')
    {
        return true;
    }
    else{
        return false;
    }
  }
  
  function checkcpwd(cpwd,pwd)
  {
    if(cpwd===pwd)
    {
        return true;
    }
    else{
        return false;
    }
  }


function validateRegister()
{
   const email=document.getElementById("RInputEmail").value;
   const pwd=document.getElementById("RInputPassword").value;
   const cpwd=document.getElementById("RInputConformPassword").value;
  
   
   

   if(ValidateEmail(email) && checkpwd(pwd) && checkcpwd(cpwd,pwd) )
   {
    const successmodal = document.getElementById('registrationSuccessModal');
    const registration = document.getElementById('exampleModalCenter');
    $(successmodal).modal('show');
    $(registration).modal('hide');
   }
   else
   {
    const registration = document.getElementById('exampleModalCenter');
    const failmodal = document.getElementById('registrationfailModal');
     $(failmodal).modal('show');
    $(registration).modal('hide');
   }




}


