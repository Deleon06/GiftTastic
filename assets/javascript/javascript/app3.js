
      // On page load the user will be prompted to enter date of travel. 

      // Once this field is filled in with the datepicker widget, 
      // the user will...
      // ...see all the flight possibilites..
      // ..to the selected destination from Page 2

      // The flight data will be pulled from the travel APIs below
        // https://aviation-edge.com/developers/

      // Each result will display:
         // 1) Date of travel
         // 2) Origin and destination
         // 3) Price
         // 4) Current weather of the destination pulled from the API below


         // 5) Selection box to check out 
// var APIKEY = "502bd9cf2c4c75d6110689001b2a61a2";
// var origin = sessionStorage.getItem("origin");
  //giving variables to items stored in the session storage to use in the URL  
  // var WeatherURL = "http://api.openweathermap.org/data/2.5/weather?q=";
  
   
// This is the Ajax call that gets the data from the arline APIs
var apiKey = "r8UtCmLa";
// //Goal was to get live routes and flights, unfortunately only way to get that is to pay for an api called skyscanner.
var queryURL = "https://free.rome2rio.com/api/1.4/json/Search?key=" + apiKey + "&oName=" + origin;

  $(document).ready(function() {
  
    var origin = sessionStorage.getItem("origin");
    var location = sessionStorage.getItem("city");
    //accessing the the information 
    $.ajax({
      url: queryURL + "&dName=" + location,
        method: "GET"
        }).done(function(response) {       
      // searching and appending the information we want to bring to the UI
        $("#flightinfo").append("<br>Arriving Terminal: " + response.routes[0].segments[1].outbound[0].hops[0].arrTerminal);
        $("#flightinfo").prepend("<br>Arrival Time: " + response.routes[0].segments[1].outbound[0].hops[0].arrTime);  
        $("#flightinfo").prepend("<br>Departing Terminal: " + response.routes[0].segments[1].outbound[0].hops[0].depTerminal);
        $("#flightinfo").prepend("<br>Departure Time: " + response.routes[0].segments[1].outbound[0].hops[0].depTime);
        $("#flightinfo").prepend("<br> Flight Number: " + response.routes[0].segments[1].outbound[0].hops[0].flight);
        $("#flightinfo").prepend("<br> Lowest Price Guarantee: " + "$" + response.routes[0].indicativePrices[0].priceLow);
        $("#flightinfo").prepend(response.routes[0].name);

        })
    // $.ajax({
    //   url: WeatherURL + location + "APPID=" + APIKEY,
    //     method: "GET"
    //     }).done(function(response) {
    //     console.log(response);
    //   });
    });
      // accessing firebase to save the information from the user
  var config = {
    apiKey: "AIzaSyDmdlI3HGzDZcymjTx2gj_KaM-QnFhXiH0",
    authDomain: "team-project-cb2c3.firebaseapp.com",
    databaseURL: "https://team-project-cb2c3.firebaseio.com",
    projectId: "team-project-cb2c3",
    storageBucket: "team-project-cb2c3.appspot.com",
    messagingSenderId: "333616875673"
  };
  firebase.initializeApp(config);

var database = firebase.database();
  //creating variables to acquire items from our storage
  $(document).ready(function(event) {
    var name = sessionStorage.getItem("firstname");
    var lastname = sessionStorage.getItem("lastname");
    var date = sessionStorage.getItem("date");
    var destination= sessionStorage.getItem("city");
  
  //pushing the items from our storage to our database
  database.ref().push({
    name: name,
    lastname: lastname,
    date: date,
    destination: destination
  });

    $("#adddate").html(moment(date).format("MMMM do Y,",));

    $("#finalpage").on("click", function(){
      window.location.href = "index4.html";
    })
  });
