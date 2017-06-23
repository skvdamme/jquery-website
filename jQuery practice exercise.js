$(document).ready(function(){


	$("#image01").hover(function() {
		$("#image01").slideToggle();
	});

	$("#image02").hover(function() {
		$("#image02").slideUp();
	});

	$("#image03").hover(function() {
		$("#image03").fadeOut();
	});

	$("#image04").click(function() {
		$("#image04").fadeOut();
	});


	$("#button1").click(function(){
        $("#elephanttext2").hide("fast", function(){
            alert("The paragraph about elephants is now hidden");
        });
    });

	 $("#button2").click(function(){
        $("#liontext2").hide("slow", function(){
            alert("The paragraph about lion's is now hidden");
        });
    });

});