/**
 * Author:    Craig Schroeder
 * Created:   11.8.2022
 *
 * Lisence: Public Domain
 **/


//Add buttons to each section
$('#challenges').append("<button id = 'buttonChalEl'>click me.</button>");

$('#problems').append("<button id = 'buttonProbEl'>don't click me.</button>");

$('#results').append("<button id = 'buttonResEl'>this is the result of clicking me.</button>");

//On button click toggle the classes of each respective div
$("#buttonChalEl").click(function(){
  $("#challenges").toggleClass("specialC");
})

$("#buttonProbEl").click(function(){
  $("#problems").toggleClass("specialP");
})

$("#buttonResEl").click(function(){
  $("#results").toggleClass("specialR");
})
