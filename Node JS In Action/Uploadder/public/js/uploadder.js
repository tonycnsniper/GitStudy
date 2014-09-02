
$(document).ready(function() {
	$("#content input[type='submit']").css("display","none");
	$("#content a input").change(function(){
		$("#content input[type='text']").val($("#content a input").val());
		$("#content a").css("display","none");
		$("#content input[type='submit']").css("display","inline-block");
	})
})
