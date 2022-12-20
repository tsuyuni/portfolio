document.fonts.ready.then(function() {
	$("#loading").delay(2000).queue(function(){
	  	$(this).css({"opacity":"0"});
	  	$("body").css({"overflow":"scroll"})
	  	$(this).delay(1000).queue(function(){
	  		$(this).css({"display":"none"});
		});
	});
	console.log("test");
});

