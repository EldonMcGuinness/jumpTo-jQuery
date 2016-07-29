//jumpTo Plugin
(function( $ ) {

	$.fn.jumpTo = function( options ) {

		var animate = true;

	    if (options != undefined){
	      animate = ( typeof(options["animate"]) == "boolean" ) ? options["animate"] : true;
	    }

	    if (animate) {
	    	console.log("Scroll To");
			$('html,body').animate({
				scrollTop: $(this).offset()["top"]
			});
		}else{
			console.log("Jump To");
			$('html,body').scrollTop($(this).offset()["top"]);
		}
	}

})(jQuery);
