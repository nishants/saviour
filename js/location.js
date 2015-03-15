(function(){
	"use strict"
	var showLocation, 
		continueLocating,
		target = document.getElementById("current-location");

	showLocation = function(location){
		var displayText = 	"Lattitude  : " + Math.random() + " <br>" + 
						   	"Longitude  : " + Math.random() + " <br>" + 
							"Altitude   : " + Math.random() + " <br>";

		target.innerHTML = displayText;		
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