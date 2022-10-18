/**
 * Author:    Craig Schroeder
 * Created:   10.17.2022
 *
 * Lisence: Public Domain
 **/

//Vars
var myTransport = ["Bus", " Car ", " Legs", " Car of friends"]
myMainRide = {
  make : "Buick",
  model : "Regal",
  color : "Green",
  year : 2000,
  current_year : 2022,
  age : function() {
    return current_year - age;
  }
}

//output
document.writeln("Hot Wheels collectors wish they had, <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
document.writeln("<pre>" + "But they're out here taking the " + myTransport + "</pre>");
