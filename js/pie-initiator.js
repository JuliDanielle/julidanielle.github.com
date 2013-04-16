(function basic_pie(container) {

  /*var
    d1 = [[0, 4]],
    d2 = [[0, 3]],
    d3 = [[0, 1.03]],
    d4 = [[0, 3.5]],
    d5 = [[0, 2]],
    graph;
  
  graph = Flotr.draw(container, [
    { data : d1, label : 'Comedy' },
    { data : d2, label : 'Action' },
    { data : d3, label : 'Romance'},
    { data : d4, label : 'Drama' },
    { data : d5, label : 'School' }*/

  var	
	d1 = [[0, 6103]],
	d2 = [[0, 1450]],
	d3 = [[0, 1280]],
	d4 = [[0, 1059]],
	d5 = [[0, 325]],
	d6 = [[0, 283]],
	d7 = [[0, 257]],
	d8 = [[0, 150]],
	d9 = [[0, 145]],
	d10 = [[0, 115]],
	d11 = [[0, 48]],
	graph;
  
  graph = Flotr.draw(container, [
    { data : d1, label : 'Parent' },
    { data : d2, label : 'Patron' },
    { data : d3, label : 'Other'},
    { data : d4, label : 'Administrator' },
    { data : d5, label : 'Board Member' },
    { data : d6, label : 'Teacher' },
    { data : d7, label : 'Pressure Group' },
    { data : d8, label : 'Religious Group' },
    { data : d9, label : 'Board Member' },
    { data : d10, label : 'Government' },
    { data : d11, label : 'Elected Official' }
  ], {
    HtmlText : false,
    grid : {
      verticalLines : false,
      horizontalLines : false,
      outlineWidth : 0,
      show: false,
    },
    xaxis : { showLabels : false },
    yaxis : { showLabels : false },
    pie : {
      show : true, 
      explode : 7,
    },
    mouse : { 
    	track : true
    },
    legend : {
      position : 'se',
      backgroundColor : null,
      labelBoxBorderColor: 'rgb(140, 140, 140)',
    }
  });
})(document.getElementById("pie-initiator"));
