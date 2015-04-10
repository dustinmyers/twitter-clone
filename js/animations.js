$(document).ready(function (){
	$('#tweet-text-area').focus(function() {
		$("#tweet-text-area").animate({height: '5em'}),
		$('#tweet-controls div').show({display: 'inline-block'}),
		$('#tweet-submit').show({display: 'inline-block'})
	}) // on click tweet text area, grow input field and show tweet button and char count
	$('#tweet-text-area').focusout(function() {
		$("#tweet-text-area").animate({height: '2.5em'});
		$('#tweet-controls div').hide({display: 'none'}),
		$('#tweet-submit').hide({display: 'none'})
	})	 // on leave tweet text area, shrink input field and hide tweet button and char count
	
	var maxLength = 140;

	var charLengthWarning = function (length){
		console.log(length);
		if (length > 10) {
			$('#tweet-controls div').css({color:'red'});
			$('#tweet-submit').show({display: 'inline-block'})
		}
		if (length <= 10) {
			$('#tweet-controls div').css({color:'red'});
		}
		if (length < 0) {
			$('#tweet-submit').hide({display: 'none'});
		}
	} //-->char count turn red at 10, submit button disappear at -1.

	$('#tweet-text-area').keyup(function() {
		var textLength = $(this).val().length;
		var length = maxLength - textLength;
		$('#tweet-controls div').text(length);
		charLengthWarning(length);
	})//--> char countdown


}); //-- document ready -->






