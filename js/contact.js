$(document).ready(function() {

$("#sendMessage").on("click", function() {
    message = $("#contactform").serialize();
    $.ajax({
        url: "//formspree.io/dynamicrealities@gmail.com", 
        method: "POST",
        data: {message: message},
	dataType:"json",
	success:function() {
		console.log('success');	
		$('#formBlock').hide();
		$('#thankyouBlock').show();
	}	
    });

});		
		
});
