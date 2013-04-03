$(document).ready(function() {	

/* Start hide all but year nav */
	
	$("#small-books").hide();
	$("#small-books2").hide();
	$("#small-books3").hide();
	$("#big-books").hide();
	$("#big-books2").hide();
	$("#big-books3").hide();
	$("#book-descriptions").hide();

/* Year_1 calls small books */
	
	$(".year_1").on("click",function(){
	$("#small-books").show();
	$("#small-books2").hide();
	$("#small-books3").hide();
	$("#book-descriptions").hide();
	$(".title > div").hide()
	$("#big-books2").hide();
	$("#big-books3").hide();
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
   
/* Big book_1,2,3... calls description_1,2,3 */
   
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
   
   $(".show_it1").click(function () { 
   	$("#description_1").show("slow"); 
   	$("#description_2").hide();
   	$("#description_3").hide();
   	$("#description_4").hide();
   });
   
   $(".show_it2").on("click",function(){
    $("#description_2").show();
    $("#description_1").hide();
    $("#description_3").hide();
    $("#description_4").hide();
   });
    
    $(".show_it3").on("click",function(){
    $("#description_3").show();
    $("#description_2").hide();
    $("#description_4").hide();
    $("#description_1").hide();
    });
    
/* Year_2 calls small books_2 */
  
  $(".year_2").on("click",function(){
	$("#small-books2").show();
	$("#small-books").hide();
	$("#small-books3").hide();
	$("#book-descriptions").hide();
	$(".title > div").hide()
	$("#big-books").hide();
	$("#big-books3").hide();
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
   
/* Year_3 calls small books */
	
	$(".year_3").on("click",function(){
	$("#small-books3").show();
	$("#small-books2").hide();
	$("#small-books").hide();
	$("#book-descriptions").hide();
	$(".title > div").hide()
	$("#big-books3").hide();
	$("#big-books2").hide();
	$("#big-books").hide();
   });

/* Small book3_1,2,3... calls big book3_1,2,3... */
	
  $("#small-book3_1 > img").on("click",function(){
    $("#big-books3").show();
    $("#book-descriptions").hide();
    $(".title2 > div").hide()
    $("#big-book3_1").show();
   });
   
   $("#small-book3_2 > img").on("click",function(){
    $("#big-books3").show();
    $("#book-descriptions").hide();
    $(".title2 > div").hide()
    $("#big-book3_2").show();
   });
  
 });
 
 
	