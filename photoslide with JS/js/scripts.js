var regPic = document.getElementById('pic1');
var withGlasses = document.getElementById('pic2');
var babeHarley = document.getElementById('pic3');

regPic.addEventListener("click", showHer);
withGlasses.addEventListener("click", showHer);
babeHarley.addEventListener("click", showHer);

function showHer(){
  var allImgs = document.querySelectorAll("img");
  for(var i=0; i<allImgs.length; i++) {
    console.log("Picture" + i + " is hidden");
    allImgs[i].className = "hide";
  } 
  console.log(this);

  var herAtt = this.attributes['morgot-robbie'].value;
  var pic = document.getElementById(herAtt); 
  if(pic.className === " ") {
    pic.className = "hide";
  }else{    
      pic.className = " ";
  }
console.log(herAtt)
}