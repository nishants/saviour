(function(){
	"use strict"
	var showLocation, 
		continueLocating;

	showLocation = function(location){
		var location = location.coords;
		var displayText = 	"Lattitude  : " + location.latitude 	+ " <br>" + 
						   	"Longitude  : " + location.longitude 	+ " <br>" + 
							"Altitude   : " + location.altitude 	+ " <br>" + 
							"Accuracy   : " + location.accuracy;

		document.getElementById("current-location").innerHTML = displayText;		
	};

	continueLocating = function(){
		var locateAtMs = 1000;
		navigator.geolocation.getCurrentPosition(showLocation);
		setTimeout(continueLocating, locateAtMs);
	};

	window.locationApp = {
		init: continueLocating
	};

}).call(this);

// var options = { enableHighAccuracy: true, maximumAge: 100, timeout: 60000 };
// if( navigator.geolocation) {
//    var watchID = navigator.geolocation.watchPosition( gotPos, gotErr, options );
//    var timeout = setTimeout( function() { navigator.geolocation.clearWatch( watchID ); }, 5000 );
// } else {
//    gotErr();
// }