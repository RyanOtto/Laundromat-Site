$(document).ready(function() {

	$(".navbar-item").hover(
		function() {
			  $( this ).animate({"font-size":"150%"}, 100);
		},
		function(){
			$( this ).animate({"font-size":"120%"}, 100);
		}
	);

	$('#previous').click(gigiPreviousDialogue);
	$('#next').click(gigiNextDialogue);

	var gigiSpeechIndex=0;
	var gigiSpeechArray=['Welcome to our laundromat!','This is a second message!','And a third!','And a fourth!'];
	var gigiSpeechTimer = setInterval(gigiSpeechCycle, 5000);

	function gigiSpeechCycle() {
	  	if(gigiSpeechIndex > gigiSpeechArray.length-1){ gigiSpeechIndex=0; }
       	$('#gigiSpeech').fadeTo('1000', 0, function() { $('#gigiSpeech').text(gigiSpeechArray[gigiSpeechIndex-1]);});
		$('#gigiSpeech').fadeTo('1000', 1);
		gigiSpeechIndex++;
					console.log(gigiSpeechIndex);

   	}

	    function gigiNextDialogue(){
	    	if(gigiSpeechIndex > gigiSpeechArray.length-1){ gigiSpeechIndex=0; }
	    	gigiSpeechIndex++;
        	$('#gigiSpeech').fadeTo('1000', 0, function() { $('#gigiSpeech').text(gigiSpeechArray[gigiSpeechIndex-1]);});
			$('#gigiSpeech').fadeTo('1000', 1);
			clearInterval(gigiSpeechTimer);
			gigiSpeechTimer = setInterval(gigiSpeechCycle, 5000);
			console.log(gigiSpeechIndex);
	    }


	    function gigiPreviousDialogue(){
	    	gigiSpeechIndex--;
	    	if(gigiSpeechIndex <= 0){ gigiSpeechIndex=gigiSpeechArray.length; }
        	$('#gigiSpeech').fadeTo('1000', 0, function() { $('#gigiSpeech').text(gigiSpeechArray[gigiSpeechIndex-1]);});
			$('#gigiSpeech').fadeTo('1000', 1);
			clearInterval(gigiSpeechTimer);
			gigiSpeechTimer = setInterval(gigiSpeechCycle, 5000);
						console.log(gigiSpeechIndex);

	    }
});