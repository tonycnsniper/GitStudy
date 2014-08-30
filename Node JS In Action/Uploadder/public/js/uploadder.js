
$(document).ready(function() {
	$("#content a").onClick(function() {
		$("#content input[type='text']").val($(this).val());
		$("#content a").removeClass('gray').addClass('green')
	})
})
