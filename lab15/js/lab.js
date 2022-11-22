/**
 * Author:    Craig Schroeder
 * Created:   11.21.2022
 *
 * Lisence: Public Domain
**/
URL = "https://www.boredapi.com/api/activity/"

//Button click
$('#activate').click(function(){
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (ENDPOINT)
        url: URL,
        // Whether this is a POST or GET request
        type: "GET",
    })
    // If the request succeeds
    .done(function(data) {
        console.log(data);
        //Turn data into JSON format
        var printableData = JSON.stringify(data);
        console.log(printableData);
        // put data in webpage
        $("#output").append("<p>Bored? Try this: <b>" + data.activity);
        $("#output").append("<p>On a scale of 0-100, it's probably this difficult: <b>" + (data.accessibility*100));
        if (data.participants > 1) {
          $("#output").append("<p>You and this many people could do this together: <b>" + (data.participants-1) + " other people")
        }
        $("#output").append("<p>And I'm no expert, but you I'd say you'd spend about this much on this on a scale of 0-100: <b>" + (data.price*100));
    })
});
