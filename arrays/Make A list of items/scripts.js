function tryIt(event){
//build an array with inputted elements
var inputElem = document.getElementsByTagName('input');
var indxs = [0, 1, 2, 3, 4];
var inputtedArray = [];
indxs.map(function(indx){
  return inputtedArray.push(inputElem[indx].value); 
});
  //sort the array
  inputtedArray = inputtedArray.sort();

  
  
//make a new array and push sorted array into it with upperCased
var upperCasedArr = [];
  var txt = "";
  var div = document.getElementById('show_items');
  var ul = document.createElement('ul');
  div.appendChild(ul);
  
inputtedArray.map(function(itm){
  return upperCasedArr.push(itm.toUpperCase());
});
// display all elemnts in ul> li
  ul.innerHTML = upperCasedArr.map(function(arr){
    return txt = "<li>" + arr + "</li>";
  });
  
  document.getElementById('form_list').style.display = "none";
  document.getElementById('show_items').style.display = "block";
  event.preventDefault();
}