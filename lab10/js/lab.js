/**
 * Author:    Craig Schroeder
 * Created:   11.2.2022
 *
 * Lisence: Public Domain
 **/
//OLD CODE FROM ORIGINAL SUBMISSION

// //Variables
// var outputEl = document.getElementById("output");
// var buttonEl = document.createElement('button');
// var buttonEl2 = document.getElementById("button2");
// var buttonEl3 = document.getElementById("button3");
// var resultEl = document.createElement('p');
//
// //Button1 id and adding to output
// buttonEl.id = 'my-button'
// outputEl.appendChild(buttonEl);
//
// //Adding text to all buttons
// buttonEl.innerHTML = " Button ";
// buttonEl2.innerHTML = " Button 2 ";
// buttonEl3.innerHTML = " Button 3 ";
//
// //Button1 name and sort function
// buttonEl.addEventListener("click", function() {
//   var nameEl = document.getElementById("user-name").value;
//   //Uses "Test" if nothing is in the box on button1 press
//   if (nameEl == '') {
//     var nameEl = "TEST";
//   }
//
//   //Lowerscases the username, splits it into an array, and sorts the array
//   var sortedNewName = nameEl.toLowerCase().split('').sort();
//   //Uppercases first letter
//   sortedNewName[0] = sortedNewName[0].toUpperCase();
//   //Back to string
//   sortedNewName = sortedNewName.join('');
//   //added to a paragraph element
//   resultEl.innerHTML = sortedNewName;
//   //console test
//   console.log(sortedNewName);
//   //Put into output
//   outputEl.appendChild(resultEl);
// })
//
// //2nd button element
// buttonEl2.addEventListener("click", function() {
//   var bodyEl = document.getElementById('content');
//   console.log(bodyEl);
//   //Set background to light blue
//   bodyEl.style.background = '#95b7ed';
// })
//
// //3rd button element
// buttonEl3.addEventListener("click", function() {
//   var bodyEl = document.getElementById("content");
//   //Set all of text to the best font
//   bodyEl.style.fontFamily = "Comic Sans MS, cursive";
// })

//DEBUGGING CODE: From Lab14. Created on 11/16/2022

//Creating a button and naming each one
$('#button1').html("Button 1");
$('#button2').html("Button 2");
$('#button3').html("Button 3");

//Button 1 name sort function
$("#button1").click(function(){
  var nameEl = $('#user-name').val();
  //Uses "Test" if nothing is in the box on button1 press
   if (nameEl == '') {
     var nameEl = "TEST";
   }

  //Lowerscases the username, splits it into an array, and sorts the array
  var sortedNewName = nameEl.toLowerCase().split('').sort();
  //Uppercases first letter
  sortedNewName[0] = sortedNewName[0].toUpperCase();
  //Back to string
  sortedNewName = sortedNewName.join('');
  //console test
  console.log(sortedNewName);
  //Put into output
  $('#output').html("<p>" + sortedNewName + "</p>");
  // })
})

//Button2 color change
$("#button2").click(function(){
  $("body").css("background-color", "#95b7ed");
})

//Button 3 font change
$("#button3").click(function(){
  $("#content").css("font-family", "Comic Sans MS");
})
