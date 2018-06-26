$(document).ready(function() {

	$(".navbar-item").hover(
		function() {
			  $( this ).animate({"font-size":"150%"}, 100);
		},
		function(){
			$( this ).animate({"font-size":"120%"}, 100);
		}
	);

	var gigiSpeechIndex=0;
	var gigiSpeechArray=['Welcome to our laundromat!','This is a second message!','And a third!','And a fourth!'];
	    setInterval(function() {
	    	if(gigiSpeechIndex > gigiSpeechArray.length-1){ gigiSpeechIndex=0; }
        	$('#gigiSpeech').fadeTo('1000', 0, function() { $('#gigiSpeech').text(gigiSpeechArray[gigiSpeechIndex-1]);});
			$('#gigiSpeech').fadeTo('1000', 1);
			gigiSpeechIndex++;

    }, 5000);
});