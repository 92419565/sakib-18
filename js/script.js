$(document).ready(function(){
	$(".box").css({"width":"200px", "height":"200px", "background":"#660066"});
	$(".p1").css({"font-size":"20px", "color":"#fff", "text-align":"center","display":"none"});
	$(".p2").css({"font-size":"20px", "color":"#fff", "text-align":"center","display":"none"});
	$("button").click(function(){
		$(".box").css({"background":"#cc66ff", "transition":"2s"});
		$(".p1").css({"display":"block", "color":"red"});
		$(".p2").css({"display":"none", "color":"#fff"});
	});
	$(".btn1").click(function(){
		$(".box").css({"background":"#0066ff", "transition":"2s"});
		$(".p1").css({"display":"none", "color":"red"});
		$(".p2").css({"display":"block", "color":"#fff"});
	});
	
	
});