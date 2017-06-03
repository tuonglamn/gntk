function sideBar_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function sideBar_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAzIDW9AZseqnR8vcY12OtfQPIV_MODSXQ&callback=myMap";
  document.body.appendChild(script);
}

function myMap() {
	myCenter=new google.maps.LatLng(10.639846, 106.480328);
	var mapOptions= {
	    center:myCenter,
	    zoom:12, scrollwheel: false, draggable: false,
	    mapTypeId:google.maps.MapTypeId.ROADMAP
  	};
  	var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  	var marker = new google.maps.Marker({
    	position: myCenter,
  	});
  	marker.setMap(map);
}

window.onload = loadScript;
