//goole map plot for gardens


//what I added
	$(function() {
		//console.log(gardens);
	  
	  var mapOptions = { //drew map first
        center: new google.maps.LatLng(42.3583,-71.0603 ),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP // ROADMAP, SATELLITE, HYBRID, TERRAIN
      };
      var myMap = new google.maps.Map($("#map-canvas")[0],mapOptions);
	  
	  var i = 0;
	  while(i < gardens.length) {
	     var garden = gardens[i];    //this variable is 'garden' singular
	     
	     var lon = garden.longitude;
	     var lat = garden.latitude;
	     
	     var coordinates = gardens[11]
	     
	   var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat,lon),
        title: "MassArt",
        map: myMap
     })  

	  i++; 
	  };

    });