
//acquiring the user input and adding it the sessionStorage
//we only want this information stored until the user closes the browser
$("#userInput").on("click", function (){
  var origin = $("#location").val().trim();
  sessionStorage.setItem("origin", origin);
  var name = $("#firstname").val().trim();
  sessionStorage.setItem("firstname", name);
  var lastname= $("#lastname").val().trim();
  sessionStorage.setItem("lastname", lastname);
}); 




