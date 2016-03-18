$(document).ready(function () {
	$('#content').children().not('#footer_image').hide()
	$('#content').append('<div id="thankyou_message">Thank You</div>')
	$('#thankyou_message').delay(5000).fadeOut(400)
	$('#content').children().not('#footer_image, #thankyou_message').delay(5000).fadeIn(400)

	if (jQuery.browser.mobile == false) {
		window.location.href = "https://www.facebook.com/HuaweiNewZealand/app/476047795919951/"
	}
})