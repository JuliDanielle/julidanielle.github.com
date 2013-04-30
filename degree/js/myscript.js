$(document).ready(function() {	

/* Start: show only bigbooks1 & small books 1 & descsriptions 1*/

	$("#small-books").show();
	$("#small-books2").hide();
	$("#small-books3").hide();
	$("#big-books").show();
	$("#big-books2").hide();
	$("#big-books3").hide();
	
/* Year_1 calls small books */
	
	$(".year_1").on("click",function(){
	$("#small-books").show();
	$("#big-books").show();
	$("#small-books2").hide();
	$("#small-books3").hide();
	$("#big-books2").hide();
	$("#big-books3").hide();
   });

/* Year_2 calls small books 2*/
	
	$(".year_2").on("click",function(){
	$("#small-books2").show();
	$("#big-books2").show();
	$("#small-books").hide();
	$("#small-books3").hide();
	$("#big-books").hide();
	$("#big-books3").hide();
   });

/* Year_3 calls small books 3*/
	
	$(".year_3").on("click",function(){
	$("#small-books3").show();
	$("#big-books3").show();
	$("#small-books").hide();
	$("#small-books2").hide();
	$("#big-books").hide();
	$("#big-books2").hide();
   });

/* Small book_1,2,3... calls big book_1,2,3... */

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
   
   $("#small-book_5 > img").on("click",function(){
    $("#big-books").show();
    $("#book-descriptions").hide();
    $(".title > div").hide()
    $("#big-book_5").show();
   });
   
   $("#small-book_6 > img").on("click",function(){
    $("#big-books").show();
    $("#book-descriptions").hide();
    $(".title > div").hide()
    $("#big-book_6").show();
   });
   
   $("#small-book_7 > img").on("click",function(){
    $("#big-books").show();
    $("#book-descriptions").hide();
    $(".title > div").hide()
    $("#big-book_7").show();
   }); 
   
 $("#small-book_8 > img").on("click",function(){
    $("#big-books").show();
    $("#book-descriptions").hide();
    $(".title > div").hide()
    $("#big-book_8").show();
   });
   
 $("#small-book_9 > img").on("click",function(){
    $("#big-books").show();
    $("#book-descriptions").hide();
    $(".title > div").hide()
    $("#big-book_9").show();
   });
   
 $("#small-book_10 > img").on("click",function(){
    $("#big-books").show();
    $("#book-descriptions").hide();
    $(".title > div").hide()
    $("#big-book_10").show();
   });
   
/* Small book2_1,2,3... calls big book2_1,2,3... */
	
  $("#small-book2_1 > img").on("click",function(){
    $("#big-books2").show();
    $("#big-books3").hide();
    $("#book-descriptions").hide();
    $(".title2 > div").hide()
    $("#big-book2_1").show();
   });
   
   $("#small-book2_2 > img").on("click",function(){
    $("#big-books2").show();
    $("#book-descriptions").hide();
    $(".title2 > div").hide()
    $("#big-book2_2").show();
   });
   
   $("#small-book2_3 > img").on("click",function(){
    $("#big-books2").show();
    $("#book-descriptions").hide();
    $(".title2 > div").hide()
    $("#big-book2_3").show();
   });
   
   $("#small-book2_4 > img").on("click",function(){
    $("#big-books2").show();
    $("#book-descriptions").hide();
    $(".title2 > div").hide()
    $("#big-book2_4").show();
   });
   
   $("#small-book2_5 > img").on("click",function(){
    $("#big-books2").show();
    $("#book-descriptions").hide();
    $(".title2 > div").hide()
    $("#big-book2_5").show();
   });
   
   $("#small-book2_6 > img").on("click",function(){
    $("#big-books2").show();
    $("#book-descriptions").hide();
    $(".title2 > div").hide()
    $("#big-book2_6").show();
   });

/* Small book3_1,2,3... calls big book3_1,2,3... */
	
  $("#small-book3_1 > img").on("click",function(){
    $("#big-books3").show();
    $("#book-descriptions").hide();
    $(".title3 > div").hide()
    $("#big-book3_1").show();
   });
   
   $("#small-book3_2 > img").on("click",function(){
    $("#big-books3").show();
    $("#book-descriptions").hide();
    $(".title3 > div").hide()
    $("#big-book3_2").show();
   });
   
   $("#small-book3_3 > img").on("click",function(){
    $("#big-books3").show();
    $("#book-descriptions").hide();
    $(".title3 > div").hide()
    $("#big-book3_3").show();
   });
   
   $("#small-book3_4 > img").on("click",function(){
    $("#big-books3").show();
    $("#book-descriptions").hide();
    $(".title3 > div").hide()
    $("#big-book3_4").show();
   });
   
   $("#small-book3_5 > img").on("click",function(){
    $("#big-books3").show();
    $("#book-descriptions").hide();
    $(".title3 > div").hide()
    $("#big-book3_5").show();
   });
   
   $("#small-book3_6 > img").on("click",function(){
    $("#big-books3").show();
    $("#book-descriptions").hide();
    $(".title3 > div").hide()
    $("#big-book3_6").show();
   });
   
 });
 
