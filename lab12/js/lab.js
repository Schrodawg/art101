/**
 * Author:    Craig Schroeder
 * Created:   11.9.2022
 *
 * Lisence: Public Domain
 **/
 
//Houses' descriptions in a dictionary-type formate with keys and values for easy potential additions
var houseDesc = [
  {house : "Gryffindor", desc : "Gryffindor members are real upright, protagonist syndrome-having, egomaniacs. No offense, of course."},
  {house : "Ravenclaw", desc : "Ah, a Ravenclaw. Chances are you didn't really want to enter your name for this. But deep down, you're a little relieved that this is your house, the smart one, yeah?"},
  {house : "Slytherin", desc : "Oh ho ho! A Slytherin, eh? Why, aren't you just a special one now, ain't ya? Look, yes you got into the 'bad' group, but don't let it go to your head. In the grand scheme of things there were a lot of Slytherin who did absolutely nothing of note for the entire series. You could still be a lil' dispicable rogue, but keep those expectations low, alright?"},
  {house : "Hufflepuff", desc : "Hufflepuff huh? Nice. That's about it. You're probably alright, nothing crazy but not really main character material either. Nothing wrong in that I suppose, you do you after all."},
  {house : "The secret fifth one", desc : 'Sorry if you were expecting a really cool "easter egg"-like house here, but I am just testing my house array, sorry!'}
]
console.log(houseDesc);

//Takes a string, measures its length, and returns a relative Hogwarts house and description
function sortingHat(str) {
  length = str.length;
  //Evalutes the length of the inputted name and assigns "mod" a value based on the amount of total Hogwarts houses
  mod = length % houseDesc.length;
//Conditional version of assignment
  // if (mod == 0) {
  //   return "Gryffindor";
  // }
  // else if (mod == 1) {
  //   return "Ravenclaw"
  // }
  // else if (mod == 2) {
  //   return "Slytherin"
  // }
  // else if (mod == 3) {
  //   return "Hufflepuff"
  // }
  console.log(houseDesc[mod]);
  return houseDesc[mod]
}

//On button click this triggers
$("button").click(function(){
  //Takes input field's entered name
  var name = $("#input").val();
  //Calls the function using the entered name as a parameter
  var house = sortingHat(name);
  //Inserts the house name and the respective description into the "output" div's inner HTML
  $('#output').html("<h2>" + house.house + "</h2>" + "<p>" + house.desc + "</p>")
  //removes the "display: none" attribute from the CSS, showing the contents of the "output" div
  $('#output').show();
})
