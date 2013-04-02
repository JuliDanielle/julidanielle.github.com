/* $(document).ready(function() {
	
	$("#second-page").hide();
	$("#third-page").hide();
	
	 $("#breakfast-selector > img").on("click",function(){
   	 $("#second-page").show(); 
   	 $("#third-page").hide();
     $(".course > div").hide()
     $("#breakfast").show();
	});
	
	$("#lunch-selector > img").on("click",function(){
   	 $("#second-page").show(); 
   	 $("#third-page").hide();
     $(".course > div").hide()
     $("#lunch").show();
	}); 
	
	$(".ingredients > h3").on("click",function(){
		$(".ingredients-content").hide()
		$(".ingredients-content > ul").show();
	});*/
	
$(document).ready(function() {	
	
	$("#big-books").hide();
	$("#book-descriptions").hide();
	
	$("#small-book_1 > img").on("click",function(){
	$("#big-books").show();
	$("#book-descriptions").hide();
	$(".title > div").hide()
	$("#big-book_1").show();
   });
   
    $("#small-book_2 > img").on("click",function(){
    $("#big-books").show();
    $("#book-descriptions").hide();
    $(".title > div").hide()
    $("#big-book_2").show();
   });
   
   $("#small-book_3 > img").on("click",function(){
    $("#big-books").show();
    $("#book-descriptions").hide();
    $(".title > div").hide()
    $("#big-book_3").show();
   });
   
   $("#small-book_4 > img").on("click",function(){
    $("#big-books").show();
    $("#book-descriptions").hide();
    $(".title > div").hide()
    $("#big-book_4").show();
   });
   
   $("#big-book_1 > img").on("click",function(){
   $("#book-descriptions").show();
   $(".description > div").show()
   $("#description_1").show();
   $("#description_2").hide();
   });
   
   $("#big-book_2 > img").on("click",function(){
   $("#book-descriptions").show();
   $(".description > div").show()
   $("#description_1").hide();
   $("#description_2").show();
   
   });
   
 });
 
 
	