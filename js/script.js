$(document.fonts).ready(function(fontFaceSet) {
  $("#loading").delay(2000).queue(function(){
  	$(this).css({"opacity":"0"});
  	$(this).delay(1000).queue(function(){
  		$(this).css({"display":"none"});
  	});
  });
	console.log("test");
});

