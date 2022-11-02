/**
 * Author:    Craig Schroeder
 * Created:   11.2.2022
 *
 * Lisence: Public Domain
 **/
var outputEl = document.getElementById("output");
var buttonEl = document.getElementById("my-button");

buttonEl.innerHTML = "button"

buttonEl.addEventListener("click", function() {
  var nameEl = document.getElementById("user-name").value;
  var sortedNewName = nameEl.toLowerCase().split('').sort()
  //.toUpperCase().join('');
  console.log(sortedNewName);
  outputEl.innerHTML = sortedNewName;
 // console.log(outputEl);
 //  console.log(nameEl);
 //  console.log(buttonEl);
})
