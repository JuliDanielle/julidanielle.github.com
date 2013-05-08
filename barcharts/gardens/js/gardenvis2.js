//goole map plot for gardens

$(function() {
	//$("<p>").text("public gardens")
		//	.appendTo("body");

});

//what I added
	$(function() {
		//console.log(gardens);
	  
	  /*var mapOptions = { //first draw map
        center: new google.maps.LatLng(42.3583,-71.0603 ),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP // ROADMAP, SATELLITE, HYBRID, TERRAIN
      };
      var myMap = new google.maps.Map($("#map-canvas")[0],mapOptions);*/
	  
	  var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

	  var i = 0;
	  while(i < gardens.data.length) {
	     var garden = gardens.data[i];    //this variable is 'garden' singular
	     var coordinates = garden[13]; 
	     var x = parseFloat(coordinates[1],10);	//Turn a string into #. To parse is to turn into somehting else.
	     var y = parseFloat(coordinates[2],10);
	     
	     if(x < minX) { minX = x; }
		 if(x > maxX) { maxX = x; }
		 
		 if(y < minY) { minY = y; }
    	 if(y > maxY) { maxY = y; }
		 
		 
		 var GardenClass =$("<div>").addClass("gardens"); //add or append garden to div
		 $(".gardens").append(garden);
		 
		 var diffX = maxX - minX;
		 var screenX = (x - minX) / diffX * 500;
		 
		 var diffY = maxY - minY;
   		 var screenY =  500 - (y - minY) / diffY * 500;
		 
		var div =$("<div>").addClass("circles").css({
		position:"absolute", width:8, height:8,
		backgroundColor:"orange",
		borderRadius:"25px",
		left: screenX, top: screenY,
		opacity:0.7	
	})
	    .attr("title", coordinates ); // display title is coordinates
	    $("body").append(div);
	    
	    /* var lon = garden.longitude;
	     var lat = garden.latitude;
	     
	   var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat,lon),
        title: "MassArt",
        map: myMap
     })  */

	  i++; 
	}
	//console.log([minX, maxX]);

});