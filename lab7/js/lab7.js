/**
 * Author:    Craig Schroeder
 * Created:   10.21.2022
 *
 * Lisence: Public Domain
 **/
var userName = window.prompt("Please enter your name here for undisclosed reasons");

function sortUserName(userName) {
  console.log("userName = ", userName);
  //lowercase
  var userName = userName.toLowerCase();
  //string -> array
  var nameArray = userName.split('');
  console.log("nameArray = ", nameArray);
  //sort array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort = ", nameArraySort);
  //Capitalize first letters
  nameArraySort[0] = nameArraySort[0].toUpperCase();
  //array -> string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted = ", nameSorted);
  return nameSorted;
}
//print it out
document.writeln("</br>", sortUserName(userName), "</br>");
