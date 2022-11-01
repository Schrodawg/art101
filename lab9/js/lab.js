/**
 * Author:    Craig Schroeder
 * Created:   11.1.2022
 *
 * Lisence: Public Domain
 **/

//loads the JS file first
window.onload = function () {
    //Assign output to outputEl
    var outputEl = document.getElementById("output");
    console.log("outputEl: ", outputEl);

    // Create a paragraph element and assign to newEl1
    var new1El = document.createElement("p");

    // html attribute of new1El and ID
    new1El.innerHTML = "Something new.";
    new1El.id = "new-one";

    // Create a paragraph element and assign to new2El
    var new2El = document.createElement("p");

    // html attribute of new1El and ID
    new2El.innerHTML = "Something else.";
    new2El.id = "new-two";

    // Embed both new elements into the output ID
    outputEl.appendChild(new1El);
    outputEl.appendChild(new2El);

    // CSS attributes

    new1El.style.background = "black";
    new1El.style.color = "orange";
    new1El.style.textAlign = "center";
    new2El.style.border = "orange 2px dotted";
    new2El.style.color = "orange";
    new2El.style.fontFamily = "'Snap ITC Regular', cursive";
 }
