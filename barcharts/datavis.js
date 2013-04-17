$(function() {
	$("<p>").text("boston crime barchart")
			.appendTo("body");
});

$(function() {

    var i = 0;
    while(i < data.length) {
      var name = data[i];
      var fullName = name.name;
      var inc = parseInt(name.incidents);
      var dom = parseInt(name.domestic);
      var incFraction = inc / maxIncident;
      var domFraction = dom / maxDom;
      var incWidth = incFraction * 1000;
   	  var domWidth = domFraction * 100;
   	  var maxIncident = 10652;
      var maxDom = 2841;
      
      var row = $("<div>").addClass("row");
      
      var neighborhoodDiv = $("<div>")
      				.addClass("neighborhood")
      				.text(fullName + " ")
      				.appendTo(row);
      
       var domesticDiv = $("<div>")
      					.css({ width: domWidth })
      					.addClass("domestic")
      					.text(dom)
      					.appendTo(row);
      
      var incidentDiv = $("<div>")
      					.css({ width: incWidth })
      					.addClass("incident")
      					.text(inc)
      					.appendTo(row);
      
      
      
      
   /*   var clear = $("<div>")
    				.addClass("clear");
    
    $("body").append(clear);
    
    */

      			
      $("p").append(row); 
      console.log(name)
      i++;
    }
    

});