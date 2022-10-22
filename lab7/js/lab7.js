/**
 * Author:    Craig Schroeder
 * Created:   10.21.2022
 *
 * Lisence: Public Domain
 **/

function sortUserName() {
  var userName = window.prompt("Please enter your name here for undisclosed reasons");
  console.log("userName = ", userName);
  //string -> array
  var nameArray = userName.split('');
  console.log("nameArray = ", nameArray);
  //sort array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort = ", nameArraySort);
  //array -> string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted = ", nameSorted);
  return nameSorted;
}

document.writeln("Look what I have created, is it not marvelous? Your name is beautiful now, you're welcome. ", sortUserName(), "</br>");
