//function myForm(Event) {
//  var fName = document.getElementById('fname').value;
//  var lName = document.getElementById('lname').value;
//  var email = document.getElementById('email').value;
//  var dbirth = document.getElementById('dbirth').value;
//  
//  if(fName === "" || lName === ""){
//    if(fName === ""){      
//      document.getElementById('f-name').innerHTML = 'Please fill up "FIRST NAME " on top';
//      document.getElementById('fname').className = "eror";
//    }else{
//      document.getElementById('f-name').innerHTML = 'Please fill up "LAST NAME" on top';
//      document.getElementById('lname').className = "eror";
//    }
//  }else{    
//      document.getElementById('f-name').innerHTML = fName + " " + lName;
//  }
//  document.getElementById('e-mail').innerHTML = email;
//  document.getElementById('d-birth').innerHTML = dbirth;
//  
//event.preventDefault();
//}
//var submitForm = document.getElementById('submit');
//
//submitForm.addEventListener("click", myForm);

$(document).ready(function() {
  $('#samp-form form').submit(function(event) {
   var fName = $('#fname').val();     
   var lName = $('#lname').val(); 
   var email = $('#email').val(); 
   var dbirth = $('#dbirth').val(); 
    
    $('#f-name').text(fName + " " + lName);
    $('#e-mail').text(email);
    $('#d-birth').text(dbirth);
    
    event.preventDefault();
  });
});