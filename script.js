function submitFunction() {

    var frmName   = document.getElementById('form1').frmName.value;
    
    var frmSurname  = document.getElementById('form1').frmSurname.value;
    
    var frmMail = document.getElementById('form1').frmMail.value;

    var frmNote = document.getElementById('form1').frmNote.value;
   

   
    if(frmName === "" || frmSurname === "" || frmMail === "" || frmNote === ""){
        alert("Fill everything,please.");
        return false;
    }
    else{
      alert("Thank you:)");
    }
}