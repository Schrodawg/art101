/**
 * Author:    Craig Schroeder
 * Created:   11.14.2022
 *
 * Lisence: Public Domain
 **/

//fizzbuzz function
function fizzBuzzBoom() {
  for (var num = 0; num < 200; num++) {
    debugger;
    if (num % 105 == 0) {
      $("#output").append("<p>" + num + ": FizzBuzzBoom!" + "</p>");
    }
    else if (num % 35 == 0) {
      $("#output").append("<p>" + num + ": BuzzBoom!" + "</p>");
    }
    else if (num % 21 == 0) {
      $("#output").append("<p>" + num + ": FizzBoom!" + "</p>");
    }
    else if (num % 15 == 0) {
      $("#output").append("<p>" + num + ": FizzBuzz!" + "</p>");
    }
    else if (num % 7 == 0) {
      $("#output").append("<p>" + num + ": Boom!" + "</p>");
    }
    else if (num % 5 == 0) {
      $("#output").append("<p>" + num + ": Buzz!" + "</p>");
    }
    else if (num % 3 == 0){
      $("#output").append("<p>" + num + ": Fizz!" + "</p>");
    }
    else {
      $("#output").append("<p>" + num + ": </p>");
    }
  }
}

fizzBuzzBoom();
