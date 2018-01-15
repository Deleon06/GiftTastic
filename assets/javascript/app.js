$(document).ready(function (){
	//creating an array of celebrities
	var topics = [ "Kevin Hart", "Dave Chappelle", "Snoop Dog", "John Snow"
	];

	//creating the function that will create the buttons using array class and div location
	function addbuttons(celebrityarray, addingclass, locationtoadd) {
		$(locationtoadd).empty();
		//creating a loop so it can create a button for every item in the array
		for (var i = 0; i < celebrityarray.length; i++) {
			var button = $("<button>")
			button.addClass(addingclass)
			button.attr("data-type", celebrityarray[i])
			button.text(celebrityarray[i])
			$(locationtoadd).append(button);
		}
	}
	//creating the on click function to pull the data from the giphy api
  	$(document).on("click", ".celebrity-tag", function() {
  		$("#images").empty()
  		$(".celebrity-tag").removeClass("active")
  		$(this).addClass("active");

  		var celebrity = $(this).attr("data-type")
  		var api_key = "tKRQBGOWJClaCicLk0SJVO2Se0yNDntm"
		var webURL = "https://api.giphy.com/v1/gifs/search?q="
		//ajax call
 		 $.ajax({
		    url: webURL + celebrity + "&api_key=" + api_key + "&limit=10",
		    method: "GET"
		    }).done(function(response) {
		    console.log(response); 
		    for (i=0; i < response.data.length + 1; i++) {
			    $("#images").append("<p> Rating: " + response.data[i].rating + "</p>");

			    var animated = response.data[i].images.fixed_height.url;
		        var still = response.data[i].images.fixed_height_still.url;
		    //creating the attributes that will allow me to run or pause the giphy
		        var image = $("<img>");
		        image.attr("src", still);
		        image.attr("data-still", still);
		        image.attr("data-animate", animated);
		        image.attr("data-state", "still");
		        image.addClass("celebrity-image");

		   
			    $("#images").append(image);

		    }
	  	})	
	})
	//creating the on click function to run or stop the giphy
	$(document).on("click", ".celebrity-image", function() {

	    var state = $(this).attr("data-state");

	    if (state === "still") {
	      $(this).attr("src", $(this).attr("data-animate"));
	      $(this).attr("data-state", "animate");
	    }
	    else {
	      $(this).attr("src", $(this).attr("data-still"));
	      $(this).attr("data-state", "still");
	    }
	  });

	  $("#add-celebrity").on("click", function(event) {
	    event.preventDefault();
	    var newcelebrity = $("input").eq(0).val();

	    if (newcelebrity.length > 2) {
	      topics.push(newcelebrity);
	    }
	    //adding the array, class and div to run the function
	    addbuttons(topics, "celebrity-tag", "#celebrity-tags");

	  });

	  addbuttons(topics, "celebrity-tag", "#celebrity-tags");
	});

 	
		



 		