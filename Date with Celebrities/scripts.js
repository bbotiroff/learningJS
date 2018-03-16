document.getElementById('submit').addEventListener('click', dateCelb);

function dateCelb(event){

  
  
  var name = document.getElementById('name').value;
  var age = parseInt(document.getElementById('age').value);
  var gender = document.getElementById("gender");
  var orient = document.getElementById('orientation');
  var celebrity =  document.getElementById('celebrity');

  if(orient.value === "Choose one" || gender.value === "Choose one" ){
    if(orient) {orient.className = "eror";}
    if(gender) {gender.className = "eror";}
  }else{
    checking();
  }  

  function checking(){
    var result;
    document.getElementById('form').className = "hidden";
    document.getElementById('showMe').className = " ";
    
    if(gender.value == "male" && orient.value == "straight"){

      if(age >= 18 && age <=25){
         celebrity.innerHTML = '<strong>Liana Liberato</strong>';
        document.getElementById('LianaL').className = " ";
          
      }else if(age >= 25 && age <= 80) {
          celebrity.innerHTML = '<strong>Emma Robertson</strong>';
        document.getElementById('EmmaR').className = " ";
        }

    }else if(gender.value === "female" && orient.value === "straight") {

      if(age >= 18 && age <=25){
          celebrity.innerHTML = '<strong>Zac Efron</strong>';
        document.getElementById('ZacE').className = " ";
      }else if(age >= 25 && age <= 80){
          celebrity.innerHTML = '<strong>Jhonny Depp</strong>';
        document.getElementById('JDepp').className = " ";
        }

    }else if(orient.value === "gay" && gender.value === "male"){   
          celebrity.innerHTML = '<strong>Robert Patison</strong>';
        document.getElementById('RobertP').className = " "; 

    }else if(orient.value === "gay" && gender.value === "female"){
          celebrity.innerHTML = '<strong>Ellen</strong>'; 
        document.getElementById('Ellen').className = " ";
    }else if(age >= 100 && age <= 0) {
      document.getElementById('text').innerHTML = "People do NOT live that much! Please enter valid age! Thank you!";
    }else if(age >= 0 && age <= 17){
      document.getElementById('text').innerHTML = "You are too young to date any celebrates!";
    }
    
  }
  event.preventDefault();
}


