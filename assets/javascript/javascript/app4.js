	
//accessing firebase to collect records of those that have volunteered
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
//creating a function that does that as soon as the page opens
$(document).ready(function(event) {

	database.ref().on("child_added", function(childSnapshot) {
    //defining the variables we're going to use to append to the volunteer box
    var addName = childSnapshot.val().name;
    var addlastName = childSnapshot.val().lastname;
    var adddate= childSnapshot.val().date;
    var adddestination= childSnapshot.val().destination;
    //adding the names to the volunteer box
	$("#volunteerPanel").append("<tr><td>" + addName + " " + addlastName +"</tr></td>" +"<tr><td>" +adddestination + "</tr></td>" +"<tr><td>" +adddate + "<hr></tr></td>");
});
})
