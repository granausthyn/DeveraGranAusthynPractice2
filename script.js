function validateData(){
    let origPass = document.getElementById("pass");
    let confPass = document.getElementById("confirmPass");

    let mailInput = document.getElementById("emailReg");

    if(origPass.value==confPass.value){
        
        alert("Entries have been succesfully registered!")
        document.getElementById("data").submit();

    }else{

        alert("Password does not match!")
        origPass.value ="";
        confPass.value ="";
    }

    
}