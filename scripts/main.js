$(document).ready(function() {
	
	$(".navbar-item").hover(function() {
		  $( this ).animate({"font-size":"120%"}, 100);
	},
	function(){
		$( this ).animate({"font-size":"100%"}, 100);
	}
	);
});