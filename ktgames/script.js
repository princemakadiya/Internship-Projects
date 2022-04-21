//action
$(document).ready(function(){
	$(".actiongames").slice(0, 8).show();
	$("#actionMore").on("click", function(e){
	  e.preventDefault();
	  $(".actiongames:hidden").slice(0, 4).slideDown();
	  if($(".actiongames:hidden").length == 0) {
		document.getElementById('actionMore').style.visibility = 'hidden';
		  
	  }
	});
	
  })
//education
$(document).ready(function(){
	$(".education").slice(0, 8).show();
	$("#educationMore").on("click", function(e){
	  e.preventDefault();
	  $(".education:hidden").slice(0, 4).slideDown();
	  if($(".education:hidden").length == 0) {
		document.getElementById('educationMore').style.visibility = 'hidden';
	  }
	});
	
  })


//arcade
$(document).ready(function(){
	$(".arcade").slice(0, 8).show();
	$("#arcadeMore").on("click", function(e){
	  e.preventDefault();
	  $(".arcade:hidden").slice(0, 4).slideDown();
	  if($(".arcade:hidden").length == 0) {
		document.getElementById('arcadeMore').style.visibility = 'hidden';
	  }
	});
	
  })


//sports
$(document).ready(function(){
	$(".sports").slice(0, 8).show();
	$("#sportsMore").on("click", function(e){
	  e.preventDefault();
	  $(".sports:hidden").slice(0, 4).slideDown();
	  if($(".sports:hidden").length == 0) {
		document.getElementById('sportsMore').style.visibility = 'hidden';
	  }
	});
	
  })


//puzzle
$(document).ready(function(){
	$(".puzzle").slice(0, 8).show();
	$("#puzzleMore").on("click", function(e){
	  e.preventDefault();
	  $(".puzzle:hidden").slice(0, 4).slideDown();
	  if($(".puzzle:hidden").length == 0) {
		document.getElementById('puzzleMore').style.visibility = 'hidden';
	  }
	});
	
  })

$(document).ready(function(){
    $('.dropdown-toggle').dropdown()
});

