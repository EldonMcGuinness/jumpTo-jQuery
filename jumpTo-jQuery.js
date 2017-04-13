//jumpTo Plugin
(function( $ ) {

	$.fn.jumpTo = function( options ) {

		// Should we animate this jump or not
		var animate = true;

		// What container should we scroll to get to this element
		var container = 'html,body';



		if (options != undefined){
			// console.log("Options Given:");
			// console.log(options);
			animate = ( typeof(options["animate"]) == "boolean" ) ? options["animate"] : true;
			if ( $(options["container"]).length > 0 ) { container = options["container"]}
		}

		if (animate) {
			// console.log("Scroll To "+container+"["+$(container).scrollTop()+"|"+$(this).offset()["top"]+"]");
			$(container).animate({
				scrollTop: $(this).offset()["top"]
			});
		}else{
			// console.log("Jump To");
			$(container).scrollTop($(this).offset()["top"]);
		}
		
		return false;
	}

})(jQuery);
