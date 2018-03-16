document.getElementsByTagName("input")[0].addEventListener("input", splitItOut);
function splitItOut() {
  var sentence = document.getElementsByTagName("input")[0].value;
  var splitArr = sentence.split(" ");
  var newArr = [];
  var revArr = [];
  splitArr.reverse().map(function(itm){
    newArr = itm.split("").reverse().join("");
    revArr.push(newArr);
    return revArr;
  });
  var revStr = revArr.join(" ");
  document.getElementById("show_reverse").innerHTML = revStr;
}
