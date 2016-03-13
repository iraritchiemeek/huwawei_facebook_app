$(document).ready(function () {
	$('#content').children().not('#footer_image').hide()
	$('#content').append('<div id="thankyou_message">Thank You</div>')
	$('#thankyou_message').delay(5000).fadeOut(400)
	$('#content').children().not('#footer_image, #thankyou_message').delay(5000).fadeIn(400)
})