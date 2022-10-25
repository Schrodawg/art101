/**
 * Author:    Craig Schroeder
 * Created:   10.25.2022
 *
 * Lisence: Public Domain
 **/
var numArray = [0,1,2,3,4,5,6];

function squar(x) {
  return (x ** 2);
}

//console logs
console.log("Ah, a list of numbers in an array, delectable: ", numArray);
console.log("Ah, the numbers are now squared, amazing!: ",numArray.map(squar));
console.log("Actually, what if those numebrs were given ten bonus points for being such champs about all this, epic...: ",numArray.map(function(x) {
  return x + 10
}))
