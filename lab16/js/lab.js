/**
 * Author:    Craig Schroeder
 * Created:   11.21.2022
 *
 * Lisence: Public Domain
**/

//Link or Endpoint
URL = "https://xkcd.com/info.0.json"

$.ajax({
     // Requested URL for Endpoint
     url: URL,
     // Whether this is a POST or GET request
     type: "GET",
 })
 .done(function(data) {
     console.log(data);
     //Turn data into JSON format
     var printableData = JSON.stringify(data);
     console.log(printableData);
     //Task 4: Putting the comic's title, image, and alt title in the output
     task4 = `<h2>${data.title}</h2>
     <img src="${data.img}"
     title="${data.alt}"><br><br>
     `
     $("#output").html(task4);
})
